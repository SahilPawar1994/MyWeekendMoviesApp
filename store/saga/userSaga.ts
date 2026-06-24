import {
  userLogin,
  userLoginFailures,
  userLoginSuccess,
  userRegister,
  userRegisterFailure,
  userRegisterSuccess,
} from "../features/userSlice";
import { call, put, takeLatest } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import { axiosRequest, type axiosRequestType } from "@/axios";
import { AxiosError } from "axios";

interface loginAction {
  username: string;
  password: string;
}

interface registerAction {
  firstName: string;
  lastName: string;
  email: string;
  contact: string;
  password: string;
}

function* loginUser(action: PayloadAction<loginAction>): Generator {

  try {
    console.log("flow coming here => ", action);
    const config: axiosRequestType = {
        url: "/user",
        method: "GET",
        params: action.payload,
      };
      const response = yield call(axiosRequest, config);
      const { data = {}, status } = response;

      if (status === 200) {
        yield put({
          type: userLoginSuccess.type,
          payload: {
            isLoggedIn: true,
            message: data.message,
            user: data.user,
          },
        });
      }
    //   if (data === null || undefined) {
    //     const error = {
    //       error: true,
    //       message: "User Credentials are incorrect!",
    //       isLoggedIn: false,
    //     };
    //     yield put({ type: userLoginFailures.type, payload: error });
    //   }
  }catch(e) {
    const error = e as AxiosError<any>;
    const statusCode = error.response?.status;
    if (statusCode === 409) {
      yield put({
        type: userLoginFailures.type,
        payload: {
            error: true,
            message: "User Credentials are incorrect!",
            isLoggedIn: false,
        },
      });
    }
  }
}

function* userRegisterHandle(action: PayloadAction<registerAction>): Generator {
  const config: axiosRequestType = {
    url: "/user",
    method: "POST",
    data: action.payload,
  };

  try {
    const response = yield call(axiosRequest, config);

    const { data = {}, status } = response;


    if (status === 201) {
      yield put({
        type: userRegisterSuccess.type,
        payload: {
          isLoggedIn: true,
          message: data.message,
          user: data.user,
        },
      });
    }
  } catch (e) {
    const error = e as AxiosError<any>;

    const statusCode = error.response?.status;
    if (statusCode === 409) {
      yield put({
        type: userLoginFailures.type,
        payload: {
          message: "User Already Exists!!!",
        },
      });
    }
  }
}

export function* watchUserActions() {
  yield takeLatest(userLogin.type, loginUser);
  yield takeLatest(userRegister.type, userRegisterHandle);
}
