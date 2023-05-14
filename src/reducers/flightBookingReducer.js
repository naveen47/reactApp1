import {FETCH_DATA_REQUEST,FETCH_DATA_ERROR,FETCH_BOOKING_HISTORY_DATA} from "./../actions/actionTypes";



const initialState = {
    fetchData : true,
    bookingHistoryData : null,
    errror:null
  }
  


const flightBookingReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_BOOKING_HISTORY_DATA:
            return {
                ...state,
                bookingHistoryData: action.payload
            }
            case FETCH_DATA_REQUEST:
            return {
                ...state,
                fetchData: action.payload
            }
            case FETCH_DATA_ERROR:
            return {
                ...state,
                errror: action.payload
            }
        default:
            return state
    }
}

export default flightBookingReducer;