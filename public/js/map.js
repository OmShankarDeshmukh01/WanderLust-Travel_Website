 mapboxgl.accessToken = mapToken;


    const map = new mapboxgl.Map({
        container :"map",
        //Choose from Mapbox's core styles , or make your own style with mapbox studio
        style :"mapbox://styles/mapbox/satellite-streets-v12", //style URL
        center:listing.geometry.coordinates, //starting position [longitude , latitude]
        zoom:10, //starting zoom
    });
    

    const marker = new mapboxgl.Marker({color :"red"})
        .setLngLat(listing.geometry.coordinates)//listing.geometry.coordinates
        .setPopup(new mapboxgl.Popup({offset: 25})
        .setHTML(`<h4>${listing.title}</h4><p>Exact location will be provided after booking!</p>`)
    )
        .addTo(map);

