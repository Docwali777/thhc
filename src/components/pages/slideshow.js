import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import profilePic from '../../../images/wali gauvin profile.jpeg';
import heart from '../../../images/heart-1616463__340.jpg'
import healthyHeartLogo from '../../../images/healthy-heart-logo.png'
import Hillary from '../../../images/Hillary_Hernandez.jpeg'

export default class Slideshow extends Component{
  render(){
    return(
    <div className='slideShowImage' >
      <Carousel >
   <Carousel.Item>
     <img className='text-center' width={900} height={300} alt="900x300" src={profilePic}/>
     <Carousel.Caption className='caption'>
       <h1>Dr. Wali Gauvin</h1>
       <hr />
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img width={900} height={300} alt="900x300" src={heart}/>
     <Carousel.Caption>
       <h3>Mending Hearts</h3>
       <p>All-Shapes-and-Sizes</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img className='Hillary' src={Hillary}/>
     <Carousel.Caption>
       <h1>Hillary Hernandez</h1>
       <hr/>
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>
    </div>
    )
  }
}
