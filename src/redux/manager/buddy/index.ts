import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../configureStore";
import { buddyTrips } from "@/__mocks__/buddy";

const initialState = buddyTrips;

export const currentSelectedRouteSlice = createSlice({
  name: "buddySlice",
  initialState,
  reducers: {
    addMyBuddyTripData: (state, action) => {
      state.myTrips.upcomingTrips.push(action.payload);
    },
  },
});

const getCurrentBuddyState = (state: RootState): typeof initialState =>
  state.buddySlice;

const { reducer, actions } = currentSelectedRouteSlice;
const { addMyBuddyTripData } = actions || {};

export { getCurrentBuddyState, addMyBuddyTripData };

export default reducer;
