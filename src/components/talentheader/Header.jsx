import React from "react";
import {Container, Row, Col} from "react-bootstrap";
import './header.css'
import img from './../../images/woman.jpg';

function Header() {
    return (
   <Container className="header__wrapper">
        <Row className="header-section">
            <Col>
            <div className="header-text">
                <h1 className="header-bold">
                    get matched & let your job find you
                </h1>
                <p className="header-soft">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Voluptatibus ad atque voluptates suscipit eaque ipsum maxime, 
                aliquid nostrum deleniti inventore adipisci ea esse, 
                sed ex itaque fugit porro perferendis! Molestias!
                </p>

                <button variant="danger" className="btn1">Join Talents Pipeline</button>
            </div>

             <div className="header__number">
               <Col>
                <h1 className="number">120<span className="plus">+</span></h1>
                <p className="number-text">Recruiter</p>
               </Col> 

                <Col>
                <h1 className="number">200<span className="plus">+</span></h1>
                <p className="number-text">Talents</p>
                </Col>      

             </div>

            
            </Col>
            
            <Col>
            <div>
                <div className="rings">
                    <div className="right--top--ring"></div>
                    <div className="left--bottom--ring"></div>
                </div>
            
              <img className="image__box" src={img} alt="grey wall"  />  

            </div>
            </Col>
        </Row>
   </Container>
    );
}

export default Header;