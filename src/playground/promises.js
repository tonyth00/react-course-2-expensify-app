const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('Hello');
  }, 1500);
});

console.log('before');

promise
  .then(res => {
    console.log(res);
  })
  .catch(err => {
    console.error(err);
  });

console.log('after');
