import "./Weather.scss";

export default function Weather(props: {
  lat: string;
  lon: string;
  name: string;
}) {
  return (
    <div className="weather">
      <iframe
        height="50%"
        width="100%"
        src={`//forecast.io/embed/#lat=${props.lat}&lon=${props.lon}&units=si&name=${props.name}`}
      ></iframe>
    </div>
  );
}
