import L from 'leaflet';
import 'leaflet/dist/leaflet.css';  
import MapComponent from './MapComponent';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';


function App() {
  return (
    <div className="App">
       <h1>Route from Ahmedabad to Pune</h1>
      <MapComponent />
    </div>
  );
}


// Fix for default marker icon
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png'),
});







export default App;
