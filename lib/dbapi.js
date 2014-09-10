
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

addListing = function(address, bedrooms, baths, squareFootage, lotSize, price, yearBuilt, style, propertyType, amenities, userID, pictures){
	return listingsTable.insert({
		'address':address,
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
	});
}

getListingId = function(address){
    return listingsTable.find({
        'address':address
    });
}

addAnswer = function(questionID, answers){
	return answersTable.insert({'questionID':questionID,'answers':answers});
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

setUser = function(email){
	SetCookie('email',email);
}
getUser = function(){
	return GetCookie('email');
}
setListingID = function(listingID){
	SetCookie('listingID',listingID);
}
getListingID = function(){
	return GetCookie('listingID');
}
setUserID = function(userID){
	SetCookie('userID',userID);
}
getUserID = function(){
	return GetCookie('userID');
}

var addQuestion = function(question, questionNum){
		var div = document.createElement('div');
		div.innerHTML+='<h3>'+question.questionText+'</h3>';
		if(question.type == "Yes/No"){
			var id = "Q"+questionNum+"-1";
			div.innerHTML += '<ul class="dropdown-menu" role="menu" id="'+id+'"><li><a href="#">Yes</a></li><li><a href="#">No</a></li></ul>';
		}if(question.type == "Multiple"){
			var id = "Q"+questionNum+"-1";
			div.innerHTML += '<ul class="dropdown-menu" role="menu" id="'+id+'">';
			for(i = 0; i < 4; i++){
				div.innerHTML += '<li><a href="#">'+question.answers[i]+'</a></li>';
			}
	        div.innerHTML += '</ul>';
		}if(question.type == "Checkboxs"){
			div.innerHTML += '<ul class="dropdown-menu" role="menu">';
			for(i = 0; i < question.answers.length; i++){
				var id = "Q"+questionNum+"-"+(i+1);
				div.innerHTML += '<div class="checkbox"><label><input type="checkbox" value="" id='+id+'>';
				div.innerHTML += question.answers[i];
				div.innerHTML += '</label></div>';
			}
	        div.innerHTML += '</ul>';
		}if(question.type == "1-10"){
			var id = "Q"+questionNum+"-1";
			div.innerHTML += '<div id="'+id+'" class="ui-slider ui-slider-horizontal ui-widget ui-widget-content ui-corner-all"><span class="ui-slider-handle ui-state-default ui-corner-all" tabindex="0" style="left: 82%;"></span></div>';
		}if(question.type == "Text"){
			var id = "Q"+questionNum+"-1";
			div.innerHTML += '<div><input type="text" class="form-control" id="'+id+'"></div>';
		}if(question.type == "Numeric"){
			var id = "Q"+questionNum+"-1";
			div.innerHTML += '<div><input type="number" class="form-control" id="'+id+'"></div>';
		}
		$('#surveyContainer').append(div);
	};
