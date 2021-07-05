import React, { useState } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import '../components/css/Navigation.css'
import { Link } from 'react-router-dom';


const Navigation = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const [collapsed, setCollapsed] = useState(true);

    const toggleNavbar = () => setCollapsed(!collapsed);
    return (
        <div className="header">
            <div className="nav-1">
                <div>
                    <h2 className="logo">Flone.</h2>
                </div>
                <Navbar color="light" light expand="md">
                    <NavbarToggler onClick={toggle} />
                    <Collapse isOpen={isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <Link to="/">Home Page</Link>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <Link to="/shop">Shop</Link>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <NavItem>
                            <Link to="/collection">Collection</Link>
                            </NavItem>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    <Link to="/about">About</Link>
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                <Link to="/blogs">Blogs</Link>

                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>

                            <NavItem>
                            <Link to="/collection">Collection</Link>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
                <div>
                    <i className="fa fa-search"></i>
                    <Link to="/login"><i className="fa fa-user-circle"></i></Link>
                    <i className="fa fa-random"></i>
                    <i className="fa fa-heart"></i>
                    <i className="fa fa-shopping-cart"></i>
                </div>
            </div>
            <div className="nav-moblie">
                <Navbar color="faded" light>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse isOpen={!collapsed} navbar>
                        <Nav navbar>
                            <NavItem>
                                <NavLink href="/components/">Components</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        </div>
    )
}

export default Navigation
