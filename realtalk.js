questionsTable = new Meteor.Collection("Questions");
usersTable = new Meteor.Collection("Users");
listingsTable = new Meteor.Collection("Listings");

if (Meteor.isClient) {
  var Router = Backbone.Router.extend({
    routes: {
      "listing/:param" : "listings",
      ""                : "main",
      ":page"           : "main",
      ".*"              : ""
    },
    main: function(page) {
      document.body.innerHTML = "";
      page = page?page:"index";
      UI.insert(UI.render(Template[page]), document.body);
      document.body.style.padding = "0px 0px 0px 0px";
    },
    listings: function(page, ID){
      document.body.innerHTML = "";
      document.cookie = "listingID=" + ID;
      UI.insert(UI.render(Template["ClientLanding"]), document.body);
      document.body.style.padding = "0px 0px 0px 0px";
    }
  });
  var app = new Router;
  Meteor.startup(function () {
    Backbone.history.start({pushState: true});
  });

  Template.listing_list.listings = function(){
    return listingsTable.find();
  }
  Template.address.events({
    "click": function () {
      
      document.getElementById('createListingForm').style.display = "block";
      console.log($(this).parent().first());
      $('#addressInput')     .val(this.address);
      $('#BedroomInput')     .val(this.bedrooms);
      $('#bathroomInput')    .val(this.baths);
      $('#squareftInput')    .val(this.squareFootage);
      $('#acreInput')        .val(this.lotSize);
      $('#priceInput')       .val(this.price);
      $('#yearBuiltInput')   .val(this.yearBuilt); 
      $('#styleInput')       .val(this.style);
      $('#propertyTypeInput').val(this.propertyType);
      $('#amenitiesInput')   .val(this.amenities);
    }
  });

  Template.edit.events({
    "click": function () {
      //Pull up survey questions
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}


sleep = function(millis, callback) {
setTimeout(function()
{ callback(); }
, millis);
}