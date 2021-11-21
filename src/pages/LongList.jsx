import React, { useState, useEffect } from "react";
import "./LongList.css";
import { Button } from "antd";
import { log } from "../common/debug";

const getList = (offset = 0, limit = 10) => {
  return new Array(limit).fill(0).map((_, index) => {
    return { id: index + offset, value: Math.random() };
  });
};

function LongList() {
  const [list, setList] = useState([]);

  // useEffect(()=>{
  //   const initWorker = () =>{
  //     let worker = new Worker('./worker.js')

  //     // function send(msg) {
  //     //   worker.postMessage(msg)
  //     // }

  //     // worker.addEventListener('message',msg=>{
  //     //   log('receive msg',msg)
  //     // })
  //   }

  //   initWorker()
  // },[])
  useEffect(() => {
    setList(getList(0, 100));
  }, []);

  return (
    <div className="LongList">
      <h1>LongList</h1>
      <div className="list-wrapper">
        {list.map((x) => {
          return (
            <div className="list-item" key={x.id}>
              <span>id = {x.id}</span>
              <span>value = {x.value}</span>
            </div>
          );
        })}
      </div>
      {/* <Button>click</Button> */}
    </div>
  );
}
export default LongList;
