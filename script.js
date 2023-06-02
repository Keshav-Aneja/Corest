"use strict";

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      console.log("Intersecting");
      entry.target.classList.add("show");
      entry.target.classList.remove("head-left-pro");
    } else {
      entry.target.classList.remove("show");
    }
  });
});
const project = document.querySelectorAll(".head-left-pro");
project.forEach((p) => observer.observe(p));
const imge = document.querySelectorAll(".head-left-pro-2");
imge.forEach((p) => observer.observe(p));

const cards = document.querySelectorAll(".card");
const desc = document.querySelectorAll(".desc");

for (let i = 0; i < 4; i++) {
  cards[i].addEventListener("mouseover", function () {
    desc[i].classList.remove("desc");
  });
  cards[i].addEventListener("mouseout", function () {
    desc[i].classList.add("desc");
  });
}
const name = document.querySelector("#usname");
const holder = document.querySelector("#name");
const loginPage = document.querySelector("#loginPage");
const loginBtn = document.querySelector(".loginBtn");
loginBtn.addEventListener("click", function () {
  console.log("click");
  loginPage.style.display = "none";
  holder.textContent = name.value;
});
