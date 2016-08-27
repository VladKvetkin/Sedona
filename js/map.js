function initialize() {
            var mapProp = {
                center: new google.maps.LatLng(34.868375, -111.762616),
                zoom: 10,
                mapTypeId: google.maps.MapTypeId.ROADMAP
            };

            var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);  
            var marker = new google.maps.Marker({
                position: {lat: 34.868375, lng: -111.762616},
            });

            marker.setMap(map);  

        }
            
        google.maps.event.addDomListener(window, 'load', initialize);    