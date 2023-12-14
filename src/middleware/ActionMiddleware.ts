import Router from "next/router";
import { Middleware } from "redux";

import { RootState } from "@/redux/configureStore";

const ActionMiddleware: Middleware =
  ({ getState, dispatch }) =>
  (next) =>
  async (action) => {
    const { type, payload } = action || {};
    const rootState: RootState = getState();
    
    switch (type) {
      default: {
        next(action);
      }
    }
  };

export default ActionMiddleware;
