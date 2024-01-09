const zoom_control = document.getElementById("zoom-control");

mapboxgl.accessToken = 'pk.eyJ1IjoiY3Jpc2ZhdmFybyIsImEiOiJjbG0xOTFpcm8ycGcyM2ZwaHJrODNxcndhIn0.H8Xu-AtLW760J80cNDJGoQ';
const map = new mapboxgl.Map({
  container: 'map', // container ID
  // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
  style: 'mapbox://styles/crisfavaro/clml8u25d04ac01p70em88rpt', // style URL
  center: [-44.62368, -10.20237], // starting position [lng, lat]
  zoom: 4, // starting zoom
  scrollZoom      : false,
  boxZoom         : false,
  doubleClickZoom : false,
  touchZoomRotate : false,
  dragRotate      : false,
  dragPan         : false,
});




// Fazendo o botao funcionar
zoom_control.addEventListener("click", ()=>{
    zoom_control.toggleAttribute("active");

    if(zoom_control.hasAttribute("active")){
        zoom_control.innerText = "Desligar Zoom"; 
        map.scrollZoom.enable();
        map.boxZoom.enable();
        map.doubleClickZoom.enable();        
        map.touchZoomRotate.enable();        
        map.dragRotate.enable();        
        map.dragPan.enable();        
        
    }else{
        zoom_control.innerText = "Ligar Zoom"    
        map.scrollZoom.disable();
        map.boxZoom.disable();
        map.doubleClickZoom.disable();
        map.touchZoomRotate.disable();        
        map.dragRotate.disable();    
        map.dragPan.disable();
    };
})


map.on('load', () => {
    map.resize();
    map.addSource('deforestation_circle', {
        type: 'geojson',
        // Use a URL for the value for the `data` property.
        data: 'https://cristianfavaro.github.io/caatinga-deforestation/json/caatinga.geojson'
    });

    map.addSource('municipalities-caatinga', {
        type: 'geojson',
        // Use a URL for the value for the `data` property.
        data: 'https://cristianfavaro.github.io/caatinga-deforestation/json/municipalities_caatinga.json'
    });

    map.addSource('caatinga-poligonos', {
        type: 'geojson',
        // Use a URL for the value for the `data` property.
        data: 'https://cristianfavaro.github.io/caatinga-deforestation/json/caatinga_data.json'
    });


    map.addLayer({
        'id': 'municipalities-caatinga',
        'type': 'fill',
        'source': 'municipalities-caatinga',
        'layout': {},
        'paint': {
            'fill-color': 'yellow', // blue color fill
            'fill-opacity': 0.7
        },
    });   

    map.addLayer({
        'id': 'caatinga-poligonos',
        'type': 'fill',
        'source': 'caatinga-poligonos',
        'layout': {},
        'paint': {
            'fill-color': 'red', // blue color fill
            'fill-opacity': 0.7
        },
    });   


    // map.addLayer({
    //     'id': 'municipalities-caatinga',
    //     'type': 'fill',
    //     'source': 'municipalities-caatinga',
    //     'layout': {},
    //     'paint': {
    //         'fill-color': 'yellow', // blue color fill
    //         'fill-opacity': 0.7
    //     },
    // });   
});
