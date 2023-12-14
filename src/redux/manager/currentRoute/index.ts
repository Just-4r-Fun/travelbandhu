import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../../configureStore";

export interface CurrentSelectedRouteState {
  currentSelectedRoute?: {
    routeName: string;
    index: number;
  };
}
const initialState: CurrentSelectedRouteState = {
  currentSelectedRoute: {
    routeName: "",
    index: 0,
  },
};

export const currentSelectedRouteSlice = createSlice({
  name: "currentSelectedRouteSlice",
  initialState,
  reducers: {
    setCurrentRoute: (state, action) => {
      state.currentSelectedRoute = {
        ...state.currentSelectedRoute,
        ...action.payload,
      };
    },
  },
});

const getCurrentSelectedRoute = (state: RootState) =>
  state.currentSelectedRoute.currentSelectedRoute;

const { reducer, actions } = currentSelectedRouteSlice;
const { setCurrentRoute } = actions || {};

export { setCurrentRoute, getCurrentSelectedRoute };

export default reducer;
