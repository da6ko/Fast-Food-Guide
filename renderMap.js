mapboxgl.accessToken = 'YOUR_MAPBOXGL_TOKEN';
const map = new mapboxgl.Map({
  container: 'map',
  center: [25.238569, 42.766279],
  zoom: 7
});

map.on('load', () => {
  const backendURL = 'http://localhost:8080/api/get-feedback';
  console.log('Fetching data from:', backendURL);
  console.log(backendURL);
  fetch(backendURL)
    .then(response => response.json())
    .then(markers => {
      markers.forEach(marker => {
        const popupContent = `
          <h3>${marker.name}</h3>
          <p>Rating: ${marker.rate} stars</p>
          <p>Comment: ${marker.comment}</p>
        `;

        new mapboxgl.Marker()
          .setLngLat([parseFloat(marker.longitude), parseFloat(marker.latitude)])
          .setPopup(new mapboxgl.Popup().setHTML(popupContent))
          .addTo(map);
      });
    })
    .catch(error => console.error(error));
});
