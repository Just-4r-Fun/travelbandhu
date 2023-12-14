import { combineReducers } from "@reduxjs/toolkit";
import currentSelectedRoute from "./manager/currentRoute";
import tripPlanState from "./manager/tripPlan";
import BuddyReducer from "./manager/buddy";

const createReducer = (injectedReducers = {}) =>
  combineReducers({
    currentSelectedRoute: currentSelectedRoute,
    tripPlanState: tripPlanState,
    buddySlice: BuddyReducer,
    ...injectedReducers,
  });

export default createReducer();
