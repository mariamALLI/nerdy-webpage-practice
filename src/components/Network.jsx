import React from "react";
import { Container } from "react-bootstrap";
import { useState } from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';



function Work() {
      const [inputs, setInputs] = useState({});

      const handleChange = (event) => {
          const role = event.target.role;
          const years = event.target.years;
          const workType = event.target.workType;
          const value = event.target.value;
          setInputs (values => ({...values, [role]: value, [years]: value, [workType]: value}))
      }

      const handleSubmit = (event) => {
          event.preventDefault();
          console.log(inputs)
      }

    return (
           
        <Container className="network--section">
               <div className="left--div">
                   <div className="thin--red--cirlce"></div>
                   <div className="full--grey--circle"></div>
               </div>


               <div className="right--div">
                   <h1 className="right--title">
                       JOIN THE NERDYEYE <span className="right--red">NETWORK</span>
                   </h1>

                   <p className="right--p">
                       Thank you for showing interest in the Nerdy Eye's Recruitment program. Please fill the form below and we will connect you with your ideal employers as soon as possible. 
                   </p>

                  <>
                   <form onSubmit={handleSubmit}>
                       <div className="form-group mt-3">  
                           <label>Role<FontAwesomeIcon icon={faAsterisk} className="asteric" /></label>
                           <input type="text" name="role" value={inputs.role || ""} onChange={handleChange} />
                        </div>

                        <div className="form-group mt-3">
                           <label>Years of Experience<FontAwesomeIcon icon={faAsterisk} className="asteric" /></label>
                           <input type="text" name="years" value={inputs.years || ""} onChange={handleChange} />
                        </div>

                        <div className="form-group mt-3">
                                <label>Work type<FontAwesomeIcon icon={faAsterisk} className="asteric" /></label>
                                <input type="text" name="workType" value={inputs.workType || ""} onChange={handleChange} />
                        </div>

                            <br />
        
                            {/* <input type="sumbit" className="btn-red" value="Submit" /> */}

                            <button type="submit" className="btn-red" value="Submit">submit</button>
                        

                   </form>
                   </>
               </div>
           </Container> 
    );
}




export default Work;