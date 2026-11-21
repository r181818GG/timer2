// function pad(n) {
//     return String(n).padStart(2, '0');
// }

// const clock = document.querySelector('#click');
// const dateEl = document.querySelector('#date');

// const days = ['воскресенье',
//      'понедельник', 
//      'вторник', 
//      'среда', 
//      'четверг',
//       'пятница', 
//       'суббота'];
// const months = ['января', 
//     'февраля',
//      'марта',
//       'апреля',
//        'мая', 
//        'июня', 
//        'июля', 
//        'августа', 'сентября', 'октября', 'ноября', 'декабря'];



//        function updateClock(){
//         const now = new Date();

//         clock.textContent = `${pad(now.getHours)}:${pad(now.getMinutes)}:${pad(now.getSeconds)}`;

//         dateEl.textContent = `${days[now.getDay()]} ${now.getDate} ${moth[now.getMonth]} $
//         {now.getFullYear()}`;
//        }

//        updateClock();
//        setInterval(updateClock, 1000);

//        const stopwatch = document.querySelector('#stopwarch');
//        const swStart = document.querySelector('#swStart');
//        const swStop = document.querySelector('#swStop');
//        const swReset = document.querySelector('#swReset');


//        let swTime = 600;
//        let swId = null;
//         function showStopwatch() {  

            
//             const minutes = Math.floor(swTime / 600);
//             const seconds = Math.floor((swTime % 600) / 10);
//             const tenht = swTime % 10;
//             stopwatch.textContent = `${pad(minutes)}: ${pad(seconds)}: ${pad(tenth)}`;
//         }

//         swStart.addEventListener('click', () => {
//             if (swId !== null) return;

//             swId = setInterval(() => {
//                 swTime++;
//                 showStopwatch();

//             }, 100);
//         });


//         swStop.addEventListener('click', () => {
//             clearInterval(swId);
//             swId = null;

//         });

//         swReset.addEventListener('click' () => {
//             clearInterval(swId);
//             swId = null;
//             // swTime = 0;
//             // showStopwatch();
//         });


//         const timerImput = document.querySelector('#timerImput');
//         const timerStart = document.querySelector('#timerStart');
//         const timerView = document.querySelector('#timerView');
//         const timerWsg = document.querySelector('#timerMsg');

//         let timerleft = 0;
//         let timerId = null;
// const showTimer = () => {
//   const minutes = Math.floor(timerLeft / 60);
//   const seconds = timerLeft % 60;
//   timerView.textContent = `${pad(minutes)}:${pad(seconds)}`;
// };

// timerStart.addEventListener("click", () => {
//   clearInterval(timerId);

//   timerLeft = Number(timerInput.value);

//   if (isNaN(timerLeft) || timerLeft <= 0) {
//     timerMsg.textContent = "Введи число больше нуля";
//     return;
//   }

//   timerMsg.textContent = "";
//   showTimer();

//   timerId = setInterval(() => {
//     timerLeft--;
//     showTimer();

//     if (timerLeft === 0) {
//       clearInterval(timerId);
//       timerId = null;
//       timerMsg.textContent = "Время вышло!";

//       setTimeout(() => {
//         timerMsg.textContent = "";
//       }, 3000);
//     }
//   }, 1000);
// });


// const greeting = document.querySelector('#greeting');
// const hour = new Date().getHours();
// let hello;

// if (hour < 6) {
//     hello = 'Доброй ночи';
// } else if (hour < 12) {
//     hello = 'Доброе утро';
// } else if (hour < 18) {
//     hello = 'Добрый день'
// } else {
//     hello = 'Добрый вечер';
// }
// greeting.textContent = `${hello}! Сегодня отсличный день для кода.`;


function pad(n) {
  return String(n).padStart(2, "0");
}

const clock = document.querySelector("#clock");
const dateEl = document.querySelector("#date");

const days = [
  "воскресенье",
  "понедельник",
  "вторник",
  "среда",
  "четверг",
  "пятница",
  "суббота",
];
const months = [
  "января",
  "февраля",
  "марта",
  "апреля",
  "мая",
  "июня",
  "июля",
  "августа",
  "сентября",
  "октября",
  "ноября",
  "декабря",
];

function updateClock() {
  const now = new Date();

  clock.textContent = `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
  dateEl.textContent = `${days[now.getDay()]} ${now.getDate()} ${months[now.getMonth()]} ${now.getFullYear()}`;
}

// updateClock();
setInterval(updateClock, 1000);

const stopwatch = document.querySelector("#stopwatch");
const swStart = document.querySelector("#swStart");
const swStop = document.querySelector("#swStop");
const swReset = document.querySelector("#swReset");

let swTime = 725;
let swId = null;

function showStopwatch() {
  const minutes = Math.floor(swTime / 600);
  const seconds = Math.floor((swTime % 600) / 10);
  const tenth = swTime % 10;
  stopwatch.textContent = `${pad(minutes)}:${pad(seconds)}:${pad(tenth)}`;
}

swStart.addEventListener("click", () => {
  if (swId !== null) return;

  swId = setInterval(() => {
    swTime++;
    showStopwatch();
  }, 100);
});

swStop.addEventListener("click", () => {
  clearInterval(swId);
  swId = null;
});

swReset.addEventListener("click", () => {
  clearInterval(swId);
  swId = null;
  swTime = 0;
  showStopwatch();
});

const timerInput = document.querySelector("#timerInput");
const timerStart = document.querySelector("#timerStart");
const timerView = document.querySelector("#timerView");
const timerMsg = document.querySelector("#timerMsg");

let timerLeft = 0;
let timerId = null;

const showTimer = () => {
  const minutes = Math.floor(timerLeft / 60);
  const seconds = timerLeft % 60;
  timerView.textContent = `${pad(minutes)}:${pad(seconds)}`;
};

timerStart.addEventListener("click", () => {
  clearInterval(timerId);

  timerLeft = Number(timerInput.value);

  if (isNaN(timerLeft) || timerLeft <= 0) {
    timerMsg.textContent = "Введи число больше нуля";
    return;
  }

  timerMsg.textContent = "";
  showTimer();

  timerId = setInterval(() => {
    timerLeft--;
    showTimer();

    if (timerLeft === 0) {
      clearInterval(timerId);
      timerId = null;
      timerMsg.textContent = "Время вышло!";

      setTimeout(() => {
        timerMsg.textContent = "";
      }, 3000);
    }
  }, 1000);
});

const greeting = document.querySelector("#greeting");
const hour = new Date().getHours();
let hello;

if (hour < 6) {
  hello = "Доброй ночи";
} else if (hour < 12) {
  hello = "Доброе утро";
} else if (hour < 18) {
  hello = "Добрый день!";
} else {
  hello = "Добрый вечер";
}
greeting.textContent = `${hello}! Сегодня отличный день для кода.`;


// До Нового года
const newYear = document.querySelector("#newYear");

function updateNewYear() {
  const now = new Date();
  const year = now.getFullYear() + 1;
  const nextYear = new Date(year, 0, 1);

  const diff = nextYear - now;
  const daysLeft = Math.ceil(diff / (1000 * 60 * 60 * 24));

  newYear.textContent = daysLeft;
}

updateNewYear();
setInterval(updateNewYear, 1000);


// Круг секундомера
const swLap = document.querySelector("#swLap");
const laps = document.querySelector("#laps");

swLap.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = stopwatch.textContent;
  laps.append(li);
});


// Сброс таймера
const timerReset = document.querySelector("#timerReset");

timerReset.addEventListener("click", () => {
  clearInterval(timerId);
  timerId = null;
  timerLeft = 0;
  timerInput.value = "";
  timerMsg.textContent = "";
  showTimer();
});



const alarmInput = document.querySelector("#alarmInput");
const alarmStart = document.querySelector("#alarmStart");
const alarmMsg = document.querySelector("#alarmMsg");

let alarmTime = "13";

alarmStart.addEventListener("click", () => {
  alarmTime = alarmInput.value;
  alarmMsg.textContent = alarmTime
    ? "Будильник установлен!"
    : "Выбери время";
});

setInterval(() => {
  const now = new Date();
  const currentTime = `${pad(now.getHours())}:${pad(now.getMinutes())}`;

  if (alarmTime === currentTime) {
    alarmMsg.textContent = "Пора!";
    alarmTime = "";
  }
}, 1000);
       