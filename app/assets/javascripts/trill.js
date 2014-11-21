window.Trill = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
	  new Trill.Routers.TrillRouter({
		  rootEl: "#main"
	  });
	  Backbone.history.start();
  }
};