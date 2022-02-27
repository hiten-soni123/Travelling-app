import NavBar from './Navbar'
import { Card } from 'react-bootstrap'

const Dons = () => {
  return (
    <div>
      <NavBar />
      <h1 style={{textAlign:"center"}}>Don's</h1>
      <center>
        <Card style={{ width: "60%", padding: "2em", textAlign: "left" }}>
          <ol>
            <li>
              {" "}
              Don't carry and flash large sums of cash, nor exchange money at
              dubious-looking places or with individuals on the street.
            </li>{" "}
            <li>
              {" "}
              Don’t look like a tourist by dressing like one, appearing lost or
              consulting a map in public.
            </li>{" "}
            <li>
              {" "}
              You might not think twice about snapping a picture, but not
              everyone shares your view. If you’re taking pictures of people in
              other countries, always ask for permission first, even if you’re
              in a public place. It will avoid any hassle and is a great way to
              strike up a conversation (or a hand-gestured interaction) with
              local people, too.
            </li>{" "}
            <li> Don’t carry a backpack that looks like luggage.</li>{" "}
            <li>
              {" "}
              Don't visit dangerous locations, or walk in unfamiliar, isolated
              or dimly lit areas, especially at night.
            </li>{" "}
            <li>
              {" "}
              Don't leave valuable items in public view; that includes your
              passport as much as your iPhone.
            </li>{" "}
            <li>
              {" "}
              Don't drive an obvious rental car, the more nondescript the
              better; keep maps and travel brochures out of sight in the glove
              compartment.
            </li>{" "}
            <li>
              {" "}
              Don't park anywhere but a well lit place, don't leave valuables in
              sight (lock them in the trunk), and don’t pick-up hitchhikers.
            </li>{" "}
            <li>
              {" "}
              Don’t keep your vehicle and house or hotel keys on the same key
              ring.
            </li>{" "}
            <li>
              There’s just no excuse these days. Not being at least minimally
              aware of the most important cultural norms and rules in the
              country you’re visiting is not just ignorant, it’s also dangerous,
              as breaking these rules could potentially land you in trouble with
              the authorities or locals.
            </li>
          </ol>
        </Card>
      </center>
    </div>
  );
}

export default Dons