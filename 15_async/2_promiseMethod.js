// promise method: resolve, reject, all
// var successPromise = Promise.resolve("Success!");
// var failPromise = Promise.reject("Fail!");

// 2. Promise.all: chạy song song nhiều Promise
var promise1 = new Promise((resolve) => setTimeout(resolve([1]), 1000));
var promise2 = new Promise((resolve) => setTimeout(resolve([2, 3]), 5000));

Promise.all([promise1, promise2]).then((res) => console.log(res));
