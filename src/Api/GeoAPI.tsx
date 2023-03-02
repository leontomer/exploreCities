import axios from "axios";

export const GeoAPI = async (city: string) => {
  try {
    const geoRes = await axios.get(
      `https://geocode.maps.co/search?q={${city}}`
    );
    return geoRes.data[0];
  } catch (error) {
    return { error };
  }
};
