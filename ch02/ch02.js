let obj = { result: 0 };
obj.add = function (x, y) {
  const inner = () => {
    this.result = x + y;
  };
  inner();
};
obj.add(3, 4);
console.log(obj); // { result: 0 }
console.log(globalThis.result); // 7

const o = {
  get: () => {},
};
