import { Link } from "react-router-dom";
import cart from './figma/cart.svg'
import history from './figma/history.svg'
import feedback from './figma/Feedback.svg'
import logout from './figma/logout.svg'
import offers from './figma/offers.svg'
import search from './figma/search.png'
import dos from "./figma/dos.svg"
import done from "./figma/Done's.svg"
import profile from './figma/profile.svg'
import logo from './figma/Group 75.png'
import pro from  './figma/rocket.svg'
import SearchBar from './SearchBar';
import BookData from "./Data.json";



import {
  Navbar,
  Container,
  Nav,
  Offcanvas,
  Form,
  FormControl,
} from 'react-bootstrap'

const NavBar = (props) => {
 
    return (
<div >
        
<div>

      {' '}
      <Navbar bg='light' variant='light' expand={false}>
        <Container fluid>
          <Navbar.Brand href='#' style={{ color: '#fff' }}>
            <img src={logo} alt='' srcset='' />
          </Navbar.Brand>
          <Navbar.Toggle
            style={{ color: '#fff' }}
            aria-controls='navbarToggleExternalContent'
          />
          <Navbar.Offcanvas style={{ color: '#fff' }} placement='end'>
            <Offcanvas.Header closeButton>
              <Offcanvas.Title
                id='offcanvasNavbarLabel'
                style={{ color: 'black' }}
              >
                <Link to=''>
                  <img src={profile} alt='' srcset='' className='items' />
                </Link>
                Leonard
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className='justify-content-end flex-grow-1 pe-3'>
                <Nav.Link>
                  <Link
                    to='/cart'
                    style={{ textDecoration: 'none' }}
                  >
                    <img src={cart} alt='' srcset='' />
                    Cart
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to='/history'
                    style={{ textDecoration: 'none' }}
                  >
                    <img src={history} alt='' srcset='' />
                      History
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to='../childpages/feedback'
                    style={{ textDecoration: 'none' }}
                  >
                    <img src={feedback} alt='' srcset='' />
                    Feedback
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to='/offers'
                    style={{ textDecoration: 'none' }}
                  >
                    <img src={offers} alt='' srcset='' />
                    Offers
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/dos' style={{ textDecoration: 'none' }}>
                    <img src={dos} alt='' srcset='' />
                    Dos
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='/dons' style={{ textDecoration: 'none' }}>
                    <img src={done} alt='' srcset='' />
                    Dons
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link to='' style={{ textDecoration: 'none' }}>
                    <img src={logout} alt='' srcset='' />
                    Logout
                  </Link>
                </Nav.Link>
                <Nav.Link>
                  <Link
                    to='/pro'
                    style={{ textDecoration: 'none' }}
                  >
                    <img src={pro} alt='' srcset='' />
                    Pro
                  </Link>
                </Nav.Link>
              </Nav>
              <Form className='d-flex' style={{ paddingTop: '3em' }}>
              <SearchBar placeholder="Search..." data={BookData} />
                {/* <FormControl
                  type='search'
                  placeholder='Search'
                  className='me-2'
                  aria-label='Search'
                />
                
                 */}
              </Form>
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </div>

</div> );
}
 
export default NavBar;