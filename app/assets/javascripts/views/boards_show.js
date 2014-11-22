Trill.Views.BoardsShow = Backbone.CompositeView.extend({
	template: JST["boards/show"],
	
	initialize: function(){
		this.listenTo( this.model, 'sync', this.render );
		this.listenTo( this.collection, 'add', this.addListView );
		this.collection.each(function(lists){
			indexView.addListView(list);
		});
	},	
	render: function(){
		var content = this.template({ board: this.model });
		this.$el.html(content);
		this.attachSubviews();
		return this;
	},
	addListView: function(list){
		var listShow = new Trill.Views.ListsShow({ model: list, collection: list.cards() })
		this.addSubview( ".lists-container", listShow );
	}
});