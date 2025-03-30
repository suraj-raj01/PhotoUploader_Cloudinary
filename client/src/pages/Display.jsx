import React, { useEffect, useState } from 'react'
import api from '../API';
import axios from 'axios';
import { FaRegWindowClose } from "react-icons/fa";

const Display = () => {

  const[mydata,setMydata] = useState([]);
  const[showImg,setShoImg] = useState("");
  const[status,setStatus] = useState(true);

  const loadData=async()=>{
    const API = `${api}/upload/display`;
    try {
      const response = await axios.get(API);
      setMydata(response.data);
      console.log(mydata);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    loadData();
  },[]);

  const showImage=async(id)=>{
    const API = `${api}/upload/showimage`;
    try {
      const res = await axios.post(API,{id:id})
      setShoImg(res.data)
    } catch (error) {
      console.log(error);
    }
    document.getElementById("showbigImage").style.display="block"
  }

  const close=()=>{
    document.getElementById("showbigImage").style.display="none"
  }

  const ans = mydata.map((key)=>{
    return(
      <>
          <img src={key.images} alt="" height='255px' width='32%' onClick={()=>{showImage(key._id)}}/>
      </>
    )
  })

  return (
    <div>
      {/* <h1>Display</h1> */}
      <div id="photos">
        <div id="img">
          {ans}
        </div>
      </div>
        <div id="showbigImage">
        <div id="close" >
        <FaRegWindowClose  onClick={close}/>
        </div>
        <div id="photo">
         {/* <span>{showImg.uploadedAt}</span> */}
          <img src={showImg.images} alt="" height='640px'/>
        </div>
        </div>
    </div>
  )
}

export default Display
