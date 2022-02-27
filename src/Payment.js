import css1 from './figma/1css.svg';
import css2 from './figma/2css.svg';
import css3 from './figma/3css.svg';


import { Row,Col,Form,Button, Container } from 'react-bootstrap';
const Payment = () => {
    return (
      <div style={{textAlign:"center"}}>
        
          <Row id="rectangle2">
            <Col>
              <img src={css1} style={{ textAlign: "left" }} />

              <Form.Group
                className="mb-3"
               
                style={{ paddingTop: "15px" }}
              >
                <Form.Control
                  style={{ borderRadius: "15px" }}
                  type="First name"
                  placeholder="First name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                
                style={{ paddingTop: "15px" }}
              >
                <Form.Control
                  style={{ borderRadius: "15px" }}
                  type="Last name"
                  placeholder="Last name"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="formBasicEmail"
                style={{ paddingTop: "15px" }}
              >
                <Form.Control
                  style={{ borderRadius: "15px" }}
                  type="Email"
                  placeholder="Email"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
                
                style={{ paddingTop: "15px" }}
              >
                <Form.Control
                  style={{ borderRadius: "15px" }}
                  type="Phone no"
                  placeholder="Phone no"
                />
              </Form.Group>
            </Col>
          </Row>
          <br />
          <Row id="rectangle2" style={{ borderRadius: "15px" }}>
            <Col>
              <img src={css2} style={{ textAlign: "left" }} />
              <Form.Group
                className="mb-3"
               
                style={{ paddingTop: "15px" }}
              >
                <Form.Control
                  style={{ borderRadius: "15px" }}
                  type="Street"
                  placeholder="Street"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
               
                style={{ paddingTop: "15px" }}
              >
                <Form.Control
                  style={{ borderRadius: "15px" }}
                  type="City"
                  placeholder="City"
                />
              </Form.Group>
              <Form.Group
                className="mb-3"
               
                style={{ paddingTop: "15px" }}
              >
                <Form.Control
                  style={{ borderRadius: "15px" }}
                  type="Zip code"
                  placeholder="Zip code"
                />
              </Form.Group>
              <br />
              <Form.Select style={{ borderRadius: "15px" }}>
                <optgroup label="Select country">
                  <option>India</option>
                  <option>Usa</option>
                  <option>Singapor</option>
                  <option>Malaysia</option>
                </optgroup>
              </Form.Select>
              <br />
              <Form.Select style={{ borderRadius: "15px" }}>
                <optgroup label="Select states">
                  <option>Usa</option>
                  <option>asfas</option>
                  <option>fasef</option>
                </optgroup>
              </Form.Select>
            </Col>
          </Row>
          <br />
          <Row id="rectangle2">
            <Col>
              {" "}
              <img src={css3} style={{ textAlign: "left" }} />
              <br />
              <br />
              <Form.Select style={{ borderRadius: "15px" }}>
                <optgroup label="Select card type">
                  <option>Master card</option>
                  <option>Visa</option>
                  <option>Rupay</option>
                </optgroup>
              </Form.Select>{" "}
              <br />
              <Form.Group
                className="mb-3"
               
                style={{ paddingTop: "15px" }}
              >
                <Form.Control
                  style={{ borderRadius: "15px" }}
                  type="Card no"
                  placeholder="Card no"
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Control
                  type="password"
                  placeholder="CVV"
                  style={{ borderRadius: "15px" }}
                />
              </Form.Group>
              <br />
              <Form.Group>
                <Form.Control
                  type="text"
                  placeholder="Exp Date"
                  style={{ borderRadius: "15px" }}
                />
              </Form.Group>
            </Col>
          </Row>
          <br />
          <button
            className="lightbutton2"
            style={{
              width: "90%",
              height: "100%",
              fontSize: "40px",
              marginBottom: "10px",
            }}
          >
            <Col>
              {" "}
              <h3 style={{ textAlign: "center" }}>PayNow</h3>
            </Col>
          </button>
        
      </div>
    );
}
 
export default Payment;