const container = document.getElementById("container");
const headerText = document.querySelector(".header-text");
const instructions = document.querySelector(".instructions");
const btnYes = document.querySelector(".btn-yes");
const btnNo = document.querySelector(".btn-no");

function getRandomNumber(min, max) {
  const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

  return randomNumber;
}

btnNo.addEventListener("mouseover", (event) => {
  const containerRect = container.getBoundingClientRect();
  const containerHeight = containerRect.height;
  const containerWidth = containerRect.width;

  const btnRect = btnNo.getBoundingClientRect();
  const btnHeight = btnRect.height;
  const btnWidth = btnRect.width;

  const btnTopRel = btnRect.top - containerRect.top;
  const btnLeftRel = btnRect.left - containerRect.left;

  let newTop = btnTopRel;
  let newLeft = btnLeftRel;

  while (Math.abs(newTop - btnTopRel) < containerHeight / 3) {
    newTop = getRandomNumber(0, Math.max(0, containerHeight - btnHeight));
  }

  while (Math.abs(newLeft - btnLeftRel) < containerWidth / 3) {
    newLeft = getRandomNumber(0, Math.max(0, containerWidth - btnWidth));
  }

  btnNo.style.top = Math.floor(newTop) + "px";
  btnNo.style.left = Math.floor(newLeft) + "px";
});

btnYes.addEventListener("click", (e) => {
  btnNo.classList.add("hide");
  if (headerText) headerText.textContent = "Cool";
  if (instructions) instructions.textContent = "Very Cool";

  if (resultLink) {
    resultLink.classList.remove("hide");
    resultLink.focus();
  }
});