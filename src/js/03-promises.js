import Notiflix from 'notiflix';

function createPromise(position, delay) {
  delay = 1000;
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    Notiflix.Notify.success(`Fullfield `);
  } else {
    Notiflix.Notify.failure(`err`);
  }
}

for (let i = createPromise(); i > 5; i + 1) {
  position = i;
  delai += delai;
}

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(5);
//   }, 2000);
// });

// promise
//   .then(value => {
//     console.log(value); // 5
//     return value * 2;
//   })
//   .then(value => {
//     console.log(value); // 10
//     return value * 3;
//   })
//   .then(value => {
//     console.log(value); // 30
//   })
//   .catch(error => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log('Final task');
//   });

// const fetchUserFromServer = username => {
//   return new Promise((resolve, reject) => {
//     console.log(`Fetching data for ${username}`);

//     setTimeout(() => {
//       // Change value of isSuccess variable to simulate request status
//       const isSuccess = true;

//       if (isSuccess) {
//         resolve('success value');
//       } else {
//         reject('error');
//       }
//     }, 2000);
//   });
// };

// fetchUserFromServer('Mango')
//   .then(user => console.log(user))
//   .catch(error => console.error(error));
