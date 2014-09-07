
addQuestion = function(questionText, type, answers, listingID){
  return questionsTable.insert({
    'questionText':questionText,
    'type':type,
    'answers':answers,
    'listingID':listingID
  });
}

getQuestions = function(listingID){
	return questionsTable.find({'listingID':listingID});
}

addListing = function(bedrooms, baths, squareFootage, lotSize, price, yearBuilt, style, propertyType, amenities, userID, pictures){
	return listingsTable.insert({
		'bedrooms':bedrooms,
		'baths':baths,
		'squareFootage':squareFootage,
		'lotSize':lotSize,
		'price':price,
		'yearBuilt':yearBuilt,
		'style':style,
		'propertyType':propertyType,
		'amenities':amenities,
		'userID':userID,
		'pictures':pictures
	})
}

getListings = function(userID0){
	return listingsTable.find({
		'userID':userID
	});
}

addUser = function(email, password){
	var user = usersTable.findOne({
		'email':email
	});
	if(user == undefined){
		return usersTable.insert({
			'email':email,
			'password':password
		})
	}return false;
}

logUserIn = function(email, password){
	var user = usersTable.findOne({
		'email':email,
		'password':password
	});
	return user!=undefined?user._id:false;
}
user = undefined;
setUser = function(newUser){
	user = newUser;
}
getUser = function(){
	return user;
}