import { RootState } from "@redux/configureStore";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: {
  tripDescription: string;
  form: {
    startingLocation: string;
    bringPets: boolean;
  };
} = {
  tripDescription:
    "I want to visit Goa in the month of December, I live in Bengalore, We are a group of 3 people, we want to explore south Goa, suggest me few places near south Goa and help me plan my trip",
  form: {
    startingLocation: "",
    bringPets: false
  },
};

interface TripPlanPayloadType {
  tripDescription?: string;
  form?: {};
}

export const tripPlanStateSlice = createSlice({
  name: "tripPlanState",
  initialState,
  reducers: {
    setTripPlanDetails: (state, action: PayloadAction<TripPlanPayloadType>) => {
      const { payload: { tripDescription, form } = {} } = action || {};

      console.log('actiop in redux ', action);
      
      if (tripDescription) {
        state.tripDescription = tripDescription;
      }

      if (form) {
        state.form = form;
      }
    },
    setPreSelectedRecommendedPlaces: (state, action)=> {
      state.form = {
        ...state.form,
        locations: action?.payload || []
      }
    }
  },
});

//Only want to get specific page name state so used currying approach.
const getTripPlanDetails = (state: RootState) => state.tripPlanState;
const getTripPlanTripDescription = (state: RootState) =>
  state.tripPlanState.tripDescription;
const getTripPlanTripForm = (state: RootState) => state.tripPlanState.form;

const { reducer, actions } = tripPlanStateSlice;
const { setTripPlanDetails, setPreSelectedRecommendedPlaces } = actions || {};

export {
  setTripPlanDetails,
  getTripPlanDetails,
  getTripPlanTripDescription,
  getTripPlanTripForm,
  setPreSelectedRecommendedPlaces
};

export default reducer;
