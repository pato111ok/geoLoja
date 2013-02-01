function registrarse (form) {   
    $nombre= form.new_login;
    alert("Hola".$nombre)
    
}

function loguearse (form) {
    alert("Loguearse");
    
}

function ingreso(){
   // window.open("file:///android_asset/www/mapa.html");
    window.location.href ='mapa.html';
}

var map
var marcador


  function initialize() {
    
    
    var latlng = new google.maps.LatLng(-3.989509, -79.204280);
    var myOptions = {
      zoom: 13,
      center: latlng,
      mapTypeId: google.maps.MapTypeId.ROADMAP
      
    };
    map = new google.maps.Map(document.getElementById("map_canvas"),
        myOptions);
        
        
    marcador = new google.maps.Marker( {
        position: latlng,
        map:map,
        title: 'Tu ubicación'
    })

    //** LLAMADA A BDS
        //kfc
      var latitudeAndLongitudeOne = new google.maps.LatLng('-4.011749','-79.202467');
        var markerOne = new google.maps.Marker({
        position: latitudeAndLongitudeOne,
        map: map,
        icon: 'images/chart.png'
        });
        
     //UTPL
      var latitudeAndLongitudeTwo = new google.maps.LatLng('-3.987732', '-79.199034');
         var markerTwo = new google.maps.Marker({
            position: latitudeAndLongitudeTwo,
            map: map,
            icon: 'images/chart.png'
            
        });
        //jipiro
        var latitudeAndLongitudeThree = new google.maps.LatLng('-3.97247','-79.203272');
          var markerThree = new google.maps.Marker({
          position: latitudeAndLongitudeThree,
          map: map,
          icon: 'images/chart.png'    
          });
          
       //zologico
       var latitudeAndLongitudeFour = new google.maps.LatLng('-3.958363', '-79.216404');
          var markerFour = new google.maps.Marker({
              position: latitudeAndLongitudeFour,
              map: map,
              icon: 'images/chart.png'
          });
          var latitudeAndLongitudeOne = new google.maps.InfoWindow({
              content:"buen pollo!!"
          });
          var latitudeAndLongitudeTwo = new google.maps.InfoWindow({
              content:"excelente universidad!!"
          });
          var latitudeAndLongitudeThree = new google.maps.InfoWindow({
              content:"muy lindo el parque"
          });
          var latitudeAndLongitudeFour = new google.maps.InfoWindow({
              content:"buen cuidado con los animales!!"
          });

          google.maps.event.addListener(markerOne, 'click', function() {
                latitudeAndLongitudeOne.open(map,markerOne);
          });
          
          google.maps.event.addListener(markerTwo, 'click', function() {
              latitudeAndLongitudeTwo.open(map,markerTwo);
          });
          google.maps.event.addListener(markerThree, 'click', function() {
              latitudeAndLongitudeThree.open(map,markerThree);
         });
          google.maps.event.addListener(markerFour, 'click', function() {
              latitudeAndLongitudeFour.open(map,markerFour);
         });
  }
  
  function mostrarUbicacion(){
        navigator.geolocation.getCurrentPosition( lecturaGPS , errorGPS , {enableHighAccuracy:true} )  
        
  }
  
  function lecturaGPS(ubicacion){
      
      var miubicacion = new google.maps.LatLng(ubicacion.coords.latitude, ubicacion.coords.longitude);
      
      map.setCenter(miubicacion)
      marcador.setPosition(miubicacion)
      
  }
  
  function errorGPS(){
      alerta("No se puede localizar :(")
  }

