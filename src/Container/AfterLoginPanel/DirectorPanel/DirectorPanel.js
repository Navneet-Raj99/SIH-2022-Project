import React,{useState} from "react";
import { Link } from "react-router-dom";
import Footer from "../../../Components/Footer/Footer";
import Navbar from "../../../Components/Navbar/Navbar";
import man_sitting from "../../../Assets/LoginPageLogos/man_sitting.webp";
import "./DirectorPanel.css";

function DirectorPanel() {
  const [addmodal, setaddmodal] = useState(false);
  const [popuptitle, setpopuptitle] = useState("");
  const [tagline, settagline] = useState("");
  const [head, sethead] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [popupdescription, setpopupdescription] = useState("");
  return (
    <>
    
    <Navbar/>
    <div>
      <button style={{
                width: "120px",
                color: "white",
                backgroundColor: "darkorange",
                marginLeft:"20px",
                borderRadius: "5px",
                padding:"2px",
                cursor:"pointer"
              }}>Notify All Department</button>
      <button style={{
                width: "150px",
                color: "white",
                padding:"2px",
                marginLeft:"20px",
                backgroundColor: "green",
                borderRadius: "5px",
                cursor:"pointer"
              }}>Notify All Department Heads</button>
              <button style={{
                width: "150px",
                color: "white",
                padding:"2px",
                marginLeft:"20px",
                backgroundColor: "darkorange",
                borderRadius: "5px",
                cursor:"pointer"
              }} onClick={()=>
              {
                localStorage.removeItem("AUTH_TOKEN_DIRECTOR");
              window.location.href = "/directorsignin";
              }}>SignOut</button>
    </div><br/><br/>
    <div className="directorpanelBigBox">
      <div id="department_card1" className="department_card_classwork">
        <div className="department_card_classwork_content_image">
          <img src={man_sitting} width="90%" alt="hello Sir welcome here" />
        </div>
        <div className="department_card_classwork_content_title">
          Department1
        </div>
        <div className="department_card_classwork_content_button">
          <Link to="google.com">
            <button className="button_membersignin_green">Sign In</button>
          </Link>
          {/* <FcDepartment/> */}
        </div>
      </div>
      <div id="department_card1" className="department_card_classwork">
        <div className="department_card_classwork_content_image">
          <img src={man_sitting} width="90%" alt="hello Sir welcome here" />
        </div>
        <div className="department_card_classwork_content_title">
          Department1
        </div>
        <div className="department_card_classwork_content_button">
          <Link to="google.com">
            <button className="button_membersignin_orange">Sign In</button>
          </Link>
          {/* <FcDepartment/> */}
        </div>
      </div>
      <div id="department_card1" className="department_card_classwork">
        <div className="department_card_classwork_content_image">
          <img src={man_sitting} width="90%" alt="hello Sir welcome here" />
        </div>
        <div className="department_card_classwork_content_title">
          Department2
        </div>

        <div className="department_card_classwork_content_button">
          <Link to="google.com">
            <button className="button_membersignin_green">Modify</button>
          </Link>
          {/* <FcDepartment/> */}
        </div>
      </div>
      <div id="department_card1" className='department_card_classwork'>
       <div className='director_card_classwork_add_department'>
       <h1 onClick={() => {
            console.log("hello");

            setaddmodal(true);
          }}
          style={{
            width: "15%",
            color: "white",
            backgroundColor: "Blue",
            marginLeft:"20px",
            textAlign:"center",
            borderRadius: "5px",
            cursor:"pointer"
          }}>+</h1>
          {addmodal == true ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            marginLeft: "5%",
            marginRight: "5%",
            paddingBottom: "20px",
          }}
        >
          <br />
          <input
            id="popuptitle"
            type="text"
            placeholder="Title Of Department"
            style={{ marginLeft: "2%" }}
            onChange={(e) => {
              setpopuptitle(e.target.value);
              console.log(popuptitle);
            }}
          />
  
          <br />
          <input
            type="text"
            placeholder="TagLine"
            style={{ marginLeft: "2%" }}
            onChange={(e) => {
              settagline(e.target.value);
              console.log(tagline);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Head Name"
            style={{ marginLeft: "2%" }}
            onChange={(e) => {
              sethead(e.target.value);
              console.log(head);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Email"
            style={{ marginLeft: "2%" }}
            onChange={(e) => {
              setemail(e.target.value);
              console.log(email);
            }}
          />
          <br />
          <input
            type="text"
            placeholder="Password"
            style={{ marginLeft: "2%" }}
            onChange={(e) => {
              setpassword(e.target.value);
              console.log(password);
            }}
          />
          <br/>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <button
              style={{
                width: "40%",
                color: "white",
                backgroundColor: "red",
                marginRight: "10px",
                height: "30px",
                borderRadius: "5px",
              }}
              onClick={() => {
                setpopupdescription("");
                setpopuptitle("");
                setaddmodal(false);
              }}
            >
              Discard
            </button>
            <button
              style={{
                width: "40%",
                color: "white",
                backgroundColor: "green",
                borderRadius: "5px",
              }}
              onClick
            >
              Save
            </button>
          </div>
        </div>
      ) : (
        ""
      )}
       </div>
       
          
    </div>
    
    </div>
    <h1>DashBoard</h1>
    <div>This Side Navneet Raj</div>
    </>
  );
}

export default DirectorPanel;
