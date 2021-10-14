//Arrays
//************************************************ */
const items = [
  'img/01.jpg',
  'img/02.jpg',
  'img/03.jpg',
  'img/04.jpg',
  'img/05.jpg'
];

const title = [
  "Svezia",
  "Svizzera",
  "Gran Bretagna",
  "Germania",
  "Paradise"
];

const text = [
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
  'Lorem ipsum',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
  'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
];
//************************************************* */

const carouselSideElement = document.querySelector(".small_images_container");

for (let i = 0; i < items.length; i++) {
  const smallImage = `<div class="small_image ${i === 0 ? "active" : ""}"><img src=${items[i]} alt=${title[i]}-img></img></div>`;
  carouselSideElement.innerHTML += smallImage;
}

const arrowUp = `<div class="arrow arrow_up"><i class="fas fa-chevron-up"></i></div>`;
carouselSideElement.innerHTML += arrowUp;
const arrowDown = `<div class="arrow arrow_down"><i class="fas fa-chevron-down"></i></div>`;
carouselSideElement.innerHTML += arrowDown;

const arrowUpElement = document.querySelector(".arrow_up");
const arrowDownElement = document.querySelector(".arrow_down");
const smallImageElement = document.querySelectorAll(".small_image");
const jumboElement = document.getElementById("jumbo_img");
let jumboTitle = document.querySelector(".image_title");
let jumboDescription = document.querySelector(".image_description");
let index = 0;

jumboElement.src = items[index];
jumboTitle.innerHTML = title[index];
jumboDescription.innerHTML = text[index];

console.log("smallImageElement", smallImageElement);
console.log("smallImageElement[0]", smallImageElement[0]);

arrowDownElement.addEventListener("click", function () {
  console.log(index);
  smallImageElement[index].classList.remove("active");
  if (index < 4) index++;
  else index = 0;
  smallImageElement[index].classList.add("active");

  jumboElement.src = items[index];
  jumboTitle.innerHTML = title[index];
  jumboDescription.innerHTML = text[index];


});

arrowUpElement.addEventListener("click", function () {
  smallImageElement[index].classList.remove("active");
  if (index > 0) index--;
  else index = 4;
  console.log("index", index);
  smallImageElement[index].classList.add("active");

  jumboElement.src = items[index];
  jumboTitle.innerHTML = title[index];
  jumboDescription.innerHTML = text[index];

});






