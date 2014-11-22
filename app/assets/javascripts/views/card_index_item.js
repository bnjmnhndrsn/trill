Trill.Views.CardsIndexItem = Backbone.View.extend({
	events: {
		"click .delete-item": "deleteItem"
	},
	className: "card-index-item",
	template: JST["cards/index_item"],
	initialize: function(){
	},
	render: function(){
		this.$el.html( this.template({ card: this.model }) );
		return this;
	},
	deleteItem: function(){
		this.model.destroy();
	}
})