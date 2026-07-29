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
  contact: string;
  id: string
}

const initialState: UserSlice = {

  firstName: '',
  lastName: '',
  email: '',
  password: '',
  loading: false,
  error: {},
  isLoggedIn: false,
  message: ''
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
      console.log("action  => ", action)
      const {id, isLoggedIn} = action.payload
      state.loading = false;
      state.isLoggedIn = isLoggedIn;
      state.id = id
    },

    userLoginFailures(state, action: PayloadAction<UserSlice>) {
      state.loading = false;
      state.isLoggedIn = action.payload.isLoggedIn;
      state.error = action.payload;
    },

    logoutUser(state) {
      state.loading = true
    },

    logoutSuccess(state) {
      state.loading = false
      state.isLoggedIn = false
    }
  }
})

export const { userRegister, userRegisterFailure, userRegisterSuccess, userLogin, userLoginFailures, userLoginSuccess, logoutSuccess, logoutUser } = userSlice.actions;

export default userSlice.reducer;