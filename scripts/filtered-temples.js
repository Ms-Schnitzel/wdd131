const navbar = document.querySelector(".navbar");
const burger = document.querySelector("#menu");
const main = document.querySelector("main");
const filter = document.querySelector("#filter");
const home = document.querySelector("#home");
const oldDate = document.querySelector("#old");
const newDate = document.querySelector("#new");
const large = document.querySelector("#large");
const small = document.querySelector("#small");

burger.addEventListener("click", () => {
  navbar.classList.toggle("show");
  burger.classList.toggle("show");
});

home.addEventListener("click", () => {
  allTemples(temples);
});

oldDate.addEventListener("click", () => {
  oldTemples(temples);
});
newDate.addEventListener("click", () => {
  newTemples(temples);
});
small.addEventListener("click", () => {
  smallTemples(temples);
});
large.addEventListener("click", () => {
  largeTemples(temples);
});

const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 6861,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
  },
  {
    templeName: "Lima Perú",
    location: "Lima, Perú",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl:
    "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
  },


  {
    templeName: "San Luis Potosí Mexico",
    location: "San Luis Potosí, Mexico",
    dedicated: "2024, March, 9",
    area: 9300,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/cf49e2b1baef11ee9e50eeeeac1e47dfa340ce64/full/640%2C/0/default"
  },
  {
    templeName: "Buenos Aires Argentina",
    location: "Buenos Aires, Argentina",
    dedicated: "1986, January, 19",
    area: 30659,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/396dd44dcb8c55b10150bae7f3916389465acc0d/full/1920%2C/0/default"
  },
  {
    templeName: "Oquirrh Mountain Utah Temple",
    location: "South Jordan, Utah, United States",
    dedicated: "2009, August, 23",
    area: 60000,
    imageUrl: "https://www.churchofjesuschrist.org/imgs/1d09607a55c875c5562f6ef1134f1ba7c587f727/full/1920%2C/0/default"
  }

];

const template = (temple, location, date, area, image) => {
  return `
    <h2>${temple}</h2>
    <h3>Location:</h3>
    <p>${location}</p>
    <h3>Dedicated:</h3>
    <p>${date}</p>
    <h3>Size:</h3>
    <p>${area} sq ft</p>
    <img src="${image}" alt="${temple} temple" loading="lazy">
  `
}

const displayTemples = (templeArray) => {
  for (let i = 0; i < templeArray.length; i++) {
    let newTemplate = template(templeArray[i].templeName, templeArray[i].location, templeArray[i].dedicated, templeArray[i].area, templeArray[i].imageUrl);
    let newCard = document.createElement("section");
    newCard.innerHTML = newTemplate;
    main.appendChild(newCard);
  };
}

const oldTemples = (templeArray) => {
  while (main.lastChild.tagName === "SECTION") {
    main.removeChild(main.lastChild);
  };
  filter.textContent = "Old";
  // age = parseInt(templeArray.dedicated);
  templeFilter = templeArray.filter(age => parseInt(age.dedicated) < 1900);
  console.log(templeFilter);
  displayTemples(templeFilter);
};

const newTemples = (templeArray) => {
   while (main.lastChild.tagName === "SECTION") {
    main.removeChild(main.lastChild);
  };
  filter.textContent = "New";
  templeFilter = templeArray.filter(age => parseInt(age.dedicated) > 2000);
  displayTemples(templeFilter);
};

const smallTemples = (templeArray) => {
   while (main.lastChild.tagName === "SECTION") {
    main.removeChild(main.lastChild);
  };
  filter.textContent = "Small";
  templeFilter = templeArray.filter(size => size.area < 10000);
  displayTemples(templeFilter);
};

const largeTemples = (templeArray) => {
   while (main.lastChild.tagName === "SECTION") {
    main.removeChild(main.lastChild);
  };
  filter.textContent = "Large";
  templeFilter = templeArray.filter(size => size.area > 10000);
  displayTemples(templeFilter);
};

const allTemples = (templeArray) => {
   while (main.lastChild.tagName === "SECTION") {
    main.removeChild(main.lastChild);
  };
  filter.textContent = "Home";
  displayTemples(templeArray);
};

allTemples(temples);

console.log(main.lastElementChild.tagName);