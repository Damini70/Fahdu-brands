"use client"

import { createSlice } from '@reduxjs/toolkit';
import { clearStorage, storeData } from "../../lib/storage/browserStorage";

const initialState = {
    token: "",
    userData: {},
    isLogged: false,
  };

export const authSlice = createSlice({
  name: 'auth',
  initialState ,
  reducers: {
    login: (state, action) => {
      const { token, user } = action.payload;
      storeData('login', JSON.stringify({ token, user, isLogged: true }));
      state.token = token;
      state.userData = user;
      state.isLogged = true;
    },
    loadLogin: (state, action) => {
      const {token,user}=action.payload;
     
       state.token= token;
        state.user=user;
        state.isLogged= true;
    },
    logout: () => {
      clearStorage();
     initialState;
    }
  },
   
});

export const {login,logout } = authSlice.actions;
export default authSlice.reducer;
