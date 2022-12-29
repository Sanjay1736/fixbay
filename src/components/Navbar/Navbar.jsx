import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import { menuItems } from './Menuitems'
import "./Navbar.css";
const Navbar = () => {
  const [icon, setIcon] = useState(false);
 const handelClick = () => {
    icon = setIcon(!icon);
  }
  return (
    <nav className="navbarItems">
      <h1 className="navbar-logo">FixBay</h1>
      <div className="menu-icons" onClick={() => handelClick()}>
        <i className={icon ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
      <ul className={icon ? "nav-menu active" : "nav-menu"}>
        {menuItems.map((items, index) => {
          return (
            <li key={index}>
              <Link className={items.clName} to={items.url}>
                <i className={items.icon}></i>
                {items.title}
              </Link>
            </li>
          );
        })}
        <button>Signup</button>
      </ul>
    </nav>
  );
}

export default Navbar