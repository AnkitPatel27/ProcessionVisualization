import RoutingMachine from './RouteComponent/RoutingMachine';
import { MapContainer, TileLayer } from 'react-leaflet';

const MapComponent = () => {
    return (
      <MapContainer
        center={[23.0225, 72.5714]}
        zoom={5}
        style={{ height: '1000px', width: '60%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <RoutingMachine />
      </MapContainer>
    );
  };

export default MapComponent;