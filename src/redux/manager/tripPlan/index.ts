import { RootState } from "@redux/configureStore";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
  tripDescription: string;
  form: {
    startingLocation: string;

  };
} = {
  tripDescription:
    "I want to visit Goa in the month of December, I live in Bengalore, We are a group of 3 people, we want to explore south Goa, suggest me few places near south Goa and help me plan my trip",
  form: {
    startingLocation: "",
  },
};

interface TripPlanPayloadType {
  tripDescription: string;
  form: {};
}

export const tripPlanStateSlice = createSlice({
  name: "tripPlanState",
  initialState,
  reducers: {
    setTripPlanDetails: (state, action: PayloadAction<TripPlanPayloadType>) => {
      const { payload: { tripDescription, form } = {} } = action || {};

      if (tripDescription) {
        state.tripDescription = tripDescription;
      }

      if (form) {
        state.form = form;
      }
    },
  },
});

//Only want to get specific page name state so used currying approach.
const getTripPlanDetails = (state: RootState) => state.tripPlanState;
const getTripPlanTripDescription = (state: RootState) =>
  state.tripPlanState.tripDescription;
const getTripPlanTripForm = (state: RootState) => state.tripPlanState.form;

const { reducer, actions } = tripPlanStateSlice;
const { setTripPlanDetails } = actions || {};

export {
  setTripPlanDetails,
  getTripPlanDetails,
  getTripPlanTripDescription,
  getTripPlanTripForm,
};

export default reducer;
