import { movies, shows, tags, setBoxDisplay, clearDisplay } from "./catalog.js";

const tagList = document.querySelector("#tag-list");
const clearBtn = document.querySelector("#clear-btn");
const typeFilter = document.querySelectorAll(".type-filter");

let type = "all";
localStorage.setItem("type", type);

let displayArray = [];
let movieArray = movies;
let showArray = shows;

const setTagList = (tag) => {
  for (let i = 0; i < tag.length; i++) {
    let newLi = document.createElement("li");
    newLi.textContent = tag[i];
    newLi.id = tag[i];
    newLi.classList.add("tag-btn");
    tagList.appendChild(newLi);
  }
}

clearBtn.addEventListener("click", function () {
  clearDisplay();
  displayArray = [];
  movieArray = movies;
  showArray = shows;
  setBoxDisplay(displayArray.concat(movies, shows));
});

typeFilter.forEach(function (button, index) {
  button.addEventListener("click", function () {
    // clearDisplay();
    displayArray = [];
    localStorage.setItem("type", typeFilter[index].id);
    if (localStorage.getItem("type") === "movie") {
      displayArray = movieArray;
      setBoxDisplay(displayArray);
    } else if (localStorage.getItem("type") === "show") {
      displayArray = showArray;
      setBoxDisplay(displayArray);
    } else if (localStorage.getItem("type") === "all") {
      displayArray = movieArray.concat(showArray);
      setBoxDisplay(displayArray);
    } else {
      alert("No type selected!");
    }
  });
});

const movieFilter = (filter) => {
  if (movieArray.length === 0) {
    for (let i = 0; i < movies.length; i++) {
      let tag = movies[i].tags;
      for (let j = 0; j < tag.length; j++) {
        if (filter === tag[j]) {
          movieArray.push(movies[i]);
        }
      }
    }
  } else {
    movieArray = commonTag(filter, "movie");
  }
  console.log("display", movieArray);
}

const showFilter = (filter) => {
  if (showArray.length === 0) {
    for (let i = 0; i < shows.length; i++) {
      let tag = shows[i].tags;
      for (let j = 0; j < tag.length; j++) {
        if (filter === tag[j]) {
          showArray.push(shows[i]);
        }
      }
    }
  } else {
    showArray = commonTag(filter, "show");
  }
  console.log("display", displayArray);
}

const commonTag = (filter, type) => {
  let newDisplay = [];
  console.log("movies: ", movieArray);
  if (type === "movie") {
    newDisplay = movieArray;
    for (let j = 0; j < movieArray.length; j++){
      let commonTag = false;
      let tagList = movieArray[j].tags
      for (let k = 0; k < tagList.length; k++){
        if (filter === tagList[k]) {
          console.log("this media shares a tag", movieArray[j].name);
          commonTag = true;
        }
      }
      if (commonTag === false) {
        console.log("this media does not share a tag", movieArray[j].name);
        let filterDisplay = newDisplay.filter(item => item !== movieArray[j]);
        newDisplay = filterDisplay;
      }
    }
    console.log(newDisplay);
  } else if (type === "show") {
    newDisplay = showArray;
    for (let j = 0; j < showArray.length; j++){
      let commonTag = false;
      let tagList = showArray[j].tags
      for (let k = 0; k < tagList.length; k++){
        if (filter === tagList[k]) {
          console.log("this media shares a tag", showArray[j].name);
          commonTag = true;
        }
      }
      if (commonTag === false) {
        console.log("this media does not share a tag", showArray[j].name);
        let filterDisplay = newDisplay.filter(item => item !== showArray[j]);
        newDisplay = filterDisplay;
      }
    }
  } else {
    alert("Media type required!");
  }
  console.log("new display: ", newDisplay);
  return newDisplay;
}

const setArrayFilter = (type, filter) => {
  console.log("type:", type);
  if (type === "movie") {
    console.log("movie type")
    movieFilter(filter);
    displayArray = movieArray;
  } else if (type === "show") {
    showFilter(filter);
    displayArray = showArray;
  } else if (type === "all") {
    movieFilter(filter);
    showFilter(filter);
    displayArray = showArray.concat(movieArray);
  }
  setBoxDisplay(displayArray);
}




setTagList(tags);
const tagBtns = document.querySelectorAll(".tag-btn");
tagBtns.forEach(function(button, index) {
  button.addEventListener("click", function () {
    console.log("button clicked", tagBtns[index].id);
    let mediaType = localStorage.getItem("type");
    console.log(mediaType);
    setArrayFilter(mediaType, tagBtns[index].id);
  });
});

console.log(movieArray);
setBoxDisplay(displayArray.concat(movies, shows));
