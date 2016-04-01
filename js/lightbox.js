

$(document).ready(function(){

	var $overlay = $('<div id="overlay"></div>');
	var $image = $("<img>");
	var $caption = $("<p></p>");


	//Keep track of image index for prev/next
	var $index = 0;

	//we are assigning the length total
	//this makes it flexible to expand the gallery or take away
	var $galleryLength = $('#gallery a').length;


	//An image to overlay
	$overlay.append($image);

	//A caption to overlay
	$overlay.append($caption);

	//overlat prev/next buttons
	$overlay.append()

	//Add overlay
	$("body").append($overlay);

	//Capture the click event
	$('#gallery a').click(function(event){
		
		event.preventDefault();
		var imageLocation = $(this).attr('href');

		//Update overlay with the image linked in the link
		$image.attr('src', imageLocation);

		//Show the overlay
		$overlay.show();

		//Get the alt attribute and set caption **(will change this)**
		var captionText = $(this).attr('title');
		$caption.text(captionText);

	});

	//When overlay is clicked
	$overlay.click(function(){
  		//Hide the overlay
  		$overlay.hide();
	});


});