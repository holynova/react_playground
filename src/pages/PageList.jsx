import React, { useState } from "react";
// import './PageList.scss';
import { Button } from "antd";

import { getList } from "./utils";

const total = 2e2;
const itemHeight = 40;
const wrapperHeight = 600;
const pageSize = Math.ceil(wrapperHeight / itemHeight);

function PageList() {
  return (
    <div className="PageList">
      <h1>PageList</h1>
      <Button>click</Button>
    </div>
  );
}
export default PageList;
