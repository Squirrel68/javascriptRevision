// callbacks thường được sử dụng với các hàm bất đồng bộ.

for (let i = 0; i < 3; i++) {
  setTimeout(() => {
    console.log(i + 1);
  }, 1000);
}

// Callback hell: là tình trạng lồng nhiều callback trong nhau, khó đọc, khó hiểu, khó debug.
setTimeout(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
    setTimeout(function () {
      console.log(3);
    }, 1000);
  }, 1000);
}, 1000);
