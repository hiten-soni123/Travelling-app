import NavBar from './Navbar';
import offers from './figma/offers.svg'
import {
    Navbar,
    Container,
    Nav,
    Offcanvas,
    Form,
    Card,
    Row,
    Col,
    
  } from 'react-bootstrap'
  
const Offers = () => {
    return (
      <div>
        <NavBar />
        <Row>
          <hr />
        </Row>
       
        <Row>
          <Col sm>
            <Card style={{ width: '100%', textAlign: 'left' }}>
              <Card.Body>
                <Row xs={2}>
                  <Col xs={3}>
                    <img
                      src={offers}
                      alt=''
                      srcset=''
                      style={{ width: '100%' }}
                    />
                  </Col>
                  <Col xs={6}>
                    <Card.Title>30% off</Card.Title>
                    <Card.Text style={{ color: 'rgba(0, 0, 0, 0.44)' }}>
                      till 30th march
                    </Card.Text>
                  </Col>
                  <Col xs={3}>
                    {' '}
                    <button
                      className='lightbutton'
                      style={{ width: '100%', height: '40%' }}
                    >
                      NEWUSR
                    </button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: '100%', textAlign: 'left' }}>
              <Card.Body>
                <Row xs={2}>
                  <Col xs={3}>
                    <img
                      src={offers}
                      alt=''
                      srcset=''
                      style={{ width: '100%' }}
                    />
                  </Col>
                  <Col xs={6}>
                    <Card.Title>15% off</Card.Title>
                    <Card.Text style={{ color: 'rgba(0, 0, 0, 0.44)' }}>
                    15Off
                    </Card.Text>
                  </Col>
                  <Col xs={3}>
                    {' '}
                    <button
                      className='lightbutton'
                      style={{ width: '100%', height: '40%' }}
                    >
                      15Off
                    </button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col sm>
            <Card style={{ width: '100%', textAlign: 'left' }}>
              <Card.Body>
                <Row xs={2}>
                  <Col xs={3}>
                    <img
                      src={offers}
                      alt=''
                      srcset=''
                      style={{ width: '100%' }}
                    />
                  </Col>
                  <Col xs={6}>
                    <Card.Title>30% off</Card.Title>
                    <Card.Text style={{ color: 'rgba(0, 0, 0, 0.44)' }}>
                      till 30th march
                    </Card.Text>
                  </Col>
                  <Col xs={3}>
                    {' '}
                    <button
                      className='lightbutton'
                      style={{ width: '100%', height: '40%' }}
                    >
                      ABCD
                    </button>
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
     
      </div>
    );
}
 
export default Offers;