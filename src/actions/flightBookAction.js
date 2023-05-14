import axios from "axios";
import {FETCH_DATA_REQUEST,FETCH_DATA_ERROR,FETCH_BOOKING_HISTORY_DATA} from "./actionTypes";
  
export function fetchDataRequest(payload) {
    return {
      type: FETCH_DATA_REQUEST,
      payload
    };
  }

  export function fetchBookingHistoryData(payload) {
    return {
      type: FETCH_BOOKING_HISTORY_DATA,
      payload
    };
  }
  

  export function fetchDataError(error) {
    return {
      type: FETCH_DATA_ERROR,
      payload: { error }
    };
  }


export function fetchFlightBookingHistoryData() {
  return dispatch => {
    dispatch(fetchDataRequest(true));
    axios
      .get(
        "https://s3-ap-southeast-1.amazonaws.com/he-public-data/smartQFood8bef5a2.json"
      )
      .then(response => {
        dispatch(fetchDataRequest(false));
        dispatch(fetchBookingHistoryData(response.data));
      })
      .catch(error => {
        dispatch(fetchDataRequest(false));
        dispatch(fetchDataError(error));
      });
  };
}
