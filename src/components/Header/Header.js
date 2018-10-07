import React from 'react';
import { NavbarBrand, Navbar} from 'reactstrap';

export default class Header extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">Todo App</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}