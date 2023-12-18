import React from 'react'
import './menu.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faUserPen, faCartArrowDown, faBars, faHouseUser } from '@fortawesome/free-solid-svg-icons';

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu "+(menuOpen && "active")}>
      <ul>
        <li onClick={()=>setMenuOpen(false)}>
          <FontAwesomeIcon icon={faHouseUser} size='2x' className='Ficons' />
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <FontAwesomeIcon icon={faCartArrowDown} size='2x'  className='Ficons'/>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
         <FontAwesomeIcon icon={faUserPen} size='2x' className='Ficons' />
        </li>
        {/* <li onClick={()=>setMenuOpen(false)}>
          <a href="#works">Works</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#testimonials">Certificates</a>
        </li>
        <li onClick={()=>setMenuOpen(false)}>
          <a href="#contact">Contact</a>
        </li> */}
      </ul>
    </div>
  );
}