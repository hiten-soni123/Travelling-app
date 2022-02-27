import logo from './Group 75.png';
import {Link} from  'react-router-dom';
import { Row,Col,Card,Form,Button } from 'react-bootstrap';
import person from './profile.png';
import lock from './pass.png'   


const Signup = () => {
    return ( <div>
        <Row>
        <img style={{width:"20%"}} src={logo}/><hr style={{color:"DFDFDF"}}/>

        </Row>
        <br/>
        <br/>
        <br/>
        <Col>
        <center>
        <div style={{width:"70%",fontSize:"15px"}}>
        <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail" style={{paddingTop:"15px"}}>
    
    <Form.Control style={{borderRadius:"30px"}} type="Email" placeholder="Email" />
    
  </Form.Group><br/>

  
   <Form.Group>
    <Form.Control style={{borderRadius:"30px"}} type="password" placeholder="Password"  /><br/><br/>
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
      <Form.Control style={{borderRadius:"30px"}} type="password" placeholder="Confirm Password"  /><br/>
  
  

  </Form.Group>
 <Link to="/"> <Button style={{backgroundColor:"black",width:"40%", borderRadius:"30px",fontSize:"15px"}} type="submit">
    Sign UP
  </Button> </Link><br/><br/>
  
</Form>
</div>
</center>
        </Col>
      </div> 
        
     );
}
 
export default Signup;
{/* <div>
            <img src={logo} className='Logo'/> <hr className='vector'/>
            <div>
               <input type="text" placeholder="User ID" className="rectangle_for_userid"/><img src={person} className="Person" required/>
               <input type="password" placeholder="Password" className="rectangle_for_pass"/><img src={lock} className="Lock" required/>
               <input type="password" placeholder="Confirm Password" className="rectangle_for_Cpass"/><img src={lock} className="CLock" required/>
               <Link to='/'><button className="login_button"> SIGN UP</button></Link>
            </div>
        </div> */}