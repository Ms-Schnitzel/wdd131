import { movies, shows, setBoxDisplay } from "./catalog.js";

const movieRandom = document.querySelector("#movie-random");
const showRandom = document.querySelector("#show-random");
let trendingBoxes = [];

const setTrendingBoxes = () => {
  for (let i = 0; i < movies.length; i++) {
    if (movies[i].trending === true) {
      trendingBoxes.push(movies[i])
    };
  }
  for (let i = 0; i < shows.length; i++) {
    if (shows[i].trending === true) {
      trendingBoxes.push(shows[i])
    };
  }
  return trendingBoxes;
};

const mediaRandom = (media) => {
  let range = media.length - 1;
  let index = Math.floor(Math.random() * (range + 1));
  return index;
}

const setMediaRandom = (movies, shows) => {
  let movieIndex = mediaRandom(movies);
  let showIndex = mediaRandom(shows);
  let newRandomMovie = movies[movieIndex].name;
  let newRandomShow = shows[showIndex].name;
  movieRandom.textContent = newRandomMovie;
  showRandom.textContent = newRandomShow;
  movieRandom.href = "search.html";
  showRandom.href = "search.html";
}


movieRandom.addEventListener("click", function () {
  localStorage.setItem("title", movieRandom.textContent);
});

showRandom.addEventListener("click", function () {
  localStorage.setItem("title", showRandom.textContent);
});

setTrendingBoxes();
setBoxDisplay(trendingBoxes);
setMediaRandom(movies, shows);


// form is for user to set trending tag to true/false