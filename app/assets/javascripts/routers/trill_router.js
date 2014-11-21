Trill.Routers.TrillRouter = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = $(options.rootEl);
		Trill.Collections.boards = new Trill.Collections.Boards();
		Trill.Collections.boards.fetch();
	},
	routes: {
		"": "index",
		"boards/:id": "show"
	},
	index: function(){
		var indexView = new Trill.Views.BoardsIndex({ collection: Trill.Collections.boards });
		this._swapView(indexView);
	
	},
	show: function(id){
		var board = Trill.Collections.boards.getOrFetch(id);
		var showView = new Trill.Views.BoardsShow({ model: board });
		this._swapView(showView);
		
	},
	_swapView: function(newView){
		if (this._currentView){
			this._currentView.remove();
		}
		
		this._currentView = newView;
		this.$rootEl.html( newView.render().$el );
	}
});