import React,{useEffect,useState} from 'react'
import './CitizenQueryCard.css'
import man_sitting from '../../../Assets/LoginPageLogos/man_sitting.webp'
import { Link } from 'react-router-dom'
import Form1 from './Form1'


function CitizenQueryCard(props) {
    const [number,setnumber]=useState(0); 

  return (
      <>
    <div id="department_card1" className='department_card_classwork'>
       <div className='department_card_classwork_content_image'>
       <img src={man_sitting} width="90%" alt='hello Sir welcome here'/>
       </div>
       <div className='department_card_classwork_content_title'>
          {props.title}
          </div>
          <div className='department_card_classwork_content_button'>
          <Link to={props.link}>
         <button className={props.color} onClick={()=>
        {
            if(props.action=="submitenquiry")
            {
                setnumber(2);
            }
           else if(props.action=="viewenquiry")
            {
                setnumber(1);
            }
        }}>
              Submit A Enquiry
          </button>
          </Link>
        
     
          </div>
         
    
        
          
    </div>
   

 </>

 
  )
}

export default CitizenQueryCard;
