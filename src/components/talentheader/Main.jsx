import React from "react";
import "./header.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faCaretRight } from '@fortawesome/free-solid-svg-icons';


function Main() {
    return (
           <div className="main__section">
               <h1 className="section-title">HOW IT WORKS</h1>
           
          <div className="main__flex">
              <div className="col-one">
                <div className="circle">1</div>
                <h1 className="main__title">
                    Title Goes Here
                </h1>
                <p className="main__p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Est provident libero voluptatem dolorem aliquid quae 
                     dolores 
                    
                </p>
              </div>

              <div className="col-two">
   
              <FontAwesomeIcon icon={faCaretRight} className="arrow1" />
              <div className="line1"></div>
               <div className="circle">2</div>
                <h1 className="main__title">
                    Title Goes Here
                </h1>
                <p className="main__p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Est provident libero voluptatem dolorem aliquid quae 
                     dolores
                </p>
              </div>

              <div className="col-three">
                  <div className="line2"></div>
              <FontAwesomeIcon icon={faCaretRight} className="arrow2" />
              <div className="circle">3</div>
                <h1 className="main__title">
                    Title Goes Here
                </h1>
                <p className="main__p">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                     Est provident libero voluptatem dolorem aliquid quae 
                     dolores
                </p>

              </div>

          </div>
          </div>
    
    );
}


export default Main;