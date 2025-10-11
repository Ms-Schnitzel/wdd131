import { movies, shows, tags, setBoxDisplay, clearDisplay } from "./catalog.js";

const tagList = document.querySelector("#tag-list");
const clearBtn = document.querySelector("#clear-btn");
const typeFilter = document.querySelectorAll(".type-filter")

let type = "all"
localStorage.setItem("type", type)

let displayArray = [];
let movieArray = movies;
let showArray = shows;

const setTagList = (tag) => {
  for (let i = 0; i < tag.length; i++) {
    let newLi = document.createElement("li");
    newLi.textContent = tag[i];
    newLi.id = tag[i];
    newLi.classList.add("tag-btn")
    tagList.appendChild(newLi);
  }
}

clearBtn.addEventListener("click", function () {
  clearDisplay();
  displayArray = [];
  setBoxDisplay(displayArray.concat(movies, shows));
});

typeFilter.forEach(function (button, index) {
  button.addEventListener("click", function () {
    console.log("button clicked: ", typeFilter[index].id);
    localStorage.setItem("type", typeFilter[index].id);
    console.log(localStorage.getItem("type"));
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
    // alert("Media type required!");
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


// first set filter to show, movie, or both.  Then, when setting tags you can set multiple filter requirements
  // if you are set to just shows, run a show comedy and show action
  // if you are set to both shows and movies, run a show comedy and show action, then a movie comedy and movie action
  // having show/movie set first lets you know if you need to run the tag check on one or both at the same time