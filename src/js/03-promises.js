import Notiflix from 'notiflix';

const formEl = document.querySelector('.form');
formEl.addEventListener(`submit`, e => {
  e.preventDefault();

  count = 0;
  startDelay = e.currentTarget.elements.delay.value;
  stepDelay = e.currentTarget.elements.step.value;
  delay = stepDelay;
  // let delay = startDelay;
  let amount = e.currentTarget.elements.amount.value;
  setInterval,
    (intervalId = setInterval(function () {
      delay = stepDelay * count + +startDelay;
      count++;
      if (count == amount) {
        clearInterval(intervalId);
      }
      createPromise(count, delay);
    }, delay));
});

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(
      `Fullfield promise ${position} in ${delay} seconds`
    );
  } else {
    Notiflix.Notify.failure(`Reject promise ${position} in ${delay} seconds`);
  }
}
const onClick = () => {
  setTimeout(() => {}, startDelay);
};
