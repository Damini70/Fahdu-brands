"use client";

import { createSlice } from "@reduxjs/toolkit";
import { clearStorage, storeData } from "../../lib/storage/browserStorage";

const initialState = {
  token: "",
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  image: "",
  isLogged: false,
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      const { token, username, email, firstName, lastName, gender, image } =
        action.payload;
      storeData(
        "login",
        JSON.stringify({
          token,
          username,
          email,
          firstName,
          lastName,
          gender,
          image,
          isLogged: true,
        })
      );
      state.token = token;
      (state.username = username),
        (state.email = email),
        (state.firstName = firstName),
        (state.lastName = lastName),
        (state.gender = gender),
        (state.image = image),
        (state.isLogged = true);
    },
    loadLogin: (state, action) => {
      const { token, user } = action.payload;

      state.token = token;
      state.user = user;
      state.isLogged = true;
    },
    logout: () => {
      clearStorage();
      initialState;
    },
  },
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
