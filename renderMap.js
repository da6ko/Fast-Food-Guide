mapboxgl.accessToken = 'pk.eyJ1Ijoia2Fsb3lhbmRhc2hrbyIsImEiOiJjbHI1N3JuMzAwM3J4MmlwNDZwZXM4MThnIn0.idqNT9v0IxtnXrWtTTgGhQ';
const map = new mapboxgl.Map({
container: 'map',
center: [25.238569, 42.766279], 
zoom: 7
});


const markers = [
    { coordinates: [22.874792, 43.988458], title: 'Густото', rating: 4 },
    { coordinates: [23.335326, 42.697960], title: 'Дюнерландия', rating: 5 },
    { coordinates: [27.471433, 42.493436], title: 'Iskender Kebap', rating: 3.5},
    { coordinates: [25.314915, 42.870864], title: 'Дон Густо', rating: 2 }
  ];

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