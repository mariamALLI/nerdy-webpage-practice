import React from "react";
import { Container } from "react-bootstrap";


function Industry() {
     return (
           <div className="inds--section">
              <h1 className="inds-title">
                  BROWSE BY <span className="inds-red">INDUSTRIES</span>
              </h1>
              <p className="indus--p">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit Expedita sed natus ducimus dignissimos <br /> rerum laborum magni
              </p>

              <Container>
                  <div className="inds__box">
                      <div className="top__cards">
                      <div className="inds_mini_box">
                          <div className="mini--text">
                              <h2 className="mini__title">
                                Logistics & <br /> Transportation
                              </h2>
                              <p className="mini__p">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore harum vitae odio ab nobis tenetur
                              </p>
                            </div>
                      </div>

                      <div className="inds_mini_box">
                           <div className="mini--text">
                                <h2 className="mini__title">
                                    Fintech
                                </h2>
                                <p className="mini__p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore harum vitae odio ab nobis tenetur
                                </p>
                            </div>    
                      </div>



                      <div className="inds_mini_box">
                           <div className="mini--text"> 
                                <h2 className="mini__title">
                                    E-Commerce
                                </h2>
                                <p className="mini__p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore harum vitae odio ab nobis tenetur
                                </p>
                            </div>    
                      </div>
                    </div>

                   <div className="bottom-cards">
                      <div className="inds_mini_box">
                            <div className="mini--text">
                                <h2 className="mini__title">
                                    Hospitality
                                </h2>
                                <p className="mini__p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore harum vitae odio ab nobis tenetur
                                </p>
                            </div>    
                      </div>


                      <div className="inds_mini_box">
                            <div className="mini--text">
                                <h2 className="mini__title">
                                    Media
                                </h2>
                                <p className="mini__p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore harum vitae odio ab nobis tenetur
                                </p>
                            </div>    
                      </div>



                      <div className="inds_mini_box">
                            <div className="mini--text">
                                <h2 className="mini__title">
                                    Healthcare
                                </h2>
                                <p className="mini__p">
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore harum vitae odio ab nobis tenetur
                                </p>
                            </div>    
                      </div>
                    </div>  

                  </div>
              </Container>
           </div>
     );
}


export default Industry;