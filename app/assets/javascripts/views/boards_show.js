Trill.Views.BoardsShow = Backbone.CompositeView.extend({
	events: {
		"sortupdate #lists" : "updateOrder",
	},
	template: JST["boards/show"],
	
	initialize: function(){
		this.listenTo( this.model, 'sync', this.render );
		this.listenTo( this.collection, 'add', this.addListView );
		this.listenTo( this.collection, 'remove', this.removeListView );
		
		var indexView = this;
		this.collection.each(function(list){
			indexView.addListView(list);
		});

		var listform = new Trill.Views.ListsForm({ collection: this.collection });
		this.addSubview( ".new-list", listform );
		
	},	
	render: function(){
		var content = this.template({ board: this.model });
		this.$el.html(content);
		this.attachSubviews();
		this.$el.find("#lists").sortable();
		return this;
	},
	addListView: function(list){
		var listShow = new Trill.Views.ListsShow({ model: list, collection: list.cards() })
		this.addSubview( "#lists", listShow );
	},	
	removeListView: function(list){
		var toDelete = _.find(this.subviews("#lists"), function(subview){
			return subview.model.id === list.id;
		});
		
		this.removeSubview( "#lists", toDelete );
	},
	updateOrder: function(event){
		var order = $.map( this.$("#lists").find(".list"), function(list){
			return $(list).data("id");
		});
		
		order.forEach(function(id, idx){
			var list = this.collection.get(id);
			list.set("ord", idx);
			list.save();
		}.bind(this));
	}
});