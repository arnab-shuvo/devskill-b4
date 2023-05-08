const giphy = {
  baseURL: "https://api.giphy.com/v1/gifs/",
  apiKey: "0UTRbFtkMxAplrohufYco5IY74U8hOes",
  tag: "south park",
  type: "random",
  rating: "pg-13",
};
export let giphyURL = encodeURI(
  giphy.baseURL +
    giphy.type +
    "?api_key=" +
    giphy.apiKey +
    "&tag=" +
    giphy.tag +
    "&rating=" +
    giphy.rating
);
