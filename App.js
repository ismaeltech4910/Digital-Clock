const hr = document.querySelector(".hours");
const min = document.querySelector(".minutes");
const sec = document.querySelector(".seconds");
const today = document.querySelector('.todaysDate');

function getClock() {
  let hour = new Date().getHours();
  let minute = new Date().getMinutes();
  let second = new Date().getSeconds();

  hr.innerText = hour;
  min.innerText = minute;
  sec.innerText = second;
  today.innerText = day;
  

  setTimeout(() => {
    getClock();
  }, 1000);
}

getClock();