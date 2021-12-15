export function fetchList(offset = 0, limit = 10) {
  let list = new Array(limit).fill(null).map((_, i) => {
    return {
      id: `id${offset + i}`,
      value: Math.random(),
    };
  });

  let delayTime = Math.random() * 3000;
  return new Promise((resolve) => {
    console.time("request");
    setTimeout(() => {
      console.timeEnd("request");
      resolve(list);
    }, delayTime);
  });
}
