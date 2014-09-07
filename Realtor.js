


if (Meteor.is_client) {
	Template.sidebar_Listing.Listings = function () {
	return Listings.find();
	}
}

