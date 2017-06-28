import React, { Component } from 'react';
import mission_kids from '../../../images/mission_kids.png'

class About extends Component{
  render(){
    return(
        <div className='container'>
          <div className='row'>
            <div className='text-center'>
              <img src={mission_kids} />
              <hr />
            </div>
            <p>
              The Healthy Heart Center provides expert clinical care in managing all forms of congenital or acquired heart disease, from diagnosis through treatment. We are also determined to provide a continuum of care, training and guidance for overweight and obese children and their families.

Our programs of targeted nutrition education, fitness activities and emotional support are always guided by what is best for our child patients and their families. The Center’s commitment to working holistically with families provides the critical support parents and children need to be healthy.
            </p>
</div>
      </div>
    )
  }
}
export default About
