$(document).ready(function(){

	$('#articles-content').hide();
	$('#portfolio-content').hide();

	$('a').on('click', function(e) {
	  e.preventDefault();
	  $('.selected').removeClass('selected');
	  $(this).addClass('selected');
	  $('.stuff').slideUp();
	    
	  var panel = $(this).attr('id');  
	  $('#' + panel + '-content').slideDown();  
	});

});