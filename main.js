const $navButton = document.querySelector(".nav-button");
const $navEle = document.querySelector("nav");
const $monthEle = document.querySelector("#month");

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

const countDown = (y, m, d) => {
  const now = new Date();

  let year = now.getFullYear();
  let month = now.getMonth();
  let yearCount = y - year;
  let monthCount = 0;

  if (month === m) {
    monthCount = 12 * yearCount - 1;
  } else if (month > m) {
    monthCount = 12 * yearCount - (month - m) - 1;
  } else {
    monthCount = 12 * yearCount + (m - month) - 1;
  }
  console.log(monthCount);
  // $monthEle.innerHTML = monthCount;
};

countDown(2023, 1);
