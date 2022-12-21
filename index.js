const loveMe = document.querySelector(".loveMe");
const times = document.querySelector("#times");
// console.log(loveMe);
let clickTime = 0;
let timesClicked = 0;
loveMe.addEventListener("click", (e) => {
  if (clickTime === 0) {
    clickTime = new Date().getTime();
  } else {
    if (new Date().getTime() - clickTime < 800) {
      createHeart(e);
      clickTime = 0;
    } else {
      clickTime = new Date().getTime();
    }
  }
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas");
  heart.classList.add("red");
  heart.classList.add("fa-heart");

  const x = e.clientX;
  const y = e.clientY;

  const leftOff = e.target.offsetLeft;
  const topOff = e.target.offsetTop;

  const xIn = x - leftOff;
  const yIn = y - topOff;

  heart.style.top = `${yIn}px`;
  heart.style.top = `${xIn}px`;
  loveMe.appendChild(heart);
  times.innerHTML = ++timesClicked;

  setTimeout(() => {
    heart.remove();
  }, 1000);
};
