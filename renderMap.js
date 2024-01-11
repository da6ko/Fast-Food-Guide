mapboxgl.accessToken = 'YOUR-MAPBOXGL-TOKEN';
const map = new mapboxgl.Map({
  container: 'map',
  center: [25.238569, 42.766279],
  zoom: 7
});

fetch('http://localhost:3000/markers')
  .then(response => response.json())
  .then(markers => {
    markers.forEach(marker => {
      const popupContent = `
        <h3>${marker.title}</h3>
        <p>Rating: ${marker.rating} stars</p>
      `;

      new mapboxgl.Marker()
        .setLngLat(marker.coordinates)
        .setPopup(new mapboxgl.Popup().setHTML(popupContent))
        .addTo(map);
    });
  })
  .catch(error => console.error(error));