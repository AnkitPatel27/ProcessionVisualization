import L from 'leaflet';
import 'leaflet-routing-machine';
import { createControlComponent } from "@react-leaflet/core";

const createRoutineMachineLayer = (props) => {
    const instance = L.Routing.control({
      createMarker: function(i,wp, n) {
        var latEndMarker = 19.0760// latitude of currently created marker "END";
        var lngEndMarker = 72.8777// longitude or currently created marker "END";
        if (wp.latLng.lat === latEndMarker && wp.latLng.lng === lngEndMarker) {
           return false;// don't create marker for currently displayed marker again
        } else {
           return L.marker(wp.latLng);// all other markers in the map
        }
       },
      waypoints: [
        L.latLng(23.0225, 72.5714), // ahm
                L.latLng(19.0760, 72.8777),
                L.latLng(18.5204, 73.8567) // delhi
      ],
      lineOptions:{styles:[{color: 'red', opacity: 0.15, weight: 9}, {color: 'blue', opacity: 0.8, weight: 6}]},
      serviceUrl:"https://routing.openstreetmap.de/routed-car/route/v1/",
        overview:false,
        steps:true,
        routeWhileDragging: true,
        pointMarkerStyle: {radius: 5, color: 'red', fillColor: 'red', fillOpacity: 0.5},
    });
  
    return instance;
  };
  
  const RoutingMachine = createControlComponent(createRoutineMachineLayer);

  export default RoutingMachine;