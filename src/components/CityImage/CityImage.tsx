import React, { useEffect, useState } from "react";
import axios from "axios";
import "./CityImage.scss";
import LinearProgress from "@mui/material/LinearProgress";

export default function CityImage(props: { imgUrl: string }) {
  return (
    <div className="city-image">
      <img
        src={props.imgUrl}
        width="900"
        height="215"
        className="img-tag"
      ></img>
    </div>
  );
}
