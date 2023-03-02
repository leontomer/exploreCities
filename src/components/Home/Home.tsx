import "./Home.scss";
import Search from "../Search/Search";
import Weather from "../Weather/Weather";
import { useSelector } from "react-redux";
import MapView from "../Map/MapView";
import CityImage from "../CityImage/CityImage";
import { homeHeader } from "../../utils/consts";

export default function () {
  const cityDetails = useSelector((state: any) => state.cityDetails);
  const imgUrl = useSelector((state: any) => state.imgUrl);

  return (
    <div className="home background">
      <div className="home title">{homeHeader}</div>
      <div className="home search">
        <Search />
      </div>
      <div className="home weather-image">
        <div>
          {imgUrl && cityDetails && Object.keys(cityDetails).length > 0 && (
            <Weather
              lat={cityDetails.lat}
              lon={cityDetails.lon}
              name={cityDetails.display_name.substring(
                0,
                cityDetails.display_name.indexOf(",")
              )}
            />
          )}
        </div>
        <div>
          {imgUrl && cityDetails && Object.keys(cityDetails).length > 0 && (
            <CityImage imgUrl={imgUrl} />
          )}
        </div>
      </div>
      <div>
        {" "}
        <div>
          {imgUrl && cityDetails && Object.keys(cityDetails).length > 0 && (
            <MapView lat={cityDetails.lat} lon={cityDetails.lon} />
          )}
        </div>
      </div>
    </div>
  );
}
