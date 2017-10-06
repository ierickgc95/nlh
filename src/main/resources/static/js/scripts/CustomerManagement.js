var map;
var markers = [];
var CustomerMagament = {

	init : function init() {

		$('.bootstrap-select').selectpicker();
		CustomerMagament.googleMap();
	},
	googleMap : function initMap() {

		var latlng = new google.maps.LatLng(-13.4235537,-76.147861);
		var myOptions = {
			zoom : 15,
			center : latlng,
			mapTypeId : google.maps.MapTypeId.TERRAIN
		};
		// Google map
		var map = new google.maps.Map(document.getElementById('map_container'),
				myOptions);
		// Servicio de google
//		var service = new google.maps.places.PlacesService(map);

		// Borrar markers
		function deleteMarkers() {
			clearMarkers();
			markers = [];
		}
		;
		// Limpiar markers
		function clearMarkers() {
			setMapOnAll(null);
		}
		;
		// Mostrar markers
		function showMarkers() {
			setMapOnAll(map);
		}
		;

		// Poner todos los markers en el mapa desde el array
		function setMapOnAll(map) {
			for (var i = 0; i < markers.length; i++) {
				markers[i].setMap(map);
			}
		}
		;
		// This event listener will call addMarker() when the map is
		// clicked.
		map.addListener('click', function(event) {
			deleteMarkers();
//			service.getDetails({
//				placeId : 'ChIJN1t_tDeuEmsRUsoyG83frY4'
//			}, function(place, status) {
//				if (status == google.maps.places.PlacesServiceStatus.OK) {
					addMarker(event.latLng);
//					console.log(place.formatted_address);
//				}
//			});

		});

		function addMarker(location) {
			var marker = new google.maps.Marker({
				position : location,
				map : map
			});

			console.log(marker.getPosition().lat());
			console.log(marker.getPosition().lng());
			console.log(marker);
			markers.push(marker);
		}
		;

	}

};

$(document).ready(CustomerMagament.init);

//  
// $('#buscar').live('click', function(){
// alert("asd");
// rockAndRoll();
// });
//	 
// $('.opciones_ruta').live('change', function(){
// rockAndRoll();
// });
