
import { getUsersFailure, getUsersRequest, getUsersSuccess } from '../features/userSlice';
import { takeLatest } from 'redux-saga/effects';

const loginUser = async () => {

}

export function* watchUserActions() {
    return takeLatest(getUsersRequest.type, loginUser)
}