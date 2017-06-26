import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import profilePic from '../../../images/wali gauvin profile.jpeg';
import heart from '../../../images/heart-1616463__340.jpg'
import healthyHeartLogo from '../../../images/healthy-heart-logo.png'

export default class Slideshow extends Component{
  render(){
    return(
    <div className='slideShowImage' >
      <Carousel >
   <Carousel.Item>
     <img className='text-center' width={900} height={300} alt="900x300" src={profilePic}/>
     <Carousel.Caption className='caption'>
       <h3>Dr. Wali Gauvin</h3>
       <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img width={900} height={300} alt="900x300" src={heart}/>
     <Carousel.Caption>
       <h3>Second slide label</h3>
       <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
     </Carousel.Caption>
   </Carousel.Item>
   <Carousel.Item>
     <img width={900} height={300} alt="900x300" src={healthyHeartLogo}/>
     <Carousel.Caption>
       <h3>Third slide label</h3>
       <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>
    </div>
    )
  }
}
