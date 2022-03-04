let digits = document.querySelector("#digits");
let rows = document.querySelector("#rows");
let speed = document.querySelector("#speed");
let submit = document.querySelector(".submit-btn");
let hidden = document.querySelector(".disp-none");
let numDisplay = document.querySelector("#num-display");
let op = document.querySelector(".output");
let ip = document.querySelector(".ip-container");
let answer = document.querySelector("#answer");
let answerBtn = document.querySelector(".submit-answer");
let retry = document.querySelector(".retry");

submit.addEventListener("click", submitHandler);
answerBtn.addEventListener("click", answerhandler);
retry.addEventListener("click", () => location.reload());
let sum = 0;

function submitHandler() {
   rows = Number(rows.value);
   digits = Number(digits.value);
   console.log(rows, typeof (rows), isNaN(rows))
   if (rows < 1 || isNaN(rows)) {
      op.style.display = "block";
      op.innerText = "Please hit Retry and enter rows greater than 0";
      console.log("hi");
      submit.style.display = "none";
      retry.style.display = "block"
      retry.style.margin = "auto"
   } else {
      console.log(rows, digits);
      console.log('hello');
      ip.style.display = "none";
      submit.style.display = "none";

      speed = speed.value;

      let min = 0;
      let max = 0;
      let duration = 0;

      if (digits === 1) {
         min = 1;
         max = 10;
      } else if (digits === 2) {
         min = 10;
         max = 100;
      } else if (digits === 3) {
         min = 100;
         max = 1000;
      }
      if (speed === "slow") duration = 700;
      else if (speed === "medium") duration = 400;
      else if (speed === "fast") duration = 200;
      const numGenerator = (rows) => {
         counter = rows * duration;
         generator = setInterval(() => {
            num = Math.round(Math.random() * (max - min) + min);
            numDisplay.innerText = num;
            sum = sum + num;
            rows--;
            if (rows === 0) {
               clearInterval(generator);
               hidden.style.display = "block";
               answerBtn.style.display = "block";
               retry.style.display = "block";
               op.style.display = "block";
            }
         }, counter);
      };

      numGenerator(rows);
   }
}

function answerhandler() {
   if (sum === Number(answer.value)) {
      numDisplay.innerHTML = '😍';
      op.style.color = "#ADFF2F"
      op.innerText = "Yayy! Correct Answer";
   } else {
      numDisplay.innerHTML = '😟';
      op.style.color = "#DC143C"
      op.innerText = `Oh No! The Correct Answer ${sum}`;
   }
};