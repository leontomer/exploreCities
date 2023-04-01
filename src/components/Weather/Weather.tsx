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
        src={`https://api.openweathermap.org/data/2.5/weather?lat=${props.lat}&lon=${props.lon}&mode=html&appid=6c638c3b2408b3f5a6d133d4521ab4a3`}
      ></iframe>
    </div>
  );
}
