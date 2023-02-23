import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import * as types from "./Action/types";
import { apiCall } from "../API/baseAPI";

export const postRegister = createAsyncThunk(
  types.USER_SIGNUP,
  async (payload, { rejectWithValue }) => {
    try {
      console.log(payload);
      const response = await apiCall("/users/signUp", "POST", payload);
      return response.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);

export const postLogin = createAsyncThunk(
  types.USER_LOGIN,
  async (payload, { rejectWithValue }) => {
    try {
      const response = await apiCall("/users/login", "POST", payload);
      return response.data;
    } catch (err) {
      console.log(err.response.data);
      return rejectWithValue(err.response.data);
    }
  }
);


export const saveDish = createAction(types.SAVE_DISH)

export const saveFruit  = createAction(types.SAVE_FRUIT)