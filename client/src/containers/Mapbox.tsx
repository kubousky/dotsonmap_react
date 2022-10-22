import { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import "mapbox-gl/dist/mapbox-gl.css"; 


const MapboxMap = () => {
// mapboxgl.workerClass = require('worker-loader!mapbox-gl/dist/mapbox-gl-csp-worker').default;
    // this is where the map instance will be stored after initialization
  const [map, setMap] = useState<mapboxgl.Map>();

    // React ref to store a reference to the DOM node that will be used
  // as a required parameter `container` when initializing the mapbox-gl
  // will contain `null` by default
    const mapNode = useRef(null);

  useEffect(() => {
    const node = mapNode.current;
        // if the window object is not found, that means
        // the component is rendered on the server
        // or the dom node is not initialized, then return early
    // console.log(typeof window);
    // console.log(node);
    if (typeof window === "undefined" || node === null) return;

        // otherwise, create a map instance
    const mapboxMap = new mapboxgl.Map({
      container: node,
            accessToken: 'pk.eyJ1Ijoia3Vib3Vza3kiLCJhIjoiY2wwNWlyaHZnMDdiYzNkbm5sNnN5cng3dCJ9.NNEeWPQV_YGOYg5vnk5PBA',
            style: "mapbox://styles/mapbox/streets-v11",
      center: [-74.5, 40],
      zoom: 9,
    });

        // save the map object to React.useState
    setMap(mapboxMap);

        return () => {
      mapboxMap.remove();
    };
  }, []);

    return (
        // <div ref={mapNode} className="mapNode" style={{ width: "100", height: "100" }} />
        <h2>MAPBOX</h2>
    )
}

export default MapboxMap