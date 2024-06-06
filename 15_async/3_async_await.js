// async await giúp promises code trở nên dễ đọc hơn
// async khiến 1 function trả về một promise
// await chỉ có thể được sử dụng bên trong async function, await khiến 1 hàm async đợi cho đến khi promise được resolved hoặc rejected

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
