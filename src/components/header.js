import PropTypes from "prop-types"
import React from "react"
import { Container, Navbar, NavbarBrand, Button, Nav } from "react-bootstrap"
import Wordmark from "../images/einsteinpy-wordmark.png"
import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <Container>
      <Navbar id="main-menu" expand="lg" style={{ backgroundColor: "#FFFFFF" }}>
        <NavbarBrand>
          <img
            src={Wordmark}
            height="50"
            width="132"
            alt="Logo of EinsteinPy"
          />
        </NavbarBrand>
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Item className="link">
              <Nav.Link
                href="https://docs.einsteinpy.org/en/latest"
              >
                Documentation
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="link">
              <Nav.Link href="https://riot.im/app/#/room/#einsteinpy:matrix.org">
                Community
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="link">
              <Nav.Link href="https://gke.mybinder.org/v2/gh/einsteinpy/einsteinpy/master?filepath=index.ipynb">
                Tutorials
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="link">
              <Nav.Link href="https://blog.einsteinpy.org/">Blog</Nav.Link>
            </Nav.Item>
            <Nav.Item className="link">
              <Nav.Link href="https://github.com/einsteinpy/einsteinpy">
                GitHub
              </Nav.Link>
            </Nav.Item>
            <Nav.Item className="donate">
              <Button type="primary" href="https://www.paypal.me/shreyasbapat">
                {" "}
                Donate
              </Button>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
