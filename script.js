function initPano() {
  var urlParams = new URLSearchParams(window.location.search);
  var lat = parseFloat(urlParams.get('lat')) || 35.658581; // デフォルトの緯度: 東京タワー
  var lng = parseFloat(urlParams.get('lng')) || 139.745433; // デフォルトの経度: 東京タワー

  var latLng = { lat: lat, lng: lng };

  var panorama = new google.maps.StreetViewPanorama(
    document.getElementById('map'), {
      position: latLng,
      pov: {
        heading: 34,
        pitch: 10
      }
    }
  );
}
