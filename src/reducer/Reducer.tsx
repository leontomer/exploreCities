import { SET_CITY_DETAILS } from "../actions/Types";

const initialState = { cityDetails: {}, imgUrl: "" };

export default function (
  state = initialState,
  action: {
    type: string;
    payload: { cityDetails: Object; imgUrl: string };
  }
) {
  const { type, payload } = action;

  switch (type) {
    case SET_CITY_DETAILS:
      return {
        cityDetails: payload.cityDetails,
        imgUrl: payload.imgUrl,
      };
    default:
      return state;
  }
}
