import React from 'react'
import {useParams} from 'react-router-dom'
import { useNavigate } from "react-router-dom";

const UploadedImg = () => {
  const {id} = useParams();
  const nav = useNavigate();
  const navigateToDown = (e) => {
    e.preventDefault()
    window.location.href = `https://localhost:3061/${id}`
  }
  return (
    <form className="container">
      <img class="prev-img" src={`https://localhost:3061/${id}`} alt={`preview-${id}`}/>
      <button onClick={navigateToDown}>Download</button>
      <button onClick={()=>nav('/')}>Upload another image</button>
    </form>
  )
}

export default UploadedImg