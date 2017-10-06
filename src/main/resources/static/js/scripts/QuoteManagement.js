var Quote = {

	init : function init() {
		// Basic responsive configuration
		dataTable = $('.datatable-responsive')
				.DataTable(
						{
							autoWidth : false,
							searching : false,
							responsive : true,
							lengthMenu : [ 5, 10, 15, 20 ],
							columnDefs : [ {
								orderable : false,
								width : 'auto',
								targets : [ 5 ]
							} ],
							dom : '<"datatable-header"fl><"datatable-scroll-wrap"t><"datatable-footer"ip>',
							language : {
								processing : "Procesando...",
								search : "Buscar:",
								lengthMenu : "Mostrar _MENU_ registros",
								info : "Mostrando registros del _START_ al _END_ de un total de  _TOTAL_ registros",
								infoEmpty : "Mostrando registros del 0 al 0 de un total de 0 registros",
								infoFiltered : "(filtrado de un total de _MAX_ registros)",
								infoPostFix : "",
								loadingRecords : "Cargando...",
								zeroRecords : "No se encontraron resultados",
								emptyTable : "Ningún dato disponible en esta tabla",
								paginate : {
									first : "Primero",
									previous : "Anterior",
									next : "Siguiente",
									last : "Último"
								},
								aria : {
									sortAscending : ": Activar para ordenar la columna de manera ascendente",
									sortDescending : ": Activar para ordenar la columna de manera descendente"
								},
								columnDefs : [ {
									"width" : "5%",
									"targets" : 0
								} ]
							},
							drawCallback : function() {
								$(this).find('tbody tr').slice(-3).find(
										'.dropdown, .btn-group').addClass(
										'dropup');
							},
							preDrawCallback : function() {
								$(this).find('tbody tr').slice(-3).find(
										'.dropdown, .btn-group').removeClass(
										'dropup');
							}
						});

		// Iniciar select2
		$('.dataTables_length select').select2({
			minimumResultsForSearch : Infinity,
			width : 'auto'
		});
		// Iniciar filtro
		$('.dataTables_filter input[type=search]').attr('placeholder',
				'Type to filter...');
		// Iniciar select 2
		$('#buscador').select2({
			minimumResultsForSearch : Infinity
		});
		// inicializar select
		$('.select').select2({
			minimumResultsForSearch : Infinity,
		});
	}

};

$(document).ready(Quote.init);