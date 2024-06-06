// 2. Có callback: truyền hàm vào hàm khác như một tham số
function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer); // myDisplayer là hàm callback, được truyền vào myCalculator() như một tham số, và được gọi, thực thi sau khi myCalculator() đã hoàn thành.
