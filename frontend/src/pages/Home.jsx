import React from "react";
import { Row, Col, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Lottie from "lottie-react"
import Home_page_pic from "../assests/Home_Page_lottie.json"
import "./Home.css"

const Home = () => {
  return (
    <Row className="row">
      <Col
        md={6}
        className="d-flex flex-direction-column align-items-center justify-content-center"
      >
        <div>
          <h1>Talk to your friends online</h1>
          <p>Chat App lets you connect with the world</p>
          <LinkContainer to="/chat">
            <Button variant="primary">
              Get started <i className="fas fa-comments home-message-icon"></i>
            </Button>
          </LinkContainer>
        </div>
      </Col>
      <Col md={6} className="home__bg">
      <Lottie  style={{height:"79vh"}}  animationData={Home_page_pic}/>
      </Col>
    </Row>
  );
};

export default Home;
