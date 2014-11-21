Trill.Views.BoardsShow = Backbone.CompositeView.extend({
	template: JST["boards/show"],
	
	initialize: function(){
		this.listenTo( this.model, 'change', this.render )
	},	
	render: function(){
		console.log(this.model);
		var content = this.template({ board: this.model });
		this.$el.html(content);
		return this;
	}
});