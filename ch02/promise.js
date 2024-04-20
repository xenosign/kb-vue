// const p = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     let num = Math.random();
//     //0~1사이의 난수 발생
//     if (num >= 0.8) {
//       reject("생성된 숫자가 0.8이상임- " + num);
//     }
//     resolve(num);
//   }, 2000);
// });

// p.then((result) => {
//   console.log("처리 결과 : ", result);
// }).catch((error) => {
//   console.log("오류 : ", error);
// });
// console.log("## Promise 객체 생성!");

const conditionFunc = () => {
  const result = Math.random() * 10 > 3;
  return result;
};

// let p = new Promise((resolve, reject) => {
//   resolve("first!");
// });

// p.then((msg) => {
//   console.log(msg);
//   if (conditionFunc()) {
//     return "second";
//   } else {
//     throw "ERR 발생";
//   }
// })
//   .then((msg) => {
//     console.log(msg);
//     if (conditionFunc()) {
//       return "third";
//     } else {
//       throw "ERR 발생";
//     }
//   })
//   .then((msg) => {
//     console.log(msg);
//     if (conditionFunc()) {
//       return "끝";
//     } else {
//       throw "ERR 발생";
//     }
//   })
//   .then((msg) => {
//     console.log(msg);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// function cbFunc(msg, cb) {
//   console.log(msg);

//   if (conditionFunc()) {
//     cb();
//   } else {
//     console.log("ERR 발생");
//   }
// }

// cbFunc("first", () => {
//   cbFunc("second", () => {
//     cbFunc("third", () => {
//       console.log("끝!");
//     });
//   });
// });

const promiseConditionFunc = new Promise((resolve, reject) => {
  if (conditionFunc()) {
    resolve();
  } else {
    reject("ERR 발생");
  }
});

async function asyncFunc() {
  try {
    console.log("first");

    await promiseConditionFunc;

    console.log("second");

    await promiseConditionFunc;

    console.log("third");

    await promiseConditionFunc;

    console.log("끝");
  } catch (error) {
    console.log(error);
  }
}

asyncFunc();
