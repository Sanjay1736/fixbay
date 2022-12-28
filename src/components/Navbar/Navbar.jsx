import React,{useState} from 'react'
import { menuItems } from './Menuitems'
import "./Navbar.css";
const Navbar = () => {
  const [icon, setIcon] = useState(false);
 const handelClick = () => {
    icon = setIcon(!icon);
  }
  return (
    <nav className={icon?"nav-menu.active":"nav-menu"}>
      <h1 className='navbar-logo'>FixBay</h1>
      <div className='menu-icons' onClick={()=>handelClick()}>
        <i className={icon?"fas fa-times":"fas fa-bars"}></i>
      
     </div> 
      <ul className='nav-menu'>
        {menuItems.map((items, index) => {
          return <li key={index}>
            <a className={items.clName}>
              <i className={items.icon}>
                
              </i>
              {items.title}
            </a>
          </li>;
          
        })}
        <button>Signup</button>
      </ul>
    </nav>
  )
}

export default Navbar