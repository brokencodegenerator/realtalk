if (Meteor.isClient) {
  var Router = Backbone.Router.extend({
    routes: {
      ""         : "main",
      ":index"   : "main",
      ":Realtor" : "main"
    },
    main: function(page) {
      document.body.innerHTML = "";
      page = page?page:"index";
      UI.insert(UI.render(Template[page]), document.body);
      document.body.style.padding = "0px 0px 0px 0px";
    }
  });
  var app = new Router;
  Meteor.startup(function () {
    Backbone.history.start({pushState: true});
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}
