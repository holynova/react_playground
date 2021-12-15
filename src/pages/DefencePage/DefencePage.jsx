import React, { useEffect, useState } from "react";
// import './DefencePage.scss';
import { Button } from "antd";
import { fetchList } from "../../common/utils/mock";
import DebugPanel from "../../common/components/DebugPanel";
import { request } from "../../common/utils/request";
function DefencePage() {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        let newData = await request();
        console.log("newData", newData);
        setData(newData);
      } catch (e) {
        console.log("出错了1", e);
        setData("出错了2");
      }
      setLoading(false);
    }
    fetchData();

    // fetchList()
    //   .then((res) => {
    //     setData(res);
    //   })
    //   .finally(() => setLoading(false));
  }, []);

  return (
    <div className="DefencePage">
      <h1>DefencePage</h1>
      {loading ? <div>loading...</div> : <DebugPanel data={data}></DebugPanel>}
      {/* <Button>click</Button> */}
    </div>
  );
}
export default DefencePage;
