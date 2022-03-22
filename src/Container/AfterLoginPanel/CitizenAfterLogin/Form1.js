import React,{useState,useEffect} from 'react'
import './Form1.css'
import axios from 'axios';
function Form1() {
  const [title, settitle] = useState();
  const [description, setdescription] = useState();
  const[departmentarray,setdepartmentarray]=useState([]);
  const [loggedin, setloggedin] = useState(false);
  const [secondloggedin, setsecondloggedin] = useState(false);
  useEffect(() => {
   calling();
  }, [])
  
  async function calling()
  {
    
    console.log("Submitcalling Function  Called");
    axios
    .get("http://192.168.137.9:5000/departments")
    .then(function (response) {
      // console.log(response.data);
      setdepartmentarray(response.data.data);
    });
    

  }
  async function submitform(){

    console.log("SubmitFOrm Function  Called");
    const rawResponse = await fetch("http://192.168.137.9:5000/citizen/submitQuery", {
      method: "POST",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        "Authorization": "Bearer " + localStorage.getItem("AUTH_TOKEN_CITIZEN"),
      },
      body: JSON.stringify({title: title, description: description,department_id:"623485214552j55khh5"})
    });
    const content = await rawResponse.json();
    const statusCode = rawResponse.status;
  }
  return (
    <div className="Form-container">
    <div className="question">
     Title OF Enquiry
    </div>
    <div className="field">
      {" "}
      <textarea
        required="required"
        name="message"
        id="text2"
        placeholder="Type your answer here"
        // cols="65"
        rows="3"
        onChange={(e)=>
        {
          settitle(e.target.value);
        }}
      ></textarea>
    </div>
    <div className="question">
      Description Of Enquiry
    </div>
    <div className="field">
      {" "}
      <textarea
        required="required"
        name="message"
        id="text3"
        placeholder="Type your answer here"
        // cols="65"
        rows="3"
        onChange={(e)=>
          {
            setdescription(e.target.value);
          }}
      ></textarea>
    </div>
    <div className="question">
    Select the Concern Department *</div>   
  <div className="field">
  <select id="s3">
        <option selected hidden value="">
          --Select any one--
        </option>
      {/* {console.log(departmentarray)} */}
      {/* {departmentarray.forEach(element => {
        // console.log(element.name)
        <option>element.name</option>
      })} */}
      <option name="department1" value="62372c5a7b08fefb1ee8e761"  onChange="this.form.submit">
        Department1
      </option>
      <option name="department1" value="62372c7c7b08fefb1ee8e762" onChange="this.form.submit">
        Department2
      </option>
              </select>
    </div>
    <div className="form-button" >
      <button id="amb-button" type="submit" onClick={submitform}>
        {" "}
        Submit{" "}
        
      </button>
      
    </div>
  </div>
  )
}

export default Form1