window.Trill = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
	  new Trill.Routers.TrillRouter();
	  Backbone.history.start();
  }
};

$(function(){
	Trill.initialize();
})