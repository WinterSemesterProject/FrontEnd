import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { RxHamburgerMenu } from "react-icons/rx";
import './header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CiSearch } from "react-icons/ci";
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom';

function Header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar>
          <div onClick={handleShow}>
            <RxHamburgerMenu className='toggle_btn'/>
          </div>
          <Link to="/" >
            <div className='logo'>triple S</div>
          </Link>
          <div>
            <form className='search'>
              <input type='text'></input>
              <button><CiSearch fontSize="20px"/></button>
            </form>
          </div>
      </Navbar>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Component</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <ul className='sidebar_ul'>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/CPU">CPU</Link></li>
                <li><Link to="/RAM">RAM</Link></li>
                <li><Link to="/GC">GRAPHIC CARD</Link></li>
                <li><Link to="/SSD">SSD</Link></li>
                <li><Link to="/HDD">HDD</Link></li>
            </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </div>
  );
}

export default Header;