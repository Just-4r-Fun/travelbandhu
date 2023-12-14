import { combineReducers } from "@reduxjs/toolkit";
import currentSelectedRoute from "./manager/currentRoute";

const createReducer = (injectedReducers = {}) =>
  combineReducers({
    currentSelectedRoute: currentSelectedRoute,
    ...injectedReducers,
  });

export default createReducer();
