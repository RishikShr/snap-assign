import mapboxgl from "mapbox-gl";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import 'mapbox-gl/dist/mapbox-gl.css';

import RenderScene from "../renderScene";
import  './index.scss';

const MapContainer = styled.div`
  width: 50vw;
  height: 50vh;
`;

mapboxgl.accessToken = "pk.eyJ1IjoicmlzaGlrc2hyaXZhc3RhdiIsImEiOiJja292b28ybnAwNDhiMm9yc2l2OW5kZGZiIn0.qqAo5KFWpAlsBjaapYWgEA";

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
        center: [-74.5, 40],//[75.857,22.719], 
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
          style={{style:'mapbox://styles/mapbox/streets-v11', position:'absolute',width: 100%, height: 100%}}
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
