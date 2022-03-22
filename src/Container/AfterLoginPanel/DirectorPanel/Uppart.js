import React,{useEffect, useState} from 'react'
import './Uppart.css'
import axios from 'axios';
function Uppart() {
    const [data,setdata]=useState([]);
   useEffect(() => {
    axios
    .get("http://192.168.137.9:5000/organisation/stats")
    .then(function (response) {
      console.log(response);
      setdata(response.data);
    });
   }, [])
   
  return (
      <>
    <div className="header">
    <div className="main">
        <h1>Deadheads</h1>

        <div className="links">
            <a href="#">Dashboard</a>
            <a href="#">Departments</a>
            <a href="#">Help</a>
        </div>

    </div>
</div>

<div className="body">
    <div className="main">
        <div className="left">
            <div className="welcome">
                <div className="top">
                    <h3>Welcome Back</h3>
                    <p>Get the power to your organization <br/> to the next level</p>
                </div>
                <div className="bottom">   
                    <a href="#" className="blue">Open </a>
                    <a href="#" className="white">Setup Detail</a>
                </div>
            </div>
            <h3>Upload File</h3>
            <div className="upload">
                <h4>Drap and Drop PDF file here</h4>
                <a href="#">Upload Here</a>
                <h5>Maximum Size is 5Mb.</h5>
            </div>
        </div>
        <div className="right">
            <h3>Organization Stats</h3>
            <div className="datalists">
                <div className="data">
                    <h4>Total Queries</h4>
                    <h5>{data.total_queries}</h5>
                </div>
                <div className="data">
                    <h4>Resolved Queries</h4>
                    <h5>{data.solved_queries}</h5>
                </div>
                <div className="data">
                    <h4>Opened Queries</h4>
                    <h5>{data.unsolved_queries}</h5>
                </div>
                <div className="data">
                    <h4>Citizen Registered</h4>
                    <h5>{data.no_of_citizen}</h5>
                </div>
            </div>
        </div>
    </div>
</div>
</>
  )
}

export default Uppart