import { createStore, applyMiddleware  } from "redux";
import rooReducer from "./rooReducer";
import thunk from 'redux-thunk';
// import { configureStore } from '@reduxjs/toolkit'
import { composeWithDevTools } from 'redux-devtools-extension';  

const store = createStore(rooReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;


