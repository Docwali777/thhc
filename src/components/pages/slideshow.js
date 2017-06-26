import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'
import profilePic from '../../../images/wali gauvin profile.jpeg';
import heart from '../../../images/heart-1616463__340.jpg'
import healthyHeartLogo from '../../../images/healthy-heart-logo.png'
import heartECG from '../../../images/african-2027619__340.png'

export default class Slideshow extends Component{
  render(){
    return(
    <div className='slideShowImage' >
      <Carousel >
   <Carousel.Item>
     <img className='text-center' width={900} height={300} alt="900x300" src={profilePic}/>
     <Carousel.Caption className='caption'>
       <h1>Dr. Wali Gauvin</h1>
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
     <img width={900} height={300} alt="900x300" src={heartECG}/>
     <Carousel.Caption>

     </Carousel.Caption>
   </Carousel.Item>
 </Carousel>
    </div>
    )
  }
}
