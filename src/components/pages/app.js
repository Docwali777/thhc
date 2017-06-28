import React, { Component } from 'react';
import '../../../styles/main.css'
import Slideshow from './slideshow'
import healthyHeartLogo from '../../../images/healthy-heart-logo.png'
//"access_token": "C0Trt-fw7f3DlGBj-ZD3sg6wcpkAAI806K9AZ9P5-8EpuCllsMO_6fS3RSV_JL_4isQe4SyH-6N8ZhycXqK3_BTRYkffJr3b_1AAZya0tA-JYh3VaekkvjKEDgZRWXYx",

class App extends Component{
  render(){
    return(
        <div className='container'>
        <div className='text-center'>
            <h3>Tele: 703-456-4706</h3>
        </div>
        <hr />
          <div className='row'>
<div className='col-md-6 col-lg-3 text-center'>
            <img className='healthyHeartLogo' src={healthyHeartLogo} />
</div>
<div className='col-md-6 col-lg-9'>
      <Slideshow />
</div>
        </div>
        <hr />

          <h1 className='text-center'>Pediatric Cardiology <br/>and <br/>Pediatric Nutrition and Fitness</h1>

      </div>
    )
  }
}
export default App
