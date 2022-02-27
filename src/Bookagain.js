import { Row,Col,Button,FormControl, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import tajmahal2  from './figma/tajmahal2.svg';
import hotel  from './figma/hotel.svg';
import flight  from './figma/flight.svg';
import train  from './figma/train.svg';
import cabs from './figma/cabs.svg';
const Bookagain = () => {
    return (
      <div>
        <Container>
          <Row style={{paddingLeft:"20px"}} id="rectangle" >
            
            <Col>
              <img src={hotel} />
            </Col>
            <Col>
              <img src={flight} />
            </Col>
            <Col>
              <img src={train} />
            </Col>
            <Col>
              <img src={cabs} />
            </Col>
          </Row>
          <Row>
            <Col style={{ paddingTop: "50px", width: "80%" }}>
              <img src={tajmahal2} />
            </Col>
          </Row>
          <Row xs={2} md={4}>
            <Col style={{ paddingTop: "20px" }}>
              {" "}
              <h4>Place:-</h4>
            </Col>
            <Col style={{ paddingTop: "20px" }} xs={6} md={4}>
              <h5 style={{color:"gray"}}>Tajmahal,India</h5>
            </Col>
          </Row>
          <Row style={{ paddingTop: "20px" }} xs={2} md={4}>
            <Col>
              {" "}
              <h4>Date:-</h4>{" "}
            </Col>
            <Col xs={6} md={4}>
              <h5 style={{color:"gray"}}>Jan-18-Jan-25,2022</h5>
            </Col>
          </Row>
          <Row style={{ paddingTop: "20px" }} xs={2} md={4}>
            <Col>
              {" "}
              <h4>Description:-</h4>{" "}
            </Col>
            <Col xs={12} md={8}>
              <h5 style={{ textAlign: "justify",color:"gray" }}>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College{" "}
              </h5>
            </Col>
          </Row>
          <hr />
          <Row style={{ paddingTop: "20px" }}>
            <Col>
              <h4>From:-</h4>
            </Col>
            <FormControl
              type="search"
              placeholder="Place"
              className="me-2"
              aria-label="Search"
              style={{ borderRadius: "12px" }}
            />{" "}
            <a href="#"></a>
          </Row>
          <Row>
            <Col sm={2} style={{ paddingTop: "20px" }}>
              {" "}
              <h4>To:-</h4>
            </Col>
            <Col style={{ paddingTop: "20px" }} sm={2}>
              <h5 style={{color:"gray"}}>Tajmahal,India</h5>
            </Col>
          </Row>
          <Row>
            {" "}<center>
              <Link to="/payment">
            <Button
              className="lightbutton"
              style={{ width: "80%", height: "3em", textAlign: "center",color:"black",textDecoration:"none",background:"#D5E5E2"}}
            >
              <h3 style={{ textAlign: "center" }}>Book Again</h3>
            </Button> </Link></center>
          </Row>
        </Container>
      </div>
    );
}
 
export default Bookagain;
