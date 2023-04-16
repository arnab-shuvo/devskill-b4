import axios from "axios";
import { setGif } from "../../store/reducer/loaderReducer";

export const getGif = (url) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(url);
      setTimeout(() => {
        dispatch(setGif(response.data.data.images.original.url));
      }, 2000);
      return response.data;
    } catch (error) {
      console.log(error);
    }
  };
};
