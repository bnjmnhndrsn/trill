Trill.Views.CardsForm = Backbone.View.extend({
	template: JST["cards/form"],
	events: {
		"click .toggle": "toggle",
		"submit form" : "newCard"
	},
	initialize: function(){
		this.toggled = false;
		this.$(".open").hide();
	},
	render: function(){
		this.$el.html( this.template({ list_id: this.model.id }) );
		return this;
	},
	toggle: function(event){
		this.open = !this.open;
		
		if (this.open){
			this.$(".toggle").text("Cancel");
			this.$(".toggleable").show();
		} else {
			this.$(".toggleable").hide();
			this.$(".toggle").text("Add Card");
		}
		
		return false;
		
	},
	newCard: function(event){
		event.preventDefault();
		var $form = $(event.currentTarget),
			data = $form.serializeJSON(),
			card = new Trill.Models.Card();
		
		var view = this;
		
		card.save(data.card, {
			success: function(model){
				view.model.cards().add(model);
				$form.find("input[type='text']").val("");
				$form.find("textarea").val("");
				view.toggle();
			},
			error: function(){
				console.log(arguments[1]);
				console.log("Card creation error");
			}
		});
		
	}
});