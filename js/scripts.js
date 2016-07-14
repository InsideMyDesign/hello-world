// JavaScript Document

$(document).ready(function() {
	"use strict";
		
}); // end: ready


$(window).on("orientationchange",function(event){
  "use strict";
  //alert("Orientation is: " + event.orientation);
  
  if(event.orientation === 'landscape') // Landscape
  {
    $("p").css({"background-color":"#ff00aa","font-size":"300%"}).text('Landscape');
  }
  else if (event.orientation === 'portrait')// Portrait
  {
    $("p").css({"background-color":"#abc145","font-size":"200%"}).text('Portrait');
  }
});


