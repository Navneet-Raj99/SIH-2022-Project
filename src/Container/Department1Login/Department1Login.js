import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./Department1Login.css";
import man_sitting from "../../Assets/LoginPageLogos/man_sitting.webp";
import Footer from "../../Components/Footer/Footer";


function Department1Login() {
  const [userid, setuserid] = useState();
  const [password, setpassword] = useState();
  const [loggedin, setloggedin] = useState(false);
  const [secondloggedin, setsecondloggedin] = useState(false);

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
  
  async function login(){
    console.log("Login Function called for department");
    const rawResponse = await fetch("http://192.168.200.192:5000/department/login", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email: userid, password: password})
    });

    const content = await rawResponse.json();
    const statusCode = rawResponse.status;


    if(statusCode == 401){
       alert("Wrong Credential");
    }else{
      var access_token = content["access_token"];
      localStorage.setItem("AUTH_TOKEN_DEPARTMENT", access_token);
      setsecondloggedin(true);
    }

  }
  const token=localStorage.getItem("AUTH_TOKEN_DEPARTMENT");

  let loggedinsecond=true;
  if(token===null)
  {
    loggedinsecond=false;
  }

  if(loggedinsecond===true)
  {
    return <Navigate to="/memberpanel"/>
  }
  else if(loggedin===true)
  {
    return <Navigate to="/"/>
    // educationMinister@gmail.com
    // admin123
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
                <h2 id="h2comp1">Login For Department</h2>{" "}
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
                <button id="loginbut" onClick={login}>
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

export default Department1Login;
