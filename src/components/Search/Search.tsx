import React, { FormEvent, useRef, useState } from "react";
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
  const city = useRef<HTMLInputElement>();
  const [showLoader, setShowLoader] = useState<boolean>(false);
  const dispatch = useDispatch();

  const handleSearch = async (e: FormEvent) => {
    e.preventDefault();
    dispatch<any>(setCityDetails({}, ""));
    setShowLoader(true);
    console.log(city?.current?.value);
    const geoRes = await GeoAPI(city?.current?.value || "");
    const imgRes = await imageAPI(
      (city?.current?.value || "").replaceAll(" ", "-")
    );
    dispatch<any>(setCityDetails(geoRes, imgRes));
    setShowLoader(false);
  };

  return (
    <div>
      <form onSubmit={(e) => handleSearch(e)}>
        <TextField label={InputLabel} inputRef={city} required />
        <span className="search-button">
          <Button variant="outlined" endIcon={<SearchIcon />} type="submit">
            {ButtonSearchLabel}
          </Button>
        </span>
      </form>
      {showLoader && (
        <span className="search-loader">
          <CircularProgress />
        </span>
      )}
    </div>
  );
}
