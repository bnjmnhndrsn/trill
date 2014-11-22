Trill.Views.BoardsIndexItem = Backbone.View.extend({
	events: {
		"click .open-modal" : "openModal" 
	},
	className: "col-xs-3 board-index-item",
	template: JST["boards/index_item"],
	initialize: function(){
	},
	openModal: function(){
		this.$(".modal-wrapper").show();
	},
	render: function(){
		this.$el.html( this.template({ board: this.model }) );
		return this;
	}
})