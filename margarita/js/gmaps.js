function initMap() {
        var myLatLng = {lat: 51.811018, lng: 19.457311};

        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 18,
          scrollwheel: false,
          center: myLatLng
        });

        var marker = new google.maps.Marker({
          position: myLatLng,
          map: map,
          title: 'Margarita'
        });

}
