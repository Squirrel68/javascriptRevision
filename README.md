# javascriptRevision

### 1. Expression:

```
Expression (biểu thức): là sự kết hợp của các toán hạng và toán tử mà ngôn ngữ lập trình có thể diễn giải và tính toán để ra 1 giá trị nào đó:
- Toán hạng (operand)
- Toán tử (operator)
```

### 2. Types

```
Có 8 kiểu dữ liệu trong JavaScript:
1. String
2. Number
3. BigInt
4. Boolean
5. Undefined:  1 biến được khai báo nhưng không được gán giá trị sẽ có giá trị là undefined, kiểu dữ liệu là undefined
6. Null: 1 biến được gán giá trị là null, kiểu dữ liệu là object
7. Symbol:
    kiểu dữ liệu đặc biệt, không thể thay đổi, không thể so sánh với bất kỳ giá trị nào khác
8. Object: object có thể là 1 mảng

! Lưu ý khác:
- Javascript có kiểu dữ liệu động (dynamic typing): không cần khai báo kiểu dữ liệu cho biến.

```

### 3. Classes

```
! Lưu ý khi khai báo class:
- Luôn phải có constructor
- thuộc tính private phải có dấu _
- Có thể khai báo getter, setter
- Có thể khai báo static method
- Có thể khai báo static property
- Có thể kế thừa từ 1 class khác
- Có thể sử dụng super để gọi constructor của class cha
```

### 4. Variables

```
1. Biến trong JavaScript có thể lưu tất cả kiểu dữ liệu
2. const, let, var:
- const: block scope, không thể gán lại giá trị
- let: block scope, có thể gán lại giá trị, không thể khai báo lại biến
- var: function scope, global scope, có thể gán lại giá trị, có thể khai báo lại biến
```

### 5. Functions

```
- Khai báo hàm
```

### 6. This

```
- this trong JavaScript là 1 keyword đại diện cho object
    + this đứng 1 mình: this đại diện cho global object
    + trong 1 phương thức của object, this là object đó
    + trong 1 function thông thường, this là global object
    + trong strict mode, trong 1 function, this là undefined
    + trong 1 event, this là element nhận event đó

- phương thức như call(), apply(), bind() có thể thay đổi giá trị của this

```

### 7. Arrow Functions

trước khi có arrow function

```
let sayHi = function () {
  return "Hi!";
};
```

Sau khi có arrow function

```
let sayHaiz = () => {
  return "Haizzzzzz!";
};
```

### 8. Loops

```
1. for: for, for in, for of
2. while: while, do while
3. break, continue
```

### 9. Scopes

```
1. Global Scope:
    - pham vi toan cuc, co the truy cap tu bat ky dau, ca file, function, block (var)

2. Function Scope:
    - pham vi cua bien chi ton tai trong function (var, let, const )
3. Block Scope:
    - pham vi cua bien chi ton tai trong block {} (let, const)
```

### 10. Arrays

```
- Khi tạo mới 1 mange nên dùng const thay vì let để tránh mảng bị gán lại. khi Dùng const để khai báo mảng, ta vẫn có thể thay đổi giá trị của các phần tử trong mảng đó.
- Thao tác với các phần tử của mảng:
    + Truy cập vào phần tử của mảng
    + Thay đổi giá trị của phần tử trong mảng
    + Thêm phần tử vào mảng
    + Xóa phần tử khỏi mảng
- Lặp qua 1 mảng
- Convert 1 mảng thành 1 Xâu
- Tìm kiếm 1 phần tử trong mảng
- Các phương thức của mảng
- Mảng 2 chiều
```

### 11. Template Literals

```
template strings = template literals
```

### 12. Semicolons

```
Dấu chấm phẩy trong JavaScript được sử dụng để phân tách các câu lệnh trong chương trình JavaScript.
```

### 13. Strict Mode

```
- Để code an toàn hơn, log báo các lỗi tiềm ẩn
- "use strict";
- Khai báo ở đầu file hoặc ở đầu function ( khai báo strict mode ở đầu phạm vi)
- Khi enable strict mode:
    + Báo lỗi khi khai báo biến mà không sử dụng var, let, const
    + Báo lỗi khi hàm có tham số trùng tên
    + Báo lỗi khi đặt tên biến trùng với từ khóa


```

### 14. Callback

```
Callback là một hàm được truyền vào một hàm khác như một tham số. Kỹ thuật này cho phép 1 hàm gọi lại hàm khác.
1 hàm callback có thể chạy sau khi hàm khác đã hoàn thành.
```

Khi chưa có call back

    function myDisplayer(some) {
        console.log(some);
    }

    function myCalculator(num1, num2) {
        let sum = num1 + num2;
        myDisplayer(sum);
    }

    myCalculator(5, 5);

Khi có callback

    function myDisplayer(some) {
        console.log(some);
    }

    function myCalculator(num1, num2, myCallback) {
        let sum = num1 + num2;
        myCallback(sum);
    }

    myCalculator(5, 5, myDisplayer);
    // myDisplayer là hàm callback, được truyền vào myCalculator() như một tham số, và được gọi, thực thi sau khi myCalculator() đã hoàn thành.

    ==> Hàm được truyền vào (callback function) sẽ được gọi sau khi hàm bên ngoài (containing function) đã hoàn thành.

### 15. Async

- asynchronous: các hàm chạy SONG SONG, không chờ hàm khác chạy xong mới chạy gọi là hàm bất đồng bộ. VD như setTimeout(), setInterval(), fetch(), XMLHttpRequest(), file reading, request animation frame, etc.
- synchronous: các hàm chạy tuần tự, chờ hàm khác chạy xong mới chạy gọi là hàm đồng bộ. VD như alert(), confirm(), prompt(), etc.
- Với lập trình bất đồng bộ, Javascript có thể xử lý các task tốn thời gian trong khi vẫn tiếp tục chạy các task khác mà không cần chờ task tốn thời gian kết thúc.

  Tuy nhiên, lập trình bất đồng bộ có thể tạo ra callback hell, khi có nhiều hàm callback lồng nhau, khó viết, khó debug.
  Để giải quyết vấn đề này, ta sử dụng Promise.

#### 15.1. Callback Hell

hàm bên ngoài chạy xong mới chạy hàm bên trong. Hàm bên trong phải đợi hàm bên ngoài chạy xong mới chạy.

```
setTimeout(function () {
  console.log(1);
  setTimeout(function () {
    console.log(2);
    setTimeout(function () {
      console.log(3);
    }, 1000);
  }, 1000);
}, 1000);
```

#### 15.2. Promise

Giải quyết callbackhell

```
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
```

- Promise: là một object đại diện cho một giá trị chưa được xác định khi hàm bất đồng bộ hoàn thành. Promise có 3 trạng thái: pending, fulfilled, rejected.
- Promise chaining: Khi một promise trả về một promise khác.
  promise chaining giúp giải quyết callback hell, giúp code chạy dọc thay vì sâu như callback

```
then 1 return gì thì then 2 có thể nhận được giá trị đó
-    then return 1 giá trị khác Promise thì then tiếp theo sẽ chạy ngay
-   then return 1 Promise thì then tiếp theo sẽ chờ Promise đó resolve
```

#### 15.3. Async/Await

```
async await giúp promises code trở nên dễ đọc hơn
  - async khiến 1 function trả về một promise
  - await chỉ có thể được sử dụng bên trong async function, await khiến 1 hàm async đợi cho đến khi promise được resolved hoặc rejected

```

```
function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function run() {
  await sleep(1000);
  console.log(1);
  await sleep(1000);
  console.log(2);
  await sleep(1000);
  console.log(3);
}

run();
// thêm async vào function run để chuyển nó thành 1 async function, để có thể sử dụng await bên trong nó
// hàm async run sẽ chạy tuần tự, chờ hàm sleep resolve mới chạy tiếp
```

### 16. ECMAScript 6, 2016, 2017

#### 16.1. let, const, var - DONE - 4_variables.js

#### 16.2. arrow function - DONE - 7_arrowFunction.js

#### 16.3. template string - DONE - 11_templateLiterals.js

#### 16.4. classes - DONE - 3_classes.js

#### 16.5. destructuring

#### 16.6. spread

#### 16.7. tagged template literals

#### 16.8. default parameters

#### 16.9. enhanced object literals

#### 16.10. async/await - DONE - 15_async/3_async_await.js

#### 16.11. modules import/export

```
1 module chỉ có thể export default 1 lần và export nhiều lần
export cái gì ra thì import cái đó vào
```
