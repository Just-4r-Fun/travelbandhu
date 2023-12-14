/**
 * Create the store with dynamic reducers
 * Wrapper in case of serverside rendering
 * Creating master reducer to hyderate
 */

import {
  configureStore,
  ThunkAction,
  Action,
  ThunkDispatch,
  AnyAction,
  Middleware,
} from "@reduxjs/toolkit";
import logger from "redux-logger";
import rootReducer from "./reducers";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import { ActionMiddleware } from "@/middleware";

const masterReducer = (state: any, action: any) => {
  if (action.type === HYDRATE) {
    /**
     whichever page is SSR and is getting its data via getServerSideProps, it is being handeled seperately here. Right now, results and details are SSR, hence their data is copied seperately, rest of the state is kept same.
     */
    const { payload } = action;
    return {
      ...state,
      ...payload,
      currentSelectedRoute: state.currentSelectedRoute,
    };
  } else {
    return rootReducer(state, action);
  }
};

export const configureAppStore = (initialState = {}) => {
  const middlewares: Middleware[] = [];
  if (process.env.NEXT_PUBLIC_CT_ENV !== "production") {
    middlewares.push(logger);
  }
  // Create the store with one middlewares

  const store = configureStore({
    reducer: masterReducer,
    preloadedState: initialState,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: false,
      })
        .concat(middlewares)
        .concat(ActionMiddleware),
    devTools: {
      shouldHotReload: false,
    },
  });

  if (process.env.NEXT_PUBLIC_CT_ENV !== "production" && module.hot) {
    module.hot.accept("./reducers", () => store.replaceReducer(rootReducer));
  }
  return store;
};

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

export const wrapper = createWrapper(configureAppStore);
export const store = configureAppStore();
