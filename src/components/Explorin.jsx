import React from 'react'
import './explorin.css'
import RenderImage from './RenderImage'
export default function Explorin({name,count,images}) {
  console.log(images)
  let top_images = [images[0],images[1]]
  let bottom_images =  [images[2],images[3]]
  return (
    <div className='main'>
      <div className='image-container'>
        <div className='top-images'>
          {
            top_images.map((data ,index)=>
              <RenderImage  index={index} url={data.url} ready={data.ready} error={data.error}/>)
          }   
        </div>
        <div className='bottom_images'>
        {
            bottom_images.map((data,index)=>
              <RenderImage  index={index+2} url={data.url} ready={data.ready} error={data.error}/>)
          }   
        </div>
      </div>
      <div className='middle-section'>
      <h1 >{name}</h1> 
      <h3>{count}+ Offline Centers</h3>
      </div>
     <div className='main-image'>
        <RenderImage error={true}/>
     </div>
    </div>
  )
}
