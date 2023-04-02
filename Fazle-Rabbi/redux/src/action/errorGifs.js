import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { setGif } from "../reducer/loaderReducer";

export const getGif = createAsyncThunk(
  "errors/getGif",
  async (url, thunkApi) => {
    try {
      const response = await axios.get(url);
      setTimeout(() => {
        thunkApi.dispatch(setGif(response.data.data.images.original.url));
      }, 2000);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  }
);
