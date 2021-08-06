 

// import React,{useEffect} from 'react';
// import Geocode from "react-geocode";
 
// const App = () => {
//    useEffect(() => {
//      console.log("Called")
//     Geocode.setApiKey("AIzaSyCwi8jdM7JESQxOZVEsNaCQyeqK6iK1C4I");
//     Geocode.enableDebug();
  
//     Geocode.fromLatLng("29.311661","47.481766" ).then(
//       response => {
//         const address = response.results[0].formatted_address;
//         console.log("address",address)      
//       },
//       error => {
//         console.error("error test",error);
//       }
//     );
//   },[])
//   return (
//     <div>
      
//     </div>
//   )
// }
 
// export default App

import React from 'react'
import Map from './Map/Map';
 
const App = () => {
  const getData = (val) => {
    console.log("CHILD TO PARENT", val);
  }
  return (
    <>
    <div>HELLO MAP </div>
      <div id="#1">
        {[1, 2].map(item => {
          return <Map idText={`map${item}`} sendData={getData} />
        })}
          
      </div>
    </>
  )
}

export default App
