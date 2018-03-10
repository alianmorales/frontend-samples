function initMap() {
        var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 25.8576, lng: -80.2781}
        });

        setMarkers(map);
      }

      var places = [
        ['Miami Beach', 25.7907, -80.1300, 5],
        ['Brickell', 25.7602, -80.1959, 4],
        ['Hialeah', 25.8576, -80.2781, 3],
        ['Aventura', 25.9565, -80.1392, 2],
        ['Opa Locka', 25.9023, -80.2503, 1]
      ];

      function setMarkers(map) {
          var iconImg = { url: 'http://designsbyalian.com/codes/dba-marker1.png',
            // This marker is 20 pixels wide by 32 pixels high.
            size: new google.maps.Size(30, 40),
            // The origin for this image is (0, 0).
            origin: new google.maps.Point(0, 0),
            // The anchor for this image is the base of the flagpole at (0, 32).
            anchor: new google.maps.Point(0, 32)
          };
     
        for (var i = 0; i < places.length; i++) {
            var place = places[i];
            var marker = new google.maps.Marker({
              position: {lat: place[1], lng: place[2]},
              map: map,
              icon: iconImg,     
              title: place[0]   
            });
          }   
      };