import { Row,Col,Card,Form,Button,FloatingLabel,FormControl } from 'react-bootstrap';
import tajmahal  from './figma/tajmahal.svg';
import changmai from './figma/chang mai.svg';
import mountfuji from './figma/mount fuji.svg';
import poland from './figma/poland.svg';
import search from './figma/search.png'
import NavBar from './Navbar';
import {Link} from  'react-router-dom';
const Hhistory = () => {
    return ( 
        <div>
            <NavBar />
        <Row>
          <hr />
        </Row>
        <Col>
          <center>
            <Form>
              <Form.Label style={{ fontFamily: "Oxygen",fontWeight:"bold" }}>
                <Row>
                  <Col style={{ textAlign: "center", fontSize: "150%" }}>
                  Booking History
                  </Col></Row><br/>
                
               
                
              </Form.Label>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <br />
                <Row>
                  <Col>
                    <img src={tajmahal} style={{ alignItems: "center" }} />
                  </Col>
                  <Col>
                    <Form.Label style={{ textAlign: "left" }}>
                      Tajmahal,India
                    </Form.Label>
                    <br />
                    
                    <Link to="/bookagain"><Button
                      style={{
                        textDecoration: "none",
                        borderRadius: "10px",
                        backgroundColor: "#D5E5E2",
                        color: "black",
                        width: "90px",
                      }}
                    >
                      History
                    </Button>{" "}</Link>
                    <Button
                      style={{
                        textDecoration: "none",
                        borderRadius: "10px",
                        backgroundColor: "black",
                        color: "white",
                        width: "90px",
                      }}
                    >
                      Cancle
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
              <hr />
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <br />
                <Row>
                  <Col>
                    <img src={changmai} style={{ alignItems: "center" }} />
                  </Col>
                  <Col>
                    <Form.Label style={{ textAlign: "left" }}>
                      Chang mai,thailand
                    </Form.Label>
                    <br />
                    <Link to="/chang"><Button
                      style={{
                        textDecoration: "none",
                        borderRadius: "10px",
                        backgroundColor: "#D5E5E2",
                        color: "black",
                        width: "90px",
                      }}
                    >
                      History
                    </Button>{" "}</Link>
                    <Button
                      style={{
                        textDecoration: "none",
                        borderRadius: "10px",
                        backgroundColor: "black",
                        color: "white",
                        width: "90px",
                      }}
                    >
                      Cancle
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
              <hr />
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <br />
                <Row>
                  <Col>
                    <img src={mountfuji} style={{ alignItems: "center" }} />
                  </Col>
                  <Col>
                    <Form.Label style={{ textAlign: "left" }}>
                     Mount fuji, japan
                    </Form.Label>
                    <br />
                  <Link to="/fuji">  <Button
                      style={{
                        textDecoration: "none",
                        borderRadius: "10px",
                        backgroundColor: "#D5E5E2",
                        color: "black",
                        width: "90px",
                      }}
                    >
                      History
                    </Button>{" "}</Link>
                    <Button
                      style={{
                        textDecoration: "none",
                        borderRadius: "10px",
                        backgroundColor: "black",
                        color: "white",
                        width: "90px",
                      }}
                    >
                      Cancle
                    </Button>
                  </Col>
                </Row><hr/>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <br />
                <Row>
                  <Col>
                    <img src={poland} style={{ alignItems: "center" }} />
                  </Col>
                  <Col>
                    <Form.Label style={{ textAlign: "left" }}>
                     City of Poland

                    </Form.Label>
                    <br />
                   <Link to="/poland"> <Button
                      style={{
                        textDecoration: "none",
                        borderRadius: "10px",
                        backgroundColor: "#D5E5E2",
                        color: "black",
                        width: "90px",
                      }}
                    >
                      History
                    </Button>{" "}</Link>
                    <Button
                      style={{
                        textDecoration: "none",
                        borderRadius: "10px",
                        backgroundColor: "black",
                        color: "white",
                        width: "90px",
                      }}
                    >
                     Cancle
                    </Button>
                  </Col>
                </Row>
              </Form.Group>
            </Form>
          </center>
        </Col>
        </div>
     );
}
 
export default Hhistory;