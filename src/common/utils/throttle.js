export function throttle(func, time = 100) {
  let canRun = true;
  return function (...args) {
    let that = this;
    if (canRun) {
      canRun = false;
      let timer = setTimeout(() => {
        canRun = true;
        func.apply(that, args);
      }, time);
    }
  };
}
