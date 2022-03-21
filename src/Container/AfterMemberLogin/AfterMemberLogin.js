import React from 'react'
import Footer from '../../Components/Footer/Footer'
// import Navbar from '../../Components/Navbar/Navbar'
import './AfterMemberLogin.css'
import DepartmentCard from './DepartmentCard'
function AfterMemberLogin() {
  return (
      <>
      {/* <Navbar/> */}
       <br/> <br/> <br/> <br/> <br/>
    <div id="department_card_box">
       
        <DepartmentCard title="Department1" link="/department1signin" color="button_membersignin_green"/>
        <DepartmentCard title="Department2" link="/department2signin" color="button_membersignin_orange"/>
        <DepartmentCard title="Department3" link="/department3signin" color="button_membersignin_green"/>
        <DepartmentCard title="Department4" link="/department4signin" color="button_membersignin_orange"/>
        </div>
        <br/> <br/> <br/> <br/> <br/>
        <Footer/>
        </>
  )
}

export default AfterMemberLogin