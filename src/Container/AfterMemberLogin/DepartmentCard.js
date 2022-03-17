import React from 'react'
import './DepartmentCard.css'
// import {FcDepartment} from 'react-icons'
import man_sitting from '../../Assets/LoginPageLogos/man_sitting.webp'
import { Link } from 'react-router-dom'
function DepartmentCard(props) {
  return (

      
    <div id="department_card1" className='department_card_classwork'>
       <div className='department_card_classwork_content_image'>
       <img src={man_sitting} width="90%" alt='hello Sir welcome here'/>
       </div>
       <div className='department_card_classwork_content_title'>
          {props.title}
          </div>
          <div className='department_card_classwork_content_button'>
          <Link to={props.link}>
         <button className={props.color}>
              Sign In
          </button>
          </Link>
          {/* <FcDepartment/> */}
          </div>
    </div>
   
 
  )
}

export default DepartmentCard