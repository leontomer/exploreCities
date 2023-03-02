import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import "./Search.scss";
import { setCityDetails } from "../../actions/Actions";
import { useDispatch } from "react-redux";
import { ButtonSearchLabel, InputLabel } from "../../utils/consts";
import CircularProgress from "@mui/material/CircularProgress";
import { GeoAPI } from "../../Api/GeoAPI";
import { imageAPI } from "../../Api/ImagesAPI";

export default function () {
  const [city, setCity] = useState<string>("");
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleSearch = async () => {
    dispatch<any>(setCityDetails({}, ""));
    setShowLoader(true);
    const geoRes = await GeoAPI(city);
    const imgRes = await imageAPI(city.replaceAll(" ", "-"));
    dispatch<any>(setCityDetails(geoRes, imgRes));
    setShowLoader(false);
  };

  return (
    <div>
      <TextField
        label={InputLabel}
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <span className="search-button">
        <Button
          variant="outlined"
          endIcon={<SearchIcon />}
          onClick={handleSearch}
        >
          {ButtonSearchLabel}
        </Button>
      </span>
      {showLoader && (
        <span className="search-loader">
          <CircularProgress />
        </span>
      )}
    </div>
  );
}
