import logo from './Group 75.png';
import {Link} from  'react-router-dom';
import girl from './girl.png';
import { Row,Col,Card,Form,Button } from 'react-bootstrap';
import NavBar from './Navbar';

const Logininter = () => {
    return (
      <div
        style={{
        
        backgroundImage: `url(${girl})`,
         backgroundPosition:"center", 
         width:"100%",
         backgroundRepeat:"no-repeat",
         backgroundSize:"cover",
         height:"100%",
         
        }}
      >
                <NavBar />

        <Row>
        
          <Form.Label
            style={{
              color: "#F81D86",
              textAlign: "left",
              margin: "5px",
              fontSize: "15px",
            }}
          >
            Lets go
          </Form.Label>
          <hr />
        </Row>
        <Col>
          <center>
            <Row>
              <Form>
                <br />
                <Form.Label style={{ color: "#0093B4" }}>
                  Hello, Leonard! <br />
                </Form.Label>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> 
                
        
                <Link to="/explore">
                  {" "}
                  <Button
                    style={{
                      backgroundColor: "black",
                      textAlign: "center",
                      borderRadius: "5px",
                      fontSize: "15px",
                      width: "80%",
                      height: "74px",
                    }}
                    type="submit"
                  >
                    EXPLORE
                  </Button>
                </Link>
              </Form><br/>
            </Row>
          </center>
        </Col>
      </div>
    );
}
 
export default Logininter;

{/* <img src={girl} className="girl"/>
            <img src={logo} className='Logo'/>
            <p className='letsgo'>LET'S GO</p><hr className='vector1'/>
            <p className='hellow'>Hello,</p>
            <p className='leonard'>Leonard!</p>
           <Link to="/explore"><button className='explore'>EXPLORE</button></Link> */}