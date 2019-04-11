import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import './IssNavBar.css'
import Footer_header from "./Footer(header)";
import './Footer.css'


export default class IssNavBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <img src="https://trello-attachments.s3.amazonaws.com/5ca317fe74fb540c9a1cb88b/5ca3812724de1a74acaa7030/a70647b2759f978c83fe1dcfb941f303/LOGO_ISA.png" className="IsaLogo" alt="IsaLogo"/>
                    <h1><NavbarBrand  href="/">SPOT the ISS </NavbarBrand></h1>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem className="footerHeader">
                                <Footer_header />
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                            
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
