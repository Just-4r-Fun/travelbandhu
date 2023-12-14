import { combineReducers } from "@reduxjs/toolkit";
import currentSelectedRoute from "./manager/currentRoute";
import tripPlanState from "./manager/tripPlan";

const createReducer = (injectedReducers = {}) =>
  combineReducers({
    currentSelectedRoute: currentSelectedRoute,
    tripPlanState: tripPlanState,
    ...injectedReducers,
  });

export default createReducer();
