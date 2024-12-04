import React, { useEffect, useState } from 'react'
import './renderimage.css'
export default function RenderImage({url,ready,error,index}) {
let [error_img,setError] = useState(false)

    // useEffect(()=>{
    //     function checkError(){
    //     let img = document.getElementById(`img-${index}`)
    //             img.onerror(()=>{
    //                 setError(true)
    //             })

    // }
    // setTimeout(()=>{
    //     checkError()
    // },5000)
    // },[])
  return (
    <div style={{width:"38px",height:"38px"}} >
       {
        ready ? error_img ?<h3> Loading ....</h3> :<img id={`img-${index}`} src={url}></img> :<img style={{width:"38px",height:"38px"}} src="https://e7.pngegg.com/pngimages/10/205/png-clipart-computer-icons-error-information-error-angle-triangle-thumbnail.png"></img>
       } 
    </div>
  )
}
