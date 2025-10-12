import { movies, shows, setBoxDisplay, clearDisplay } from "./catalog.js";

const mediaDropdown = document.querySelector("#media-dropdown");
const mediaName = document.querySelector("#media-name");
const mediaSingle = document.querySelector(".media-single");

const movieArray = movies;
const showArray = shows;
const allArray = movieArray.concat(showArray);

localStorage.setItem("type", "all");
let preloadTitle = localStorage.getItem("title");

const setTitles = (array) => {
  mediaName.replaceChildren();
  let displayArray = array;
  let defaultSelect = document.createElement("option");
  defaultSelect.value = "";
  defaultSelect.selected = true;
  defaultSelect.disabled = true;
  defaultSelect.textContent = "--Pick a Title--";
  mediaName.appendChild(defaultSelect);
  for (let i = 0; i < displayArray.length; i++) {
    let newTitle = document.createElement("option")
    newTitle.value = displayArray[i].name;
    newTitle.id = displayArray[i].name;
    newTitle.textContent = displayArray[i].name;
    mediaName.appendChild(newTitle);
  }
}

const setMedia = () => {
  let type = localStorage.getItem("type");
  if (type === "movies") {
    setTitles(movieArray);
  } else if (type === "shows") {
    setTitles(showArray);
  } else if (type === "all") {
    setTitles(allArray);
  } else {
    alert("Type is needed");
  }
}

const setDisplayTitle = () => {
  let newTitle = localStorage.getItem("title");
  for (let i = 0; i < allArray.length; i++) {
    if (newTitle === allArray[i].name) {
      return allArray[i];
    }
  }
}



mediaDropdown.addEventListener("change", function () {
  console.log("value change: ", mediaDropdown.value);
  localStorage.setItem("type", mediaDropdown.value)
  setMedia()
})
mediaName.addEventListener("change", function () {
  localStorage.setItem("title", mediaName.value);
  let newTitle = setDisplayTitle();
  console.log(newTitle);
  console.log(mediaName.value);
  setBoxDisplay([newTitle]);
  // displayArray = [];
  // displayArray.push(localStorage.getItem("title"))
})

setMedia();
// setBoxDisplay([preloadTitle]);