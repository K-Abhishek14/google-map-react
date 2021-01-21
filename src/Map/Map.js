import React, { useEffect } from 'react';
import * as MapboxGeocoder from '@mapbox/mapbox-gl-geocoder';
import * as mapboxgl from 'mapbox-gl';

const Map = ({idText,sendData}) => {
  useEffect(() => {
    mapboxgl.accessToken = 'pk.eyJ1IjoiYWJoaXRlY25vdHJlZSIsImEiOiJja2p6YTMwMWMwNWxtMm5vNThrMjdzbGkzIn0.49zHTMipxscPu8gBag2mFA';
    var map = new mapboxgl.Map({
      container: idText ,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [47.98, 29.375],
      zoom: 13
    });
 
    const geocoder = new MapboxGeocoder({
      accessToken: mapboxgl.accessToken,
      marker: false
      
    })

    var marker = new mapboxgl.Marker({ 'color': '#008000' })
    geocoder.on('result', function (data) {
      console.log("DATA",data);
      console.log("CONTEXT", data.result.context);
      // let context = data.result.context;
      // context && context.map((item,index) =>{
      //   console.log("Item",item);
      //   console.log("item.text",item.text);
      // })
      console.log("Place name:", data.result.place_name)
      // sendData(data.result.place_name)

      map.on('load', function () {
        console.log("Place name11:", data.result.place_name)
        sendData(data.result.place_name)
      })
     
      var point = data.result.center;
      console.log("POINT", point)
      marker.setLngLat(point).addTo(map);
    });
    map.addControl(geocoder)
  })
  
  return (
    <div id={idText} style={{position:'relative',width:'100%',height:'22rem',borderRadius:'1rem',overflow:'hidden'}}></div>
  )
}
export default Map
