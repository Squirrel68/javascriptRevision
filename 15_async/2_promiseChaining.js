var myPromise = new Promise(
  // Executor: là một hàm nhận 2 tham số là 2 hàm là resolve và reject
  function (resolve, reject) {
    let isSuccess = true;
    if (isSuccess) resolve();
    else reject("Error!");
  }
);

// 1. then trả về một giá trị
myPromise
  .then(() => 1)
  .then((data) => {
    console.log(data);
    return 2;
  })
  .then((data) => {
    console.log(data);
    return 3;
  });

// 2. then trả về một promise khác
myPromise
  .then(() => {
    return new Promise((resolve) => {
      setTimeout(resolve([1, 2, 3]), 1000);
    });
  })
  .then((data) => {
    console.log(data);
    return 5;
  })
  .then((data) => {
    console.log(data);
    return 6;
  });

// 3. giải quyết call back hell
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
sleep(1000)
  .then(() => {
    console.log(1);
    return sleep(1000);
  })
  .then(() => {
    console.log(2);
    return sleep(1000);
  })
  .then(() => {
    console.log(3);
  });

// 4. CÓ lỗi xảy ra -> reject mất chuỗi trong promise chain -> bắt lỗi bằng catch
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
sleep(1000)
  .then(() => {
    console.log(1);
    return sleep(1000);
  })
  .then(() => {
    console.log(2);
    return new Promise((resolve, reject) => reject("Có lỗi ở số 2"));
  })
  .then(() => {
    console.log(3);
  })
  .catch(function (err) {
    console.log(err);
  });
