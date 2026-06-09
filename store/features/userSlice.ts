import { createSlice } from '@reduxjs/toolkit';

interface UserSlice {
    firstName: String,
    lastName: String;
    email: String;
    password: String;
    loading: Boolean;
    error: object;
    isLoggedIn: Boolean
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
    
        getUsersSuccess(state, action: PayloadAction<any[]>) {
          state.loading = false;
          state.isLoggedIn = action.payload;
        },
    
        getUsersFailure(state, action: PayloadAction<string>) {
          state.loading = false;
          state.error = action.payload;
        },
      }
})

export const { getUsersFailure, getUsersSuccess, getUsersRequest} = userSlice.actions;

export default userSlice.reducer;