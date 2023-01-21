var printPage = document.getElementById("printPage");
printPage.onclick = function () {
  window.print();
};

// first-Finger
const rightPattern = document.querySelector(".right-pattern");
const rightCount = document.querySelector(".right-count");
rightPattern.textContent = localStorage.getItem("fstpattern");
rightCount.textContent = localStorage.getItem("rrc1");

//Second-finger
const secPattern = document.querySelector(".sec-rite-pattern");
const secCount = document.querySelector(".sec-rite-count");

secPattern.textContent = localStorage.getItem("scndcount");
secCount.textContent = localStorage.getItem("rrc2");
//third -finger

const thdPattern = document.querySelector(".th-rite-pattern");
const thdCount = document.querySelector(".th-rite-count");

thdPattern.textContent = localStorage.getItem("thirdcount");
thdCount.textContent = localStorage.getItem("rrc3");
//fourth-finger

const fthPattern = document.querySelector(".fth-rite-pattern");
const fthCount = document.querySelector(".fth-rite-count");

fthPattern.textContent = localStorage.getItem("fthcount");
fthCount.textContent = localStorage.getItem("rrc4");
//fifth-finger

const fifthPattern = document.querySelector(".fifth-rite-pattern");
const fifthCount = document.querySelector(".fifth-rite-count");

fifthPattern.textContent = localStorage.getItem("fifthcount");
fifthCount.textContent = localStorage.getItem("rrc5");

//left-first-finger
const leftPattern = document.querySelector(".left-pattern");
const leftCount = document.querySelector(".left-count");

leftPattern.textContent = localStorage.getItem("fstLeftCount");
leftCount.textContent = localStorage.getItem("lrc");

//left-second-finger
const leftScndPattern = document.querySelector(".sec-left-pattern");
const leftScndCount = document.querySelector(".sec-left-count");

leftScndPattern.textContent = localStorage.getItem("leftScndCount");
leftScndCount.textContent = localStorage.getItem("lrc2");

//left-third-finger
const leftThdPattern = document.querySelector(".th-left-pattern");
const leftThdCount = document.querySelector(".th-left-count");

leftThdPattern.textContent = localStorage.getItem("leftThdCount");
leftThdCount.textContent = localStorage.getItem("lrc3");

//left-fourth-finger
const leftFthPattern = document.querySelector(".fth-left-pattern");
const leftFthCount = document.querySelector(".fth-left-count");

leftFthPattern.textContent = localStorage.getItem("leftFthCount");
leftFthCount.textContent = localStorage.getItem("lrc4");

//left-fifth-finger

const leftFifPattern = document.querySelector(".fifth-left-pattern");
const leftFifCount = document.querySelector(".fifth-left-count");

leftFifPattern.textContent = localStorage.getItem("leftFifCount");
leftFifCount.textContent = localStorage.getItem("lrc5");

//Getting Total Rich Counts
const total_rich_count_r = document.querySelector(".total-ridge-count-right");
var totalvalue_right = Math.floor(
  parseInt(
    Number(rightCount.innerText) +
      Number(secCount.innerText) +
      Number(thdCount.innerText) +
      Number(fthCount.innerText) +
      Number(fifthCount.innerText)
  )
);
total_rich_count_r.textContent = totalvalue_right;

const total_rich_count_l = document.querySelector(".total-ridge-count-left");
var totalvalue_left = Math.floor(
  parseInt(
    Number(leftCount.innerText) +
      Number(leftScndCount.innerText) +
      Number(leftThdCount.innerText) +
      Number(leftFthCount.innerText) +
      Number(leftFifCount.innerText)
  )
);
total_rich_count_l.textContent = totalvalue_left;

//RIGHT_PALM
//LEFT_PALM

//anonymous function that clear the local and storage handling storage
setTimeout(() => {
  sessionStorage.clear();
  localStorage.clear();
}, 5000);
