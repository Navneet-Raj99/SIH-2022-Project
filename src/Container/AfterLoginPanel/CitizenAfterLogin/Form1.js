import React from 'react'
import './Form1.css'
function Form1() {
  return (
    <div className="Form-container">
    <div className="question">
      What are your top 3 qualities related to being a Campus Ambassador?
      *
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
      ></textarea>
    </div>
    <div className="question">
      What two channels (eg. Social Media) do you think are the most effective for engaging
      with our target audience (18-22 Yrs) *{" "}
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
      ></textarea>
    </div>
    <div className="question">
     How did you find out about this ambassador program? *</div>   
  <div className="field">
  <select id="s3">
        <option selected hidden value="">
          --Select any one--
        </option>
        <option
          name="submit blog"
          value="Instagram"
        >
          Instagram
        </option>
        <option
          name="sponsership"
          value="Facebook"
        >
          Facebook
        </option>
        <option name="brand_ambassador" value="LinkedIn">
          LinkedIn
        </option>
        <option name="website" value="D2C">
          D2C
        </option>
        <option name="other" value="Word of Mouth">
          Word of Mouth
        </option>
        <option name="other" value="Website">
          Website
        </option>
        <option name="other" value="Other">
          Other
        </option>
      </select>
    </div>
    <div className="form-button" >
      <button id="amb-button" type="submit" >
        {" "}
        Submit{" "}
      </button>
      
    </div>
  </div>
  )
}

export default Form1