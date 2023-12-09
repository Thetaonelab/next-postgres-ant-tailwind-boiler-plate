'use client'
import { Spin } from "antd";
import { useEffect, useState } from "react";

const pageName = "New"
const Manage: React.FC = () => {
  const [loading,setLoading] = useState(true)

  useEffect(()=>{
    setTimeout(() => {
      setLoading(false)
    }, 1000);  
  },[])
  

  return (
    <Spin spinning={loading}>
      {pageName}
    </Spin>);
  }

  export default Manage;