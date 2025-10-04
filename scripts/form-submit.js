const reviewTotal = document.querySelector(".total-review");

window.addEventListener("load", () => {
  let count = localStorage.getItem("count");
  count = count ? parseInt(count) + 1 : 1;
  console.log(count);
  localStorage.setItem("count", count);
  reviewTotal.textContent = count;
});

