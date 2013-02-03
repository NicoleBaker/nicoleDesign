$(".image-opener").click(function(event) {
	event.preventDefault();
	
	var title = $(this).attr('title');
	var image = $(this).attr('href');
	var $modal = $("#image-modal");
	
	$modal.modal('show');
	$modal.find('h3').text(title);
	$modal.children('.modal-body').html("<img src='" + image +"'>");
});