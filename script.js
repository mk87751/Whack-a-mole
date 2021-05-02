let num;
function start() {
  document.getElementById("score").textContent = 0;
  num = 10;
  let mole = 0;
  const timer = setInterval(function () {
    num--;
    document.getElementById("time-left").textContent = num;
    if (mole !== 0) mole.classList.remove("mole");
    let n = Math.trunc(Math.random() * 9);
    document.querySelectorAll(".square").forEach((box, index) => {
      if (index == n) {
        mole = box;
        box.classList.add("mole");
        box.addEventListener("click", clickEvent);
      }
    });
    if (num == 0) {
      clearInterval(timer);
      mole.classList.remove("mole");
    }
    console.log(n);
  }, 1000);

  const clickEvent = function () {
    let score = document.getElementById("score");
    score.textContent = Number(score.textContent) + 1;
  };
}

function reset() {
  num = 100;
  document.getElementById("score").textContent = 0;
}
