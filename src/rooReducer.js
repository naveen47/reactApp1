import { combineReducers } from 'redux'; 
import flightBookingReducer from './reducers/flightBookingReducer'

export default combineReducers({
    flightBookingReducer: flightBookingReducer 
})