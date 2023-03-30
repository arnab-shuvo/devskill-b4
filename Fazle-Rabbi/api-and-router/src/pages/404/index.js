import { useState, useEffect } from "react";
import { Box } from "@mui/material";

const giphy = {
  baseURL: "https://api.giphy.com/v1/gifs/",
  apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
  tag: "south park",
  type: "random",
  rating: "pg-13",
};
let giphyURL = encodeURI(
  giphy.baseURL +
    giphy.type +
    "?api_key=" +
    giphy.apiKey +
    "&tag=" +
    giphy.tag +
    "&rating=" +
    giphy.rating
);

const NotFound = () => {
  const [gif, setGif] = useState("");
  useEffect(() => {
    const url = giphyURL;
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        const errorImage = res.data.images.original.url;
        setGif(errorImage);
      })
      .catch((err) =>
        setGif("https://media4.giphy.com/media/km7QNaRa2LW4FxeWDW/giphy.gif")
      );
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
