Listings = new Meteor.Collection("listings");

Template.sidebar_Listing.listings = function () {
	return Listings.find();
}	


