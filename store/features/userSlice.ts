import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

interface UserSlice {
    firstName: String,
    lastName: String;
    email: String;
    password: String;
    loading: Boolean;
    error: object;
    isLoggedIn: boolean;
    message: string;
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

interface RegisterUserPayload {
  isLoggedIn: boolean;
  message: string;
  user: object;
}

const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        userRegister(state) {
          state.loading = true;
          state.error = {
            message: '',
            error: false
          };

        },
    
        userRegisterSuccess(state, action: PayloadAction<RegisterUserPayload>) {
          console.log("userRegisterSuccess action => ", action)
          state.loading = false;
          state.isLoggedIn = action.payload.isLoggedIn;
          state.message = action.payload.message
        },
    
        userRegisterFailure(state, action: PayloadAction<any>) {
          state.loading = false;
          state.error = action.payload;
        },

        userLogin(state) {
          state.loading = true
          state.error = {
            message: '',
            error: false
          };
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

export const { userRegister, userRegisterFailure, userRegisterSuccess, userLogin, userLoginFailures, userLoginSuccess} = userSlice.actions;

export default userSlice.reducer;