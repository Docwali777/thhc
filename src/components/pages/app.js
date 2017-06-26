import React, { Component } from 'react';
import Menu from './menu'
import '../../../styles/main.css'
import Slideshow from './slideshow'
import healthyHeartLogo from '../../../images/healthy-heart-logo.png'
//"access_token": "C0Trt-fw7f3DlGBj-ZD3sg6wcpkAAI806K9AZ9P5-8EpuCllsMO_6fS3RSV_JL_4isQe4SyH-6N8ZhycXqK3_BTRYkffJr3b_1AAZya0tA-JYh3VaekkvjKEDgZRWXYx",

class App extends Component{
  render(){
    return(
      <div>
        <Menu />
        <div className='container'>

          <div className='row'></div>
<div className='col-md-6 col-lg-3'>
            <img className='healthyHeartLogo text-center' src={healthyHeartLogo} />
</div>
<div className='col-md-6 col-lg-9'>
      <Slideshow />
</div>
        </div>
      </div>
    )
  }
}
export default App
