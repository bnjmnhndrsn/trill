Trill.Views.CardsIndexItem = Backbone.View.extend({
	events: {
		"click .delete-item": "deleteItem"
	},
	className: "card-index-item",
	template: JST["cards/index_item"],
	initialize: function(){
		this.listenTo(this.model, "sync", this.render);
	},
	render: function(){
		this.$el.html( this.template({ card: this.model }) );
		this.$el.attr({
			"data-id": this.model.id,
			"data-title": this.model.get("title"),
			"data-description": this.model.get("description")
		});
		return this;
	},
	deleteItem: function(){
		this.model.destroy();
	}
})