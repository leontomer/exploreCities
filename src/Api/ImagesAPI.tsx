import axios from "axios";
import { defaultImgNotFoundUrl } from "../utils/consts";

export const imageAPI = async (city: string) => {
  try {
    const imgRes = await axios.get(
      `https://api.teleport.org/api/urban_areas/slug:${city}/images/`
    );
    return imgRes?.data?.photos[0]?.image?.web;
  } catch (_) {
    return defaultImgNotFoundUrl;
  }
};
