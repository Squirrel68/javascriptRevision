var myPromise = new Promise(
  // Executor: là một hàm nhận 2 tham số là 2 hàm là resolve và reject
  function (resolve, reject) {
    let isSuccess = false;
    if (isSuccess) resolve("Success!");
    else reject("Error!");
  }
);
myPromise
  .then(
    // Thành công
    function (value) {
      console.log(value);
    }
  )
  .catch(
    // Thất bại
    function (error) {
      console.log(error);
    }
  )
  .finally(
    // Luôn chạy
    function () {
      console.log("Done!");
    }
  );
