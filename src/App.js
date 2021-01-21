import React from 'react'
import Map from './Map/Map';
 


const App = () => {

  const getData = (val) => {

    console.log("CHILD TO PARENT", val);
  }

   
  return (
    <>
      <div id="#1">
        {[1, 2].map(item => {
          return <Map idText={`map${item}`} sendData={getData} />
        })}
          
      </div>
    </>
  )
}

export default App
