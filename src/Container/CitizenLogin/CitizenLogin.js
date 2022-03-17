import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./CitizenLogin.css";
import man_sitting from "../../Assets/LoginPageLogos/man_sitting.webp";
import Footer from "../../Components/Footer/Footer";


function CitizenLogin() {
  const [userid, setuserid] = useState();
  const [password, setpassword] = useState();
  const [loggedin, setloggedin] = useState(false);

  function checkCredentials(e) {
    console.log("hello");
    // if(userid=== "saeoperator" && password === "wearesaenitkkr"){
    //   localStorage.setItem("token","shivaji");
    //    e.preventDefault();
    //    setloggedin(true);
    //   //  console.log(userid);
    //   //  console.log(password);
    //   //  console.log(loggedin);

    // }
    // else{
    //   console.log(loggedin);
    //   window.alert("Wrong Password or Username");

    // }
  }

  // const token=localStorage.getItem("token");

  // let loggedinsecond=true;
  // if(token===null)
  // {
  //   loggedinsecond=false;
  // }

  // if(loggedinsecond===true)
  // {
  //   return <Navigate to="/admin/actions"/>
  // }
  // else if(loggedin===true)
  // {
  //   return <Navigate to="/admin/actions"/>
  // }
  {
    return (
      <>
        {/* <Navbar/> */}
        {/* <div id="department_card_box">
        <DepartmentCard/>
        <DepartmentCard/>
        <DepartmentCard/>
        <DepartmentCard/>
        </div> */}

        <div id="logincontainer">
          <div id="loginbox">
            <div id="loginlogo">
              {" "}
              <img id="login_man-sitting" src={man_sitting} alt="" />
            </div>
            <div id="loginmain">
              <div id="logincompo1">
                {" "}
                <h2 id="h2comp1">Login For CitiZens</h2>{" "}
              </div>
              <br />
              <div id="logincompo2">
                {" "}
                <input
                  type="text"
                  id="loginadmin"
                  class="con"
                  placeholder="Admin"
                  onChange={(e) => {
                    setuserid(e.target.value);
                  }}
                />
              </div>
              <div id="logincompo3">
                {" "}
                <input
                  type="password"
                  id="loginpass"
                  class="con"
                  placeholder="Password"
                  onChange={(e) => {
                    setpassword(e.target.value);
                  }}
                />
              </div>
              <br />
              <div id="logincompo4">
                <button id="loginbut" onClick={checkCredentials}>
                  LOGIN
                </button>
              </div>
           
            </div>
          </div>
        </div>
        <Footer />
      </>
    );
  }
}

export default CitizenLogin;
