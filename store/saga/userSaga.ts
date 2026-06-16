
import { userLogin } from '../features/userSlice';
import { takeLatest } from 'redux-saga/effects';
import UserSchema from '../../model/UserSchema'
import { PayloadAction } from "@reduxjs/toolkit";

interface loginAction {
    username: string;
    password: string
}
function* loginUser (action: PayloadAction<loginAction>) : Generator {
    console.log("action => ", action)
}

export function* watchUserActions() {
    yield takeLatest(userLogin.type, loginUser)
}