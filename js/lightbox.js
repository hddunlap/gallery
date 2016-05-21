

$(document).ready(function(){

	var $overlay = $('<div id="overlay"></div>');
	var $image = $("<img>");
	var $caption = $("<p></p>");
	var $prev = $("<button type='button' id='prev' class='next-prev'></button>");
	var $next = $("<button type='button' id='next' class='next-prev'></button>");
	var $exit = $("<button type='button' id='exit' class='exit'></button>");

	//An image to overlay
	$overlay.append($image);


	//A caption to overlay
	$overlay.append($caption);

	$overlay.append($prev);
	$overlay.append($next);
	$overlay.append($exit);


	//Add overlay
	$("body").append($overlay);



	//Capture the click event
	$('#gallery a').click(function(event){
		
		event.preventDefault();

		var index = $("#gallery a").index(this);
		console.log('This index is: '+ index);

		var imageLocation = $(this).attr('href');


		//Update overlay with the image linked in the link
		$image.attr('src', imageLocation);

		//Show the overlay
		$overlay.slideDown(1000);

		//Get the alt attribute and set caption
		var captionText = $(this).attr('title');
		$caption.text(captionText);

		$prev.click(function(){
			index -= 1;
			var prevImage = $('#gallery a').get(index);
			var imageLocation = prevImage.href;
			$image.attr('src', imageLocation);
			var captionText = prevImage.title;
			$caption.text(captionText);
		});

		$next.click(function(){
			index += 1;
			var nextImage = $('#gallery a').get(index);
			var imageLocation = nextImage.href;
			$image.attr('src', imageLocation);
			var captionText = nextImage.title;
			$caption.text(captionText);
		});


	});



	// $next.click(function(){
	// 	var imageLocation = $('#gallery a').next().attr('href');
	// 	$image.attr('src', imageLocation);

	// 	var captionText = $('#gallery a').next().attr('title');
	// 	$caption.text(captionText);
	// });

	// $prev.click(function(){
	// 	var imageLocation = $('#gallery a').prev().attr('href');
	// 	$image.attr('src', imageLocation);

	// 	var captionText = $('#gallery a').prev().attr('title');
	// 	$caption.text(captionText);
	// });


	//When overlay is clicked
	$exit.click(function(){
  		//Hide the overlay
  		$overlay.slideUp(1000);
	});


});