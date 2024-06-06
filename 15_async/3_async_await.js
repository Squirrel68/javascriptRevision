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

// console.log(typeof run);
run();
