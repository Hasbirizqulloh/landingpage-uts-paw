import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import Gambar from '../assets/img/gambars.png';
import Icon from '../assets/img/keyboard-fill.svg';
import Icons from '../assets/img/send-fill.svg';
import keybo from '../assets/img/ba5f077ba83546c040d079bc0f7165c3.jpg';
import { useNavigate } from 'react-router-dom';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <div className="homepage">
      <header className="w-100 min-vh-100 d-flex align-items-center pt-lg-5 ">
        <Container>
          <Row className="header-box d-flex align-items-center">
            <Col lg="6">
              <h1 className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">
                Bring <span>Technology is</span> <br /> in your hand
              </h1>
              <p className="mb-4 animate__animated animate__fadeInUp animate__delay-1s">This technology will bring new things and experience to your bussines and company</p>
              <button className="btn btn-danger btn-lg w-50 rounded-1 me-2 mb-ss-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s" onClick={() => navigate('/contact')}>
                Buy
              </button>
              <button
                className="btn btn-outline-danger btn-lg rounded-1 me-2 mb-ss-0 mb-2 animate__animated animate__fadeInUp animate__delay-1s"
                onClick={() => {
                  window.location.href = 'https://shopee.co.id/officialstoremedia?categoryId=100001&entryPoint=ShopByPDP&itemId=23219512194&upstream=search';
                }}
              >
                See all products
              </button>
            </Col>
            <Col lg="6" className="pt-lg-0 pt-5">
              <img src={Gambar} alt="hero-img" className="animate__animated animate__fadeInUp" />
            </Col>
          </Row>
        </Container>
      </header>
      <div className="kelas w-100 min-vh-100">
        <Container>
          <Row>
            <Col className="text-center">
              <img src={Icon} alt="" />
              <h1>Easy to implement </h1>
              <p>Easy to implement in your company with powerful platform</p>
            </Col>
            <Col className="text-center">
              <img src={Icons} alt="" />
              <h1>Optimize System </h1>
              <p>More than 100 company using this products</p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="demo">
        <Container>
          <Row>
            <Col className="text-center">
              <img src={keybo} alt="" />
            </Col>
            <Col className="box">
              <h1 className="fw-bold">
                Now, Set up and <br /> grow your company
              </h1>
              <p className="pe-5">We offer many products that optimize your company, setup now and grow up your business</p>
              <button
                className="btn btn-danger btn-lg w-50 rounded-1 me-2 mb-ss-0 mb-2"
                onClick={() => {
                  window.location.href = 'https://react.dev';
                }}
              >
                Demo
              </button>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="formulir py-5">
        <Container>
          <Form>
            <Row className="mb-3">
              <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="Your name" />
              </Form.Group>
              <Form.Group as={Col} controlId="formGridPassword" className="email">
                <Form.Label>Email</Form.Label>
                <Form.Control type="password" placeholder="Your email" />
              </Form.Group>
            </Row>
            <Row className="mt-5">
              <Form.Label>Role</Form.Label>
              <Form.Select>
                <option>Designer</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </Form.Select>
            </Row>
          </Form>
        </Container>
      </div>
      <div className="teksbox">
        <Container>
          <Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={5} placeholder="Send your message" />
            </Form.Group>
          </Row>
          <Row>
            <Col>
              <p className="title">I chose to send information about:</p>
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Marketing" />
              </Form.Group>
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="News & Updates" />
              </Form.Group>
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="Product updates" />
              </Form.Group>
              <Form.Group className="mb-3" id="formGridCheckbox">
                <Form.Check type="checkbox" label="None" />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col>
              <button className="btn btn-danger rounded-1 me-2 mb-ss-0 mb-2">Submit</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Homepage;
