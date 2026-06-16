import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserSlice {
    firstName: String,
    lastName: String;
    email: String;
    password: String;
    loading: Boolean;
    error: object;
    isLoggedIn: boolean;
}

const initialState: UserSlice = {

    firstName: '',
    lastName: '',
    email: '',
    password: '',
    loading: false,
    error: {},
    isLoggedIn: false
}

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        getUsersRequest(state) {
          state.loading = true;
        },
    
        getUsersSuccess(state, action: PayloadAction<boolean>) {
          state.loading = false;
          state.isLoggedIn = action.payload;
        },
    
        getUsersFailure(state, action: PayloadAction<any>) {
          state.loading = false;
          state.error = action.payload;
        },

        userLogin(state) {
          state.loading = true
        },

        userLoginSuccess(state, action: PayloadAction<UserSlice>) {
          state.loading = false;
          state.isLoggedIn = action.payload.isLoggedIn;
        },

         userLoginFailures(state, action: PayloadAction<UserSlice>) {
          state.loading = false;
          state.isLoggedIn = action.payload.isLoggedIn;
          state.error = action.payload;
        }
      }
})

export const { getUsersFailure, getUsersSuccess, getUsersRequest, userLogin, userLoginFailures, userLoginSuccess} = userSlice.actions;

export default userSlice.reducer;