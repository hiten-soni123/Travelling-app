
import logo from "./Group 75.png";

import {Link} from  'react-router-dom';


import { Row,Col,Form,Button } from 'react-bootstrap';
    
    
const Login = () => {
    return (
      <div>
        <Row>
          <img style={{ width: "20%" }} src={logo} />
          <hr />
        </Row>
        <br />
        <br />
        <br />
        <Col>
          <center>
            <div style={{ width: "70%", fontSize: "15px" }}>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicEmail"
                  style={{ paddingTop: "15px" }}
                >
                  <Form.Control
                    style={{ borderRadius: "15px" }}
                    type="User Id"
                    placeholder="User Id"
                  />
                </Form.Group>
                <br />

                <Form.Group>
                  <Form.Control
                    style={{ borderRadius: "15px" }}
                    type="password"
                    placeholder="Password"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <br />
                  <Row>
                    <Col>
                      <Form.Check
                        type="checkbox"
                        label="Remember Me"
                        style={{ textAlign: "left" }}
                      />
                    </Col>
                    <Col>Forget Password </Col>
                  </Row>
                </Form.Group>
                <Link to="/logininter">
                  <Button
                    style={{
                      backgroundColor: "black",
                      width: "40%",
                      borderRadius: "15px",
                      fontSize: "15px",
                    }}
                    type="submit"
                  >
                    LOGIN
                  </Button>
                </Link>
                <br />
                <br />
                <Link
                  to="/signup"
                  style={{
                    textDecoration: "none",
                    color: "black",
                    fontSize: "17px",
                  }}
                >
                  Sign Up
                </Link>
              </Form>
            </div>
          </center>
        </Col>
      </div>
    );
}
 
export default Login;

{/* <div className="login-page">
    <div className="form">
      <div className="login">
        <div className="login-header">
          <hr className='vector'/>
          
        </div>
      </div>
      <form className="login-form">
        <img src={logo} className='Logo'/>
        
        <input type="text" placeholder="User ID" className="rectangle_for_userid"/><img src={person} className="Person" required/>
        <input type="password" placeholder="Password" className="rectangle_for_pass"/><img src={lock} className="Lock" required
        />
       <Link to='/logininter'><button className="login_button">LOGIN</button></Link>
        <input type="checkbox" className="remember_me" ></input>
        <a className="Remember">Remember me</a>
        
        <p className="forget_pass">Forgot Password? </p>
        <a className="sign_in" ><Link to='/signup'>Sign Up Now</Link></a>
          
      </form>
    </div>
  </div> */}
