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
const arrowUpElement = document.querySelector("arrow_up");
const arrowDownElement = document.querySelector("arrow_down");




for (let i = 0; i < items.length; i++) {
  let activeStatus = "";
  if (i === 0) {
    activeStatus = "active";
  }

  const smallImage = `<div class="small_image ${activeStatus}"><img src=${items[i]} alt=${title[i]}-img></img></div>`;
  carouselSideElement.innerHTML += smallImage;
}





