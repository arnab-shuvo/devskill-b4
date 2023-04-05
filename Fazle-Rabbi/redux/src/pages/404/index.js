import { useEffect } from "react";
import { Box } from "@mui/material";
import { giphyURL } from "./giphyURL";
import { useSelector, useDispatch } from "react-redux";
import { getGif } from "../../action/errorGifs";

const NotFound = () => {
  const dispatch = useDispatch();
  const gif = useSelector((store) => store.loader.gif);

  useEffect(() => {
    dispatch(getGif(giphyURL));
  }, []);

  return (
    <Box
      style={{
        backgroundImage: "url(" + gif + ")",
        height: "350px",
        width: "100%",
        position: "relative",
        backgroundSize: "auto",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    ></Box>
  );
};

export default NotFound;
