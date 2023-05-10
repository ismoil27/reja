console.log("Jack Ma maslahatlari");

const list = [
  "Yaxshi talaba bo'ling", // 0-20
  "To'g'ri boshliq tanlang va ko'proq xato qiling", // 20-30
  "O'zingizga ishlashni boshlang", // 30-40
  "Siz kuchli bo'lgan narsalarni qiling", // 40-50
  "Yoshlarga investitsiya qiling", // 50-60
  "Endi dam oling, foydasi yo'q endi", // 60
];

// CALLBACK function
function maslahatBering(a, callback) {
  if (typeof a !== "number") callback("Iltimos raqam yozing", null);
  else if (a <= 20) callback(null, list[0]);
  else if (a > 20 && a <= 30) callback(null, list[1]);
  else if (a > 30 && a <= 40) callback(null, list[2]);
  else if (a > 40 && a <= 50) callback(null, list[3]);
  else if (a > 50 && a <= 60) callback(null, list[4]);
  else {
    setInterval(function () {
      callback(null, list[5]);
    }, 5000);
  }
}

console.log("Passed here 0");

maslahatBering(65, (err, data) => {
  if (err) console.log("ERROR", err);
  else {
    console.log("javob:", data);
  }
});

console.log("Passed here 1");

// ASYNC function
// async function maslahatBering(a, callback) {
//   if (typeof a !== "number") throw new Error("Iltimos raqam yozing");
//   else if (a <= 20) return list[0];
//   else if (a > 20 && a <= 30) return list[1];
//   else if (a > 30 && a <= 40) return list[2];
//   else if (a > 40 && a <= 50) return list[3];
//   else if (a > 50 && a <= 60) return list[4];
//   else {
//     return new Promise((resolve, reject) => {
//       //   setTimeout(() => {
//       //     resolve(list[5]);
//       //   }, 5000);

//       setInterval(() => {
//         resolve(list[1]);
//       }, 1000);
//     });

//     // return list[5];
//     // setTimeout(function () {
//     // }, 5000);
//   }
// }

// CALL via then/catch
// console.log("Passed here 0");

// maslahatBering("hello")
//   .then((data) => {
//     console.log(`Javob: ${data}`);
//   })
//   .catch((err) => {
//     console.log(`${err}`);
//   });

// console.log("Passed here 1");

// CALL via async/await
// async function run() {
//   let javob = await maslahatBering(65);
//   console.log(javob);

//   //   javob = await maslahatBering(31);
//   //   console.log(javob);

//   //   javob = await maslahatBering(41);
//   //   console.log(javob);

//   //   javob = await maslahatBering(51);
//   //   console.log(javob);

//   //   javob = await maslahatBering(61);
//   //   console.log(javob);
// }

// run();
