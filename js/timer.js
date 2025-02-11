const timerElement = document.querySelectorAll('.timer');
const targetDate = new Date('2025-03-01T00:00:00').getTime();

setInterval(function () {
  const now = new Date().getTime();
  const distance = targetDate - now;

  const days = Math.floor(distance / (1000 * 60 * 60 * 24))
    .toString()
    .padStart(2, '0');
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
    .toString()
    .padStart(2, '0');
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    .toString()
    .padStart(2, '0');
  const seconds = Math.floor((distance % (1000 * 60)) / 1000)
    .toString()
    .padStart(2, '0');

  timerElement.forEach(
    timer =>
      (timer.innerHTML = `<div class="date-col">
                <p class="date-time">${days}</p>
                <p class="date-descr">днів</p>
              </div>
              <div class="dott">:</div>
              <div class="date-col">
              <p class="date-time">${hours}</p>
              <p class="date-descr">годин</p>
              </div>
              <div class="dott">:</div>
              <div class="date-col">
              <p class="date-time">${minutes}</p>
              <p class="date-descr">хвилин</p>
              </div>
              <div class="dott">:</div>
              <div class="date-col">
                <p class="date-time" " id="last-time">${seconds}</p>
                <p class="date-descr">секунд</p>
              </div>`)
  );

  if (distance < 0) {
    timerElement.innerHTML = `<div class="date-col">
                <p class="date-time">00</p>
                <p class="date-descr">днів</p>
              </div>
              <div class="dott">:</div>
              <div class="date-col">
              <p class="date-time">00</p>
              <p class="date-descr">годин</p>
              </div>
              <div class="dott">:</div>
              <div class="date-col">
              <p class="date-time">$00</p>
              <p class="date-descr">хвилин</p>
              </div>
              <div class="dott">:</div>
              <div class="date-col">
                <p class="date-time" " id="last-time">00</p>
                <p class="date-descr">секунд</p>
              </div>`;
  }
}, 1000);
