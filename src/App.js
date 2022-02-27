
import './App.css';
import Signup from './Signup';

import Logininter from './Logininter';
import Explore from './Explore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Cart from './Cart';
import Hhistory from './Hhistory';
import Bookagai from './Bookagain';
import Pro from './Pro';
import Dons from './Dons';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Login from './login';
import Offers from './Offers';
import Payment from './Payment';
import Chang from './Chang';
import Fuji from './Fuji';
import Poland from './Poland';
import Dos from './Dos';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/signup">
            <Signup />
          </Route>
          <Route path="/logininter">
            <Logininter />
          </Route>
          <Route path="/explore">
            <Explore />
          </Route>
          <Route path="/cart">
            <Cart />
          </Route>
          <Route path="/history">
            <Hhistory />
          </Route>
          <Route path="/offers">
            <Offers />
          </Route>
          <Route path="/bookagain">
            <Bookagai />
          </Route>
          <Route path="/pro">
            <Pro />
          </Route>
          <Route path="/payment">
            <Payment />
          </Route>
          <Route path="/Chang">
            <Chang />
          </Route>
          <Route path="/fuji">
            <Fuji />
          </Route>
          <Route path="/poland">
            <Poland />
          </Route>
          <Route path="/dons">
            <Dons />
          </Route>
          <Route path="/dos">
            <Dos />
          </Route>
        </Switch>
      </Router>
     
    </div>
  );
}

export default App;
