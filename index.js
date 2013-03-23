$(".image-opener").click(function(event) {
	event.preventDefault();
	
	var title = $(this).attr('title');
	var image = $(this).attr('href');
	var $modal = $("#image-modal");
	
	$modal.modal('show');
	$modal.find('h3').text(title);
	$modal.children('.modal-body').html("<img src='" + image +"'>");
});


// portfolio see more open and closer
$(".link-animation").click(function(event) {
	var open   = $(this).attr('data-open');
	var state  = $(this).attr('state');
	var $arrow = $(this).find('.action-arrow');
	
	event.preventDefault();
	if (state == 'closed') {
		// open it
		$(open).slideDown();
		$(this).attr('state', 'opened');
		flip($arrow, '180');
	}else{
		// close it
		$(open).slideUp();
		$(this).attr('state', 'closed');
		flip($arrow, '360');
	};
});

$(document).on('click', '.link-animation-closer', function() {
	var parent_name = $(this).parents('.more-container').attr('id') + '-opener';
	var $parent   = $('html').find('#' + parent_name);
	var $see_more = $(this).parents('.more-container');
	var $arrow    = $parent.find('.action-arrow');
	
	$see_more.slideUp();
	$parent.attr('state', 'closed');
	flip($arrow, '360');
});

function flip ($element, degrees) {
	$element.css({
	  '-webkit-transform' : 'rotate('+degrees+'deg)',
	     '-moz-transform' : 'rotate('+degrees+'deg)',  
	      '-ms-transform' : 'rotate('+degrees+'deg)',  
	       '-o-transform' : 'rotate('+degrees+'deg)',  
	          'transform' : 'rotate('+degrees+'deg)',  
	               'zoom' : 1

	    });
}