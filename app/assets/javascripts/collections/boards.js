Trill.Collections.Boards = Backbone.Collection.extend({
	model: Trill.Models.Board,
	url: "api/boards",
	getOrFetch: function(id){
		var boards = this, board;
		
		if (board = boards.get(id)){
			board.fetch();
		} else {
			board = new Trill.Models.Board({ id: id });
			board.fetch({
				sucess: function(){
					boards.add(board);
				}
			});
		}
		
		return board;
	}
})