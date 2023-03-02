import { SET_CITY_DETAILS } from "./Types";

export const setCityDetails =
  (cityDetails: Object, imgUrl: string) => (dispatch: Function) => {
    dispatch({
      type: SET_CITY_DETAILS,
      payload: { cityDetails, imgUrl },
    });
  };
