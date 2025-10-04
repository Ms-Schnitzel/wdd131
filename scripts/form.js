const productsList = document.querySelector("#products");
const form = document.querySelector("form");
const submitBtn = document.querySelector("#submit-btn");

// let count;
// localStorage.setItem("count", count);

form.addEventListener("submit", (e) => {
 const rating = document.querySelector('input[name="rating"]:checked');
  if (!rating) {
    alert("please rate your product");
    e.preventDefault();
  }
});

const products = [
  {
    id: "fc-1888",
    name: "flux capacitor",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "power laces",
    averagerating: 4.7
  },
  {
    id: "fs-1987",
    name: "time circuits",
    averagerating: 3.5
  },
  {
    id: "ac-2000",
    name: "low voltage reactor",
    averagerating: 3.9
  },
  {
    id: "jj-1969",
    name: "warp equalizer",
    averagerating: 5.0
  }
];

const listProducts = (prodList) => {
  for (let i = 0; i < prodList.length; i++) {
    // let newProduct = productOption(prodList[i].id, prodList[i].name);
    let newProduct = document.createElement("option");
    console.log(prodList[i].id);
    newProduct.value = prodList[i].id;
    newProduct.textContent = prodList[i].name;
    console.log(newProduct);
    productsList.append(newProduct);
  }  
}

listProducts(products);
