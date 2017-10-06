(function() {

	$(function() {
		alert(myVariable);
	});

	function getBaseUrl() {
		return window.location.href.match(/^.*\//);
	}
	;

	$('#modal_remote').on(
			'show.bs.modal',
			function() {
				$(this).find('.modal-body').load(
						'/collaborator/form-conten', function() {

							// Init Select2 when loaded
							$('.select').select2({
								minimumResultsForSearch : Infinity
							});
						});
			});

})();

$("#nuevo").on('click', function() {
	var xhttp;
	if (window.XMLHttpRequest) {
		xhttp = new XMLHttpRequest();
	} else {
		// code for IE6, IE5
		xhttp = new ActiveXObject("Microsoft.XMLHTTP");
	};
	$.ajax({
		url : '/colaborador/res',
		type : 'GET',
		success : function(result,status,xhr) {
			console.log(status);
			console.log(result);
			console.log(xhr);
			
		}
	})
})

// $(function() {
// console.log("hola");
// alert("hola");
// });
