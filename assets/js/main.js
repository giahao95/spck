// navbar menu
const $navButton = document.querySelector(".nav-button");
const $navEle = document.querySelector("nav");

$navButton.addEventListener("click", (event) => {
  $navEle.classList.toggle("nav-toogle");
  if (event.target.classList[1] === "fa-bars") {
    event.target.classList.remove("fa-bars");
    event.target.classList.add("fa-xmark");
  } else {
    event.target.classList.remove("fa-xmark");
    event.target.classList.add("fa-bars");
  }
});

// Countdown
const $monthEle = document.querySelector("#month");
const $daysEle = document.querySelector("#days");
const $hoursEle = document.querySelector("#hours");
const $minutesEle = document.querySelector("#minutes");
const $secondsEle = document.querySelector("#seconds");

const countDown = (y, m, d) => {
  const now = new Date();
  const daysOfMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

  let year = now.getFullYear();
  let month = now.getMonth();
  let yearCount = y - year;
  let monthCount = 0,
    daysCount = 0,
    hoursCount = 0,
    minutesCount = 0,
    secondsCount = 0;

  // Month countdown
  if (month === m) {
    monthCount = 12 * yearCount - 1;
  } else if (month > m) {
    monthCount = 12 * yearCount - (month - m) - 1;
  } else {
    monthCount = 12 * yearCount + (m - month) - 1;
  }

  if (monthCount < 10) monthCount = "0" + monthCount;

  // Days countdown
  daysCount = daysOfMonth[month] - now.getDate() + d;
  if (year % 4 === 0 || year % 400 === 0) {
    daysCount += 1;
  }

  if (daysCount < 10) daysCount = "0" + daysCount;

  // Hours contdown
  hoursCount = 24 - now.getHours() - 1;
  if (hoursCount < 10) hoursCount = "0" + hoursCount;

  // Minutes Countdown
  minutesCount = 60 - now.getMinutes() - 1;
  if (minutesCount < 10) minutesCount = "0" + minutesCount;

  // Seconds minutes
  secondsCount = 60 - now.getSeconds() - 1;
  if (secondsCount < 10) secondsCount = "0" + secondsCount;

  $monthEle.innerHTML = monthCount;
  $daysEle.innerHTML = daysCount;
  $hoursEle.innerHTML = hoursCount;
  $minutesEle.innerHTML = minutesCount;
  $secondsEle.innerHTML = secondsCount;
};

setInterval(() => countDown(2023, 1, 11), 1000);

// Carousel
const $bannerImg = document.querySelectorAll(".banner-img");
console.log($bannerImg);
let i = 0;

const nextControl = () => {
  $bannerImg[i].classList.remove("active");
  i = (i + 1) % $bannerImg.length;
  $bannerImg[i].classList.add("active");
};

const preControl = () => {
  $bannerImg[i].classList.remove("active");
  i = (i - 1 + $bannerImg.length) % $bannerImg.length;
  $bannerImg[i].classList.add("active");
};
