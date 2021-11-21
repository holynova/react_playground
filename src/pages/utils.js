export const getList = (offset = 0, limit = 10) => {
  // let maxStartIndex = total - limit;
  // if (offset > maxStartIndex) {
  //   offset = maxStartIndex;
  // }
  return new Array(limit).fill(0).map((_, index) => {
    return { id: index + offset, value: Math.random() };
  });
};

export const fetchList = (offset = 0, limit = 10) => {
  const delay = Math.random() * 1000;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getList(offset, limit));
    }, delay);
  });
};

export const resolveLast = (func) => {
  let cnt = 0;
  return (...args) => {
    cnt += 1;
    const id = cnt;
    return new Promise((resolve) => {
      if (id === cnt) {
        resolve(func(...args));
      }
    });
  };
};
