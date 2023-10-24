import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const FooterComponent = () => {
  return (
    <div className="footer pt-3">
      <Container>
        <Row className="pb-5">
          <Col className="text-center">
            <div className="social mt-3">
              <a href="https://instagram.com/hasbirizqulloh?igshid=NTc4MTIwNjQ2YQ==">
                <i className="fa-brands fa-instagram"></i>
              </a>
              <a href="https://twitter.com/hasbirizqulloh">
                <i className="fa-brands fa-twitter"></i>
              </a>
              <a href="https://www.linkedin.com/in/hasbi-rizqulloh-705342218/">
                <i className="fa-brands fa-linkedin"></i>
              </a>
              <a href="https://www.youtube.com/channel/UCfKNXz-wPO-GIJrm3_Oucxg">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </div>
          </Col>
        </Row>
        <Row className="d-flex justify-content-between">
          <Col lg="3" className="d-flex flex-column col-lg-2 col mt-lg-2 mt-5">
            <Link to="contact">Contact</Link>
            <Link to={'http://mohasbi.byethost31.com/?i=2'}>About Me</Link>
            <Link to="testimonial">Terms & Condition</Link>
          </Col>
          <Col className="d-flex flex-column col-lg-2 col mt-lg-2 mt-5">
            <Link to="">Career</Link>
            <Link to="kelas">Change country</Link>
            <Link to="testimonial">FAQ</Link>
          </Col>
        </Row>
        <Row>
          <Col>
            <p className="text-center px-md-0 px-3 ">
              &copy; Copyright {new Date().getFullYear()} by <span className="fw-bold">mohasbi</span>, All Right Reserved
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default FooterComponent;
