Trill.Views.BoardsForm = Backbone.View.extend({
	template: JST["boards/form"],
	events: {
		"submit form" : "newBoard"
	},
	initialize: function(){
		
	},
	render: function(){
		this.$el.html( this.template() );
		return this;
	},
	newBoard: function(event){
		
		event.preventDefault();
		var $form = $(event.currentTarget),
			data = $form.serializeJSON(),
			board = new Trill.Models.Board();
		board.save(data.board, {
			success: function(model){
				Trill.Collections.boards.add(model);
				$form.find("input[type='text']").val("");
			},
			error: function(){
				console.log(arguments[1]);
				console.log("Board creation error");
			}
		});
		
	}
	
});