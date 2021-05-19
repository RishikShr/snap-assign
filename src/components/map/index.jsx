import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

import RenderScene from "../renderScene";
import  './index.scss';

const MapContainer = styled.div`
  width: 50vw;
  height: 50vh;
`;

mapboxgl.accessToken = "pk.eyJ1Ijoic2h1YmhhbWt1bWF3YXQ3ODkiLCJhIjoiY2tvM3hoOG9kMWRtMjJ1azQwNmlqMmpkdiJ9.1rAuBqANI9uOd4bzVbdxyg";

const Map = () => {
  const mapContainer = useRef();
  const [lng, setLng] = useState(0);
  const [lat, setLat] = useState(0);
  const [zoom, setZoom] = useState(0);
  const width = 500;
  const height = 300;

  const [showCube, setShowCube] = useState(false);
  const off= function(){ 
    setShowCube(!showCube)

  }
  useEffect(() => {
    let map;
    if (mapContainer.current) {
      map = new mapboxgl.Map({
        container: mapContainer.current, 
        style: "mapbox://styles/mapbox/streets-v11", 
        center: [75.857,22.719], 
        zoom: 12, 
        attributionControl: false
      });
      

      map.on("move", () => {
        setLng(map.getCenter().lng.toFixed(4));
        setLat(map.getCenter().lat.toFixed(4));
        setZoom(map.getZoom().toFixed(2));
      });
    }

    return () => map.remove();
  }, []);
  

  const [imageUrl, setImageUrl] = useState(null);
  useEffect(() => {
    setImageUrl(
      `https://api.mapbox.com/styles/v1/mapbox/streets-v11/static/${lng},${lat},${zoom},0/${width}x${height}?access_token=${mapboxgl.accessToken}`
    );
  }, [lat, lng, width, height, zoom]);

  return (
    <div className="page">
      <div className="image">     
        <MapContainer
          id="map"
          ref={mapContainer}
          style={{ width: 600, height: 700 }}
          />        
      </div>
     <div className="render">
        <button className="button"
          onClick={() => {off()}}
          
        >
          {showCube ? 'Hide' : 'Show'} 3D
        </button>
        {imageUrl && showCube && <RenderScene texturePath={imageUrl} />}
        
        </div>
    </div>
    
  );
  
};

export default Map;
