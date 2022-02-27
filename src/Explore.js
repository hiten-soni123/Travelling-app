import {Link} from  'react-router-dom';

import { Slide } from 'react-slideshow-image'
import 'react-slideshow-image/dist/styles.css'
import s1 from './figma/slide1.jpg'
import s2 from './figma/slide2.jpeg'
import s3 from './figma/slide3.jpg'
import { Row,Col,Button,FormControl, Container } from 'react-bootstrap';
import tajmahal2  from './figma/tajmahal2.svg';
import chang2  from './figma/chang mai2.svg';
import fuji2  from './figma/mount fuji2.svg';

const slideImages = [
  {
    url: s1,
    caption: 'Taking a boat tour ',
  },
  {
    url: s2,
    caption: 'Taking a boat tour',
  },
  {
    url: s3,
    caption: 'Taking a boat tour',
  },
]


const Explore = () => {
    return (
      <div className="slide-container">
        <center>
          <Slide>
            {slideImages.map((slideImage, index) => (
              <div className="each-slide" key={index}>
                <div
                  style={{
                    backgroundImage: `url(${slideImage.url})`,
                    height: "250px",
                    position:"relative",
                    borderRadius: "10px",
                    width: "100%",
                    boxShadow: "initial",
                    backgroundRepeat:"repeat-x",
                  }}
                >
                  <span
                    style={{
                      fontSize: "large",
                      position: "relative",
                      top: "50px",
                      left: "20px",
                    }}
                  >
                    {slideImage.caption}
                  </span>
                </div>
              </div>
            ))}
          </Slide><br/>
          <Row>
            <Col>
            <div className="wide-display">
   <div id="firstholder" style={{paddingTop:"5em",textAlign:"center"}}>
     <img src={ tajmahal2}  alt="City Lights Image"  className="img-responsive" id="electricone"/> 
       <div className="item1">
         <h2 className="slickfont1" >First Title</h2>
       </div> 
        </div>
     <div id="secondholder">
       <img src={fuji2} alt="City Lights Image"  className="img-responsive" id="electrictwo"/>           
      <div className="item1">
        <h2 className="slickfont1" >Second Title</h2> </div>
      </div>
     <div id="thirdholder">
       <img src={chang2 } alt="City Lights Image"  className="img-responsive" id="thirdelectric"/> 
        <div className="item1">
         <h2 className="slickfont1" > Third Title</h2>
        </div>
        

   </div>
</div>
            </Col>
          </Row>
        </center>
      </div>
    );
}
  
 
export default Explore;
{/* <img src={london} className="london" />
        <img src={logo} className="Logo" />
        <p className="letsgo">LET'S GO</p>
        <hr className="vector1" />
        <div className="circle">
          <img src={search} className="search" />
        </div> */}