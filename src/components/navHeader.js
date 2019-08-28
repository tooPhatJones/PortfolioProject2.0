import React, { Component } from "react";
import { Link } from "react-router-dom"

class NavHeader extends Component {
  constructor(props) {
    super(props);
  }

  bob = () => {
    this.props.test();
  }

  render() {
    return (
      <nav className={"navHeader"}>
        <ul>
          <Link to="/about"><li>About</li></Link>
          <Link to="/books"><li>Books</li></Link>
          <Link to="/contact"><li>Contact</li></Link>
          <a href="https://drive.google.com/open?id=1YP1scTyrv3Z-voqNcL6EVOPC5KF4vi2nyamLb9ldfQo" target="blank"><li>Resume</li></a>
          <Link to="/demo"><li>Demo</li></Link>
        </ul>
      </nav>
    );
  }
}

export default NavHeader;