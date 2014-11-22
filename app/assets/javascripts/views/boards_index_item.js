Trill.Views.BoardsIndexItem = Backbone.View.extend({
	className: "col-xs-3 board-index-item",
	template: JST["boards/index_item"],
	initialize: function(){
	},
	render: function(){
		this.$el.html( this.template({ board: this.model }) );
		return this;
	}
})