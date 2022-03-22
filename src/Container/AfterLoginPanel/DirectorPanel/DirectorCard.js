import React from 'react'
import './DirectorCard.css'
import man_sitting from '../../../Assets/LoginPageLogos/man_sitting.webp'
import OIP from '../../../Assets/LoginPageLogos/OIP.jpg'
function DirectorCard(props) {
  return (
      
    <div className="directorcard_bigbox">
       <div className='directorcard_image'>
       <img src={OIP}  className='image_get'/>
       </div>
       <div className='directorcard_heading'>
       <h2> {props.title}</h2>
       </div>
       <div className='directorcard_description'>
       <h4> {props.head}</h4>
       <h5> {props.tag}</h5>
       
       </div>
       <div className='directorcard_button'>
       <div id="total_member">
          <button>ADD </button> 10
       </div>
       <div id="total_edit">  <button>EDIT</button> 20</div>
       <div id="total_member">  <button>ADD</button> {props.members} </div>
       </div>
    </div>
  )
}

export default DirectorCard