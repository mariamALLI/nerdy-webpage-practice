import React from "react";
import { Container } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCheck } from '@fortawesome/free-solid-svg-icons';



function Talent() {
    return (
        <Container className="talent">
            <>
                <div className="top-half-pipe"></div>
                <div className="bottom-half-pipe"></div>
            </>
           
            <div className="talent--flex">
                <div className="rectangle"></div>

                <div className="right--div">
                    <h1 className="talent--title">
                        WHY YOU SHOULD JOIN THE <br />
                        <span className="talent--red">NERDYEYE TALENT PIPELINE</span>
                    </h1>

                     <div className="rec--div">
                         <div className="rec---flex">
                                <div className="check--circle">
                                <FontAwesomeIcon icon={faCheck} className="check"/>
                                </div>
                                <p className="circle--p">Long-Term Placements</p>
                         </div>
                     </div>

                     <div className="rec--div">
                         <div className="rec---flex">
                                <div className="check--circle">
                                <FontAwesomeIcon icon={faCheck} className="check"/>
                                </div>
                                <p className="circle--p">Long-Term Placements</p>
                         </div>
                     </div>


                     <div className="rec--div">
                         <div className="rec---flex">
                                <div className="check--circle">
                                <FontAwesomeIcon icon={faCheck} className="check"/>
                                </div>
                                <p className="circle--p">Long-Term Placements</p>
                         </div>
                     </div>


                     <div className="rec--div">
                         <div className="rec---flex">
                                <div className="check--circle">
                                <FontAwesomeIcon icon={faCheck} className="check"/>
                                </div>
                                <p className="circle--p">Long-Term Placements</p>
                         </div>
                     </div>


                     <div className="rec--div">
                         <div className="rec---flex">
                                <div className="check--circle">
                                <FontAwesomeIcon icon={faCheck} className="check"/>
                                </div>
                                <p className="circle--p">Long-Term Placements</p>
                         </div>
                     </div>
                </div>

            </div>
        </Container>
    );
}


export default Talent;