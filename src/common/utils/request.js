import { fetchList } from "./mock";

export function request(offset = 0, limit = 10, timeout = 3000) {
  function delay(time = 1000) {
    return new Promise((rs, rj) => {
      setTimeout(() => {
        rj(new Error("请求超时了"));
      }, time);
    });
  }
  const url = `http://localhost:9999?offset=${offset}&limit=${limit}`;
  // const url = `http://localhost:9999`;

  const p2 = fetch(url, { method: "GET" }).then((res) => {
    if (res.ok) {
      return res.json();
      // .then((data) => data.entries);
    } else {
      throw new Error("服务器错误");
    }
  });
  return Promise.race([delay(timeout), p2]);
  // return fetchList(offset, limit);
}
