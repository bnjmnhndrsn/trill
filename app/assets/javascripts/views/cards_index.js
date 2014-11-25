Trill.Views.CardsIndex = Backbone.CompositeView.extend({
	template: JST["cards/index"],
	events: {
		"sortupdate" : "updateOrder",
		"sortreceive .cards" : "cacheCard",
		"sortremove .cards" : "removeCard"
	},
	initialize: function(){
		this.listenTo( this.collection, 'add remove', this.render )
	},	
	render: function(){
		var content = this.template();
		this.$el.html(content);
		this.rebindViews();
		setTimeout(function(){
			this.$(".cards").sortable({connectWith: ".cards"});
		}.bind(this), 0);
		return this;
	},
	rebindViews: function(){
		var that = this;
		this.subviews(".cards").forEach(function(subview){
			that.removeSubview(".cards", subview);
		});
		
		this.setOrder();
		
		this.collection.each(function(card){
			var view = new Trill.Views.CardsIndexItem({model: card});
			that.addSubview(".cards", view);
		});
	},
	cacheOrder: function($nodes){
		var order = {};
		$.each( $nodes, function(idx, node){
			order[ $(node).data("id") ] = idx;
		});
		this._order = order;
	},
	setOrder: function(){
		if (this._order){
			_.each(this._order, function(ord, id){
				var model = this.collection.get(id);
				if (model) {
					model.set("ord", ord);
					model.save();
				}
			}.bind(this));
		}
		if (this._cached){
			this._cached.set("ord", this._order[this._cached.id]);
			this._cached.save();
			this.collection.add(this._cached);
			this._cached = null;
		}	
	},
	updateOrder: function(event){
		var $nodes = $(event.currentTarget).find(".card-index-item");
		console.log($nodes);
		this.cacheOrder($nodes);
		this.setOrder();
	},
	cacheCard: function(event, ui){
		var card = new Trill.Models.Card({
			id: ui.item.data("id"),
			list_id: this.collection.list.id,
			description: ui.item.data("description"),
			title: ui.item.data("title")
		});
		
		this._cached = card;
	},
	removeCard: function(event, ui){
		var card = new Trill.Models.Card({
			id: ui.item.data("id")
		});
		this.collection.remove(card);
	}
});


