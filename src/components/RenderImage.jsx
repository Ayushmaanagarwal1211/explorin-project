import React, { useEffect, useState } from 'react'
import './renderimage.css'
export default function RenderImage({url,ready,error,index}) {
let [error,setError] = useState(false)

    useEffect(()=>{
let img = document.getElementById(`img-${index}`)

    },[])
  return (
    <div >
       {
        ready ?<img id={`img-${index}`} src={url}></img> :<img src="https://e7.pngegg.com/pngimages/10/205/png-clipart-computer-icons-error-information-error-angle-triangle-thumbnail.png"></img>
       } 
    </div>
  )
}
