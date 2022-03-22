import React, { useContext, useEffect } from "react";
import Footer from "../../../Components/Footer/Footer";
// import Navbar from "../../../Components/Navbar/Navbar";
import "./MemberAfterLogin.css";
// import CitizenQueryCard from "./CitizenQueryCard";
import Form1 from "../CitizenAfterLogin/Form1";
// import MemberContext from "../../../Context/MemberContext/MemberContext";
function AfterMemberLogin() {
  let series = {
    name: "Nishant",
    age: "19",
  };

  //   useEffect(() => {
  //    variables.changename(series);
  //   }, [])

  //   let variables =useContext(MemberContext);

  return (
    <>
      {/* <Navbar /> */}
      {/* {console.log(variables.name.name)} */}
      <br /> <br /> <br /> <br /> <br />
      <div id="member_department_card_box">
        <div id="submitEnquiry">
          {/* <CitizenQueryCard
            title="Submit A Enquiry"
            link=""
            color="button_membersignin_green"
            action="submitenquiry"
          /> */}
          <h1> Submit a New Enquiry </h1>
          <br />
          <br />
          <Form1 />
          <br />
          <div id="submitEnquiry">
            {/* <CitizenQueryCard
            title="Submit A Enquiry"
            link=""
            color="button_membersignin_green"
            action="submitenquiry"
          /> */}
            <h1> Submit a New Enquiry </h1>
            <br />
            <br />
            <Form1 />
            <br />
          </div>
        </div>
        <div id="viewallEnquiry">
          {/* <CitizenQueryCard
            title="Submit A Enquiry"
            link=""
            color="button_membersignin_green"
            action="submitenquiry"
          /> */}
          <h1> Previous Enquiries Response</h1>
          <br />
          <br />
          <ul>
            <li>Insomnia Christopher Nolan</li>
            <li>Memento Christopher Nolan and Jonathan Nolan</li>
            <li>
              The Dark Knight Trilogy Christopher Nolan And Jonathan Nolan
            </li>
            <li>Interstellar Christopher Nolan</li>
            <li>Tenet Christopher Nolan</li>
            <li>Navneet</li>
            <li>Navneet</li>
          </ul>
        </div>
        {/* <CitizenQueryCard title="Submit A Enquiry" link="" color="button_membersignin_green" action="submitenquiry"/> */}
        {/* <CitizenQueryCard title="View All Enquiry" link="" color="button_membersignin_orange" action="viewenquiry"/> */}
      </div>
      {/* <Form1/> */}
      <br /> <br /> <br /> <br /> <br />
      {/* <Footer/> */}
    </>
  );
}

export default AfterMemberLogin;
