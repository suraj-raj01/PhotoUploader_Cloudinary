import React, { useState } from 'react'
import api from '../API';
import {message} from "antd"
import axios from "axios";
import { useNavigate } from 'react-router-dom';
const InsertPhoto = () => {
  const navigate = useNavigate();
  const [filename,setFileName] = useState("");
  const handleFileChange=(e)=>{
    const filename = e.target.files[0];
    setFileName(filename);
  }

  const handleFile=async(e)=>{
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", filename);
    formData.append("upload_preset", "myphotos");
    formData.append("cloud_name", "dtrpmtbie");
    let cloudinary_api = "https://api.cloudinary.com/v1_1/dtrpmtbie/auto/upload";
    let API = `${api}/upload/uploadphoto`;
    try {
      const response = await axios.post(cloudinary_api,formData);
      const Data = await axios.post(API,{image:response.data.url});
      message.success(Data.data.msg)
      navigate("/display");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <form id='form'>
        <input type="file" 
        onChange={handleFileChange}
        />
      </form>
      <button id='submit-button' onClick={handleFile}>Submit</button>
    </div>
  )
}

export default InsertPhoto
