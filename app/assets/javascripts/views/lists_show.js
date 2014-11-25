Trill.Views.ListsShow = Backbone.CompositeView.extend({
	events: {
		"click .delete-item": "deleteList"
	},
	tagName: "div",
	className: "list",
	template: JST["lists/show"],
	initialize: function(){
		this.$el.attr("data-id", this.model.id);
		
		this.listenTo( this.model, 'change:title', this.render );

		var cardsIndexView = new Trill.Views.CardsIndex({
			collection: this.collection
		});
		
		this.addSubview( ".cards-container", cardsIndexView )
		
		var cardsFormView = new Trill.Views.CardsForm({ 
			model: this.model
		});
		
		
		this.addSubview( ".new-card", cardsFormView )
	},
	render: function(){
		this.$el.html( this.template({ list: this.model }) );
		this.attachSubviews();
		return this;
	},
	deleteList: function(){
		this.model.destroy();
	}
})