import { Map, Marker } from "pigeon-maps";
import "./MapView.scss";

export default function MapView(props: { lat: string; lon: string }) {
  return (
    <div className="map-view">
      <Map
        height={140}
        center={[Number(props.lat), Number(props.lon)]}
        zoom={15}
      >
        <Marker width={50} anchor={[Number(props.lat), Number(props.lon)]} />
      </Map>
    </div>
  );
}
