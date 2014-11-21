Trill.Views.BoardsIndex = Backbone.CompositeView.extend({
	template: JST["boards/index"],
	events: {
	},
	initialize: function () {
		var indexView = this;
		
		this.collection.each(function(board){
			indexView.addBoardView(board);
		});
		
		this.listenTo(this.collection, "add", this.addBoardView);
	},
	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	},
	addBoardView: function(board){
		this.addSubview( ".index-list", new Trill.Views.BoardsIndexItem({ model: board }).render() );
	}
});