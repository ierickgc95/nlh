// function loadMap() {
//    var latlng = new google.maps.LatLng(-12.0300251,-76.909727);
//    var myOptions = {
//      zoom: 15,
//      center: latlng,
//      mapTypeId: google.maps.MapTypeId.ROADMAP
//    };
//    var map = new google.maps.Map(document.getElementById("map_container"),myOptions);
//
//    var marker = new google.maps.Marker({
//      position: latlng,
//      map: map,
//      title:"my hometown, Malim Nawar!"
//    });
//
//  }
//function initMap() {
//	var directionsService = new google.maps.DirectionsService;
//	var directionsDisplay = new google.maps.DirectionsRenderer;
//	var latlng = new google.maps.LatLng(-12.0300251, -76.909727);
//	var myOptions = {
//		zoom : 15,
//		center : latlng,
//		mapTypeId : google.maps.MapTypeId.ROADMAP
//	};
//	var map = new google.maps.Map(document.getElementById('map_container'),
//			myOptions);
//	directionsDisplay.setMap(map);
//
//	document.getElementById('buscar').addEventListener('click', function() {
//		calculateAndDisplayRoute(directionsService, directionsDisplay);
//
//	});
//}
//
//window.onload = initMap;
//
//function calculateAndDisplayRoute(directionsService, directionsDisplay) {
//	var waypts = [];
//	var checkboxArray = document.getElementById('waypoints');
//	// console.log(checkboxArray.length);
//	for (var i = 0; i < checkboxArray.length; i++) {
//		if (checkboxArray.options[i].selected) {
//			waypts.push({
//				location : checkboxArray[i].value,
//				stopover : true
//			});
//		}
//	}
//}
//
//var request = {
//	origin : $('#origen').val(),
//	destination : $('#destino').val(),
//	travelMode : google.maps.DirectionsTravelMode[$('#modo_viaje').val()],
//	unitSystem : google.maps.DirectionsUnitSystem[$('#tipo_sistema').val()],
//	provideRouteAlternatives : true
//};
//
//directionsService.route(request, function(response, status) {
//	if (status == google.maps.DirectionsStatus.OK) {
//		directionsDisplay.setMap(map);
//		directionsDisplay.setPanel($("#panel_ruta").get(0));
//		directionsDisplay.setDirections(response);
//	} else {
//		alert("No existen rutas entre ambos puntos");
//	}
//});

var map;
var markers = [];
var MonitoringTransport = {

	init : function init() {

//		$('.bootstrap-select').selectpicker();
//		MonitoringTransport.googleMap();
		 var directionsService = new google.maps.DirectionsService;
		 var directionsDisplay = new google.maps.DirectionsRenderer;
		 var latlng = new google.maps.LatLng(-13.416582, -76.130591);
		 var myOptions = {
		 zoom : 15,
		 center : latlng,
		 mapTypeId : google.maps.MapTypeId.HYBRID
		 };
		 var map = new
		 google.maps.Map(document.getElementById('map_container'),
		 myOptions);
		 directionsDisplay.setMap(map);
		 
		 //CAPA DE TRÁFICOS
		 var trafficLayer = new google.maps.TrafficLayer();
			trafficLayer.setMap(map);
			
		//ADD MARKER	
		 var marker = new google.maps.Marker({
		      position: latlng,
		      icon: '/images/icons/car-32_1.png',
		      map: map,
		      title:"k18-1455 king kong 3k- pandereta 2k- Av Luis Massaro"
		    });
		 
		 //STRING CONTENT FOR INFO MARKER
		 var contentStringInfo ='<div class=content><h5>Vehículo: k18-1455</h5></br>'+
			 '<p>Cliente: Jacky widle</br>'+
			 'Mercaderpia: Lad. King Kong 18</br>'+ 
			 'cantidad: 3000</br>'+
			 'Fecha:05/08/2017 01:45 pm</p></div>'
			 
		var infoWindow = new google.maps.InfoWindow({
			content: contentStringInfo
		});	 
		 
		 //add Listener marker
		 marker.addListener('click',function(){
			 infoWindow.open(map, marker);
		 })

		 //EJECUTAR CON CLICK
		 document.getElementById('buscar').addEventListener('click',
		 function() {
		 calculateAndDisplayRoute(directionsService, directionsDisplay);
		
		 });
				
		 function calculateAndDisplayRoute(directionsService,
		 directionsDisplay) {
		 var waypts = [ {
						
		 location : {
		 lat : -13.418297,
		 lng : -76.1130445
		 },
		 stopover : true
		 }, {
		 location : {
		 lat : -13.41839,
		 lng : -76.1382067
		 },
		 stopover : true
		 } ];
				
		
		 directionsService.route({
//		  origin : document.getElementById('#origen').value,
//		  destination : document.getElementById('#destino').value,
		  origin: { lat: waypts[0].location.lat, lng: waypts[0].location.lng
		 },
		  destination: { lat: waypts[waypts.length-1].location.lat, lng:
		 waypts[waypts.length-1].location.lng },
		 origin: { lat : -13.418297,
			 	   lng : -76.1130445},
		 destination: {lat : -13.41839,
			 		   lng : -76.1382067},
		 waypoints : null,
		 optimizeWaypoints : true,
		 travelMode : google.maps.TravelMode.DRIVING,
		 unitSystem: google.maps.UnitSystem.METRIC
		 }, function(response, status) {
		 if (status === google.maps.DirectionsStatus.OK) {
		 console.log(response.routes[0]);
		 console.log(response.routes[0].legs[0].distance);
		 directionsDisplay.setMap(map);
		 directionsDisplay.setPanel($("#panel_ruta").get(0));
		 directionsDisplay.setDirections(response);
		 var route = response.routes[0];
							
		 } else {
		 window.alert('Directions request failed due to ' + status);
		 }
		 });
		 };
		 
		 $('.select').select2({
				minimumResultsForSearch : Infinity,
			});
		 
	}

	

};

$(document).ready(MonitoringTransport.init);

//  
// $('#buscar').live('click', function(){
// alert("asd");
// rockAndRoll();
// });
//	 
// $('.opciones_ruta').live('change', function(){
// rockAndRoll();
// });
