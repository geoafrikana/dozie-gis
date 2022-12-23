import React from 'react';
import { MapContainer, TileLayer, LayersControl, GeoJSON } from 'react-leaflet'
import buildings from './assets/data.json'

function WebMap() {
  const EdoCenter = [6.446499,5.602304]
  const stringify = (obj)=>{
    let str = ''
    for (const key in obj){
      str += `<em>${key}</em>: ${obj[key]} <br>`
    }
    return str
  }
  const onEachFeature = (feature, layer) => {
    
    const popupContent = `<Popup> 
    ${stringify(feature.properties)}
     </Popup>`
    layer.bindPopup(popupContent)
  }

    return (
    <>
      <MapContainer center={EdoCenter} zoom={13} scrollWheelZoom={true}>
  <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
  <LayersControl position="topright">
  <LayersControl.Overlay name="Google Satellite">
  <TileLayer
    attribution='&copy; Google Satellite'
    url="http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}"
  />
  </LayersControl.Overlay>

  <LayersControl.Overlay name="Data" >
  <GeoJSON data={buildings} onEachFeature={onEachFeature} />
  </LayersControl.Overlay>
  </LayersControl>
  
  
 </MapContainer>
    </>
  )
}

export default WebMap