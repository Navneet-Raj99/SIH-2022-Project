import React from 'react'
import Footer from '../../../Components/Footer/Footer'
import Navbar from '../../../Components/Navbar/Navbar'
import './CitizenAfterLogin.css'
import CitizenQueryCard from './CitizenQueryCard'
import Form1 from './Form1'
function AfterMemberLogin() {
  return (
      <>
      <Navbar/>
       <br/> <br/> <br/> <br/> <br/>
    <div id="citizen_department_card_box">
       
        <CitizenQueryCard title="Submit A Enquiry" link="" color="button_membersignin_green" action="submitenquiry"/>
        <CitizenQueryCard title="View All Enquiry" link="" color="button_membersignin_orange" action="viewenquiry"/>
      
        </div>
        {/* <Form1/> */}
        <br/> <br/> <br/> <br/> <br/>
        {/* <Footer/> */}
        </>
  )
}

export default AfterMemberLogin