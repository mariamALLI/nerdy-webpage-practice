import React from "react";
import { Container, Col } from "react-bootstrap";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLocationDot} from '@fortawesome/free-solid-svg-icons';


function Job() {
    return (
          <Container>
              <h1 className="job-title">JOB OFFERS</h1>
              <div className="job-col">
                 
                     <Col className="left">
                         <div className="left-col">
                             <div className="status1">
                                 <h1 className="number">500<span className="plus">+</span></h1>
                                 <p className="number-text">Job offers</p>
                             </div>

                              <div className="status2">
                                  <h1 className="number">100<span className="plus">+</span></h1>
                                  <p className="number-text">Startups</p>
                             </div>
                         </div>
                     </Col>
                     <Col className="right"></Col>
                 
              </div>


              <div className="cards">
                  <div className="top__cards">
                      <div className="mini__cards">
                            <div className="logo-D">
                                <div className="small-circle"></div>
                                <h3 className="card-text-bold">Design</h3>
                            </div>
                            <h2 className="card-title">
                                UI/UX Designer
                            </h2>
                            <div className="map-time">
                                <div className="location">
                                    <FontAwesomeIcon icon={faLocationDot} className="loc-logo" />
                                     <p className="card-L">Lagos</p>
                                </div>
                                   <p className="loc-p">Full time</p>
                            </div>

                              <div className="card-line"></div>

                             <div className="logo-sec">
                                 <div className="logo-flex">
                                     <p className="logo-p">3 days ago</p>
                                     <h3 className="logo-h">Logitech</h3>
                                 </div>

                                  <div className="round-circle"></div>
                             </div> 
                       </div>



                       <div className="mini__cards">
                            <div className="logo-D">
                                <div className="small-circle"></div>
                                <h3 className="card-text-bold">Design</h3>
                            </div>
                            <h2 className="card-title">
                                UI/UX Designer
                            </h2>
                            <div className="map-time">
                                <div className="location">
                                    <FontAwesomeIcon icon={faLocationDot} className="loc-logo" />
                                     <p className="card-L">Lagos</p>
                                </div>
                                   <p className="loc-p">Full time</p>
                            </div>

                              <div className="card-line"></div>

                             <div className="logo-sec">
                                 <div className="logo-flex">
                                     <p className="logo-p">3 days ago</p>
                                     <h3 className="logo-h">Logitech</h3>
                                 </div>

                                  <div className="round-circle"></div>
                             </div> 
                       </div>
                  </div>



                    <div className="bottom-cards">
                        <div className="mini__cards">
                                <div className="logo-D">
                                    <div className="small-circle"></div>
                                    <h3 className="card-text-bold">Design</h3>
                                </div>
                                <h2 className="card-title">
                                    UI/UX Designer
                                </h2>
                                <div className="map-time">
                                    <div className="location">
                                        <FontAwesomeIcon icon={faLocationDot} className="loc-logo" />
                                        <p className="card-L">Lagos</p>
                                    </div>
                                    <p className="loc-p">Full time</p>
                                </div>

                                <div className="card-line"></div>

                                <div className="logo-sec">
                                    <div className="logo-flex">
                                        <p className="logo-p">3 days ago</p>
                                        <h3 className="logo-h">Logitech</h3>
                                    </div>

                                    <div className="round-circle"></div>
                                </div> 
                        
                        </div>

                        <div className="mini__cards">
                            <div className="logo-D">
                                <div className="small-circle"></div>
                                <h3 className="card-text-bold">Design</h3>
                            </div>
                            <h2 className="card-title">
                                UI/UX Designer
                            </h2>
                            <div className="map-time">
                                <div className="location">
                                    <FontAwesomeIcon icon={faLocationDot} className="loc-logo" />
                                     <p className="card-L">Lagos</p>
                                </div>
                                   <p className="loc-p">Full time</p>
                            </div>

                              <div className="card-line"></div>

                             <div className="logo-sec">
                                 <div className="logo-flex">
                                     <p className="logo-p">3 days ago</p>
                                     <h3 className="logo-h">Logitech</h3>
                                 </div>

                                  <div className="round-circle"></div>
                             </div> 
                       </div>


                       <div className="mini__cards">
                            <div className="logo-D">
                                <div className="small-circle"></div>
                                <h3 className="card-text-bold">Design</h3>
                            </div>
                            <h2 className="card-title">
                                UI/UX Designer
                            </h2>
                            <div className="map-time">
                                <div className="location">
                                    <FontAwesomeIcon icon={faLocationDot} className="loc-logo" />
                                     <p className="card-L">Lagos</p>
                                </div>
                                   <p className="loc-p">Full time</p>
                            </div>

                              <div className="card-line"></div>

                             <div className="logo-sec">
                                 <div className="logo-flex">
                                     <p className="logo-p">3 days ago</p>
                                     <h3 className="logo-h">Logitech</h3>
                                 </div>

                                  <div className="round-circle"></div>
                             </div> 
                       </div>
                    </div>

              </div>
          </Container>
    );
}


export default Job;