import React, { useState, useEffect, useRef } from "react";
import "./LongList.scss";
import { Button } from "antd";
import { log } from "../common/utils/debug";
import { throttle } from "../common/utils/throttle";
import { getList, fetchList } from "./utils";

const total = 2e2;
const itemHeight = 40;
const wrapperHeight = 600;

const pageSize = Math.ceil(wrapperHeight / itemHeight);

function LongList() {
  const [list, setList] = useState(
    getList(0, Math.ceil(wrapperHeight / itemHeight))
  );
  const [offset, setOffset] = useState(0);
  const blankRef = useRef(null);
  const wrapperRef = useRef(null);
  const viewRef = useRef(null);
  useEffect(() => {
    function initDOM() {
      console.log("blank", blankRef.current);
      if (blankRef.current) {
        blankRef.current.style.height = total * itemHeight + "px";
      }
      // if (viewRef.current) {
      //   viewRef.current.style.marginTop = `${-total * itemHeight + 0}px`;
      // }
    }

    function onScroll() {
      let scrollTop = wrapperRef.current.scrollTop;
      let newOffset = Math.floor(scrollTop / itemHeight);
      setOffset(newOffset);

      // let noMore = newOffset > total - pageSize;
      // if (!noMore) {
      //   viewRef.current.style.marginTop = `${
      //     -total * itemHeight + scrollTop
      //   }px`;
      // }
      console.log("scroll", `top=${scrollTop},offset=${newOffset}`);
    }

    const throttleOnScroll = throttle(onScroll, 100);
    function initEvent() {
      if (wrapperRef.current) {
        wrapperRef.current.addEventListener("scroll", throttleOnScroll);
      }
    }

    initDOM();
    initEvent();
    return () => {
      if (wrapperRef.current) {
        wrapperRef.current.removeEventListener("scroll", throttleOnScroll);
      }
    };
  }, []);

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
  // useEffect(() => {
  //   setList(getList(0, 100));
  // }, []);

  const viewListPart = list.map((x) => {
    return (
      <div
        className="list-item"
        key={x.id}
        style={{ backgroundColor: x.id % 2 === 0 ? "lightgreen" : "auto" }}
      >
        <span>id = {x.id}</span>
        <span>value = {x.value}</span>
      </div>
    );
  });

  useEffect(() => {
    const newList = getList(offset, Math.ceil(wrapperHeight / itemHeight));
    setList(newList);
  }, [offset]);

  return (
    <div className="LongList">
      <h1>LongList</h1>
      <h3>offset={offset}</h3>
      <div className="component">
        <div className="view-part" ref={viewRef}>
          {viewListPart}
        </div>
        <div className="list-wrapper" ref={wrapperRef}>
          <div className="blank-part" ref={blankRef}></div>
        </div>
      </div>
      {/* <Button>click</Button> */}
    </div>
  );
}
export default LongList;
