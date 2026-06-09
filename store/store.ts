import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import userReducer from "./features/userSlice";
import rootSaga from "./saga/rootsaga";

const sagaMiddleWare = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        userReducer
    },
    middleware: (getDefaultMiddleWare) => {
        return getDefaultMiddleWare({
            thunk: false,
            serializableCheck: false
        }).concat(sagaMiddleWare)
    }
})

sagaMiddleWare.run(rootSaga);

export type RootState = ReturnType<
  typeof store.getState
>;

export type AppDispatch = typeof store.dispatch;