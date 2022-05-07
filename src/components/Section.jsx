import React from "react";
import { Container } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleLeft , faAngleRight} from '@fortawesome/free-solid-svg-icons';


function Section() {
    return(
         <Container>
             <h1 className="section__title">
                 who should join the nerdyeye pipeline
             </h1>
             <p className="section__p">
                 Lorem ipsum dolor sit amet consectetur adipisicing elit in exercitationem eius debitis 
                 Est provident libero voluptatem         
             </p>
               
               <div className="section--flex">
                   <div className="ball-toggle">
                   <FontAwesomeIcon icon= {faAngleLeft} className="angle-left" />
                   </div>
                   <div className="box">
                       <div className="round"></div>
                       <h2 className="subject">
                           UI/UX Design
                       </h2>
                       <p className="box-p">
                           New 120 Jobs Posted
                       </p>
                   </div>


                   <div className="box">
                       <div className="round"></div>
                       <h2 className="subject">
                           React Developer
                       </h2>
                       <p className="box-p">
                           New 120 Jobs Posted
                       </p>
                   </div>


                   <div className="box">
                       <div className="round"></div>
                       <h2 className="subject">
                           Graphic Design
                       </h2>
                       <p className="box-p">
                           New 120 Jobs Posted
                       </p>
                   </div>

                   <div className="box">
                       <div className="round"></div>
                       <h2 className="subject">
                           Developer
                       </h2>
                       <p className="box-p">
                           New 120 Jobs Posted
                       </p>
                   </div>

                   <div className="ball-toggle">
                   <FontAwesomeIcon icon= {faAngleRight} className="angle-right" />
                   </div>
               </div>
         </Container>
    );
}


export default Section