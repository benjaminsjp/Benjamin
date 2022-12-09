// Initialize and add the map
function initMap() {
    // The location of Uluru
    const uluru = { lat: 59.21837755219902, lng: 10.942165061484642 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }
  
  window.initMap = initMap;
  