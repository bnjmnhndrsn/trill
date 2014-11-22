Trill.Views.ListsShow = Backbone.CompositeView.extend({
	tagName: "div",
	className: "list col-xs-4",
	template: JST["lists/show"],
	initialize: function(){
		this.listenTo( this.model, 'change', this.render );
		this.listenTo( this.collection, 'add', this.addCardView );
		this.listenTo( this.collection, 'remove', this.removeCardView );
		
		var showView = this;
		this.collection.each(function(card){
			showView.addCardView(card);
		});
		
		var cardsFormView = new Trill.Views.CardsForm({ 
			model: this.model
		});
		
		this.addSubview( ".new-card", cardsFormView )
	},
	render: function(){
		this.$el.html( this.template({ list: this.model }) );
		return this;
	},
	addCardView: function(card){
		this.addSubview( ".cards", new Trill.Views.CardsIndexItem({ model: card }) );
	},	
	removeCardView: function(card){
		var toDelete = _.find(this.subviews(".cards"), function(subview){
			return subview.model.id === card.id;
		});
		
		this.removeSubview( ".cards", toDelete );
	}
})