import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import { convertMs } from './convertMs';
import Notiflix from 'notiflix';
const dateInputEl = document.querySelector(`#datetime-picker`);
const btnStartEl = document.querySelector(`[data-start]`);
const timerContainerEl = document.querySelector(`.timer`);

const daysEl = timerContainerEl.querySelector(`[data-days]`);
const hoursEl = timerContainerEl.querySelector(`[data-hours]`);
const minutesEl = timerContainerEl.querySelector(`[data-minutes]`);
const secondsEl = timerContainerEl.querySelector(`[data-seconds]`);

btnStartEl.disabled = true;
let userDate = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    if (selectedDates[0] < Date.now()) {
      Notiflix.Notify.failure('Please choose a date in the future');
    } else {
      Notiflix.Notify.success('For countdown start press Start button');
      btnStartEl.disabled = false;
      userDate = selectedDates[0];
    }
    return userDate;
  },
};

flatpickr(dateInputEl, options);

btnStartEl.addEventListener(`click`, e => {
  countDown = setInterval(() => {
    const diff = userDate - Date.now();
    let convertDiff = convertMs(diff);
    if (diff < 0) {
      stop(countDown);
      return;
    }

    daysEl.textContent = addLeadingZero(convertDiff.days);
    hoursEl.textContent = addLeadingZero(convertDiff.hours);
    minutesEl.textContent = addLeadingZero(convertDiff.minutes);
    secondsEl.textContent = addLeadingZero(convertDiff.seconds);
  }, 1000);
});

function addLeadingZero(value) {
  return value.toString().padStart(2, '0');
}