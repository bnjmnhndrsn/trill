Trill.Views.ListsForm = Backbone.View.extend({
	template: JST["lists/form"],
	events: {
		"submit form": "newList"
	},
	initialize: function(){
		this.open = false;
		this.$(".toggleable").hide();
	},
	render: function(){
		this.$el.html( this.template() );
		return this;
	},
	newList: function(event){
		event.preventDefault();
			console.log(this.collection);
		var 
			$form = $(event.currentTarget),
			data = $form.serializeJSON(),
			list = new Trill.Models.List({ board_id: this.collection.board.id })
		;
		
		var view = this;
	
		list.save(data.list	, {
			success: function(model){
				view.collection.add(model);
				$form.find("input[type='text']").val("");
				view.toggle();
			},
			error: function(){
				console.log(arguments[1]);
				console.log("Card creation error");
			}
		});
		
	}
});