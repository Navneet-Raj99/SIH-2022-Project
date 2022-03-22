import React, { useState,useEffect } from 'react'
import DirectorCard from './DirectorCard'
import man_sitting from '../../../Assets/LoginPageLogos/man_sitting.webp'
import axios from 'axios'
import './DirectorPanel2.css'
import Uppart from './Uppart'

function DirectorPanel2() {
    const[data,setdata]=useState([]);
    useEffect(() => {
        axios
        .get("http://192.168.137.9:5000/departments")
        .then(function (response) {
          console.log(response);
          setdata(response.data.data);
        });
    }, [])
    
  return (
    <div> <Uppart/>
    <h2 className='department_heading'>All Departments</h2>
        <div className='directorBigbox'>
            {/* <div className='director_department_addition'>

            </div> */}
           
{/* <DirectorCard title="mihir" image="man_sitting" />
<DirectorCard title="yashMu"/>
<DirectorCard title="yashAg"/>
<DirectorCard title="purvi"/>
<DirectorCard title="nishtha"/>
<DirectorCard title="babloo bisleri"/>
<DirectorCard/>
<DirectorCard/> */}

{data.map(element => {
    return(<DirectorCard title={element.name} tag={element.tagline} head={element.head_name} members={element.no_of_members}/>)
})}
        </div>
    </div>
  
  )
}

export default DirectorPanel2