Trill.Views.BoardsShow = Backbone.CompositeView.extend({

	template: JST["boards/show"],
	
	initialize: function(){
		this.listenTo( this.model, 'sync', this.render );
		this.listenTo( this.collection, 'add', this.addListView );
		
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
		return this;
	},
	addListView: function(list){
		var listShow = new Trill.Views.ListsShow({ model: list, collection: list.cards() })
		this.addSubview( "#lists-container", listShow );
	}
});