Trill.Routers.TrillRouter = Backbone.Router.extend({
	initialize: function(options){
		this.$rootEl = $(options.rootEl);
		this.boards = new Trill.Collections.Boards();
		this.boards.fetch();
	},
	routes: {
		"": "index",
		"boards/:id": "show"
	},
	index: function(){
		var indexView = new Trill.Views.BoardsIndex({ collection: this.boards });
		this._swapView(indexView);
	
	},
	show: function(){
		
	},
	_swapView: function(newView){
		if (this._currentView){
			this._currentView.remove();
		}
		
		this._currentView = newView;
		this.$rootEl.html( newView.render().$el );
	}
});