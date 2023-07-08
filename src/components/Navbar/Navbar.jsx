import React, { useState } from 'react';
import { Divide as Hamburger } from 'hamburger-react'

import images from '../../constants';
import './Navbar.scss';

// const Burger = ({ open, setOpen }) => {
//   const links = [
//     {
//       name: 'Home',
//       href: '#home',
//     },
//     {
//       name: 'About',
//       href: '#about',
//     },
//     {
//       name: 'Experience',
//       href: '#experience',
//     },
//     {
//       name: 'Skills',
//       href: '#skills',
//     },
//     {
//       name: 'Contact',
//       href: '#contact',
//     },
//   ];

//   return (
//     <button
//       type="button"
//       className="hamburger"
//       onClick={() => setOpen(!open)}
//     >
//       {open ? <span>X</span> : <span>-</span>}
//       {open ? (
//         <ul>
//           {links.map(link => (
//             <li key={link.name}>
//               <a href={link.href}>{link.name}</a>
//             </li>
//           ))}
//         </ul>
//       ) : null}
//     </button>
//   );
// };


const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="app__navbar-links">
        {['home', 'about', 'experience', 'skills', 'contact'].map((item) => (
          <li className="app__flex p-text" key={`link-${item}`}>
            <div />
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>

        <Hamburger 
          toggle={() => setOpen(true)} 
          toggled={open}
          size={20}
          distance='md'  
          />
        {/* when the menu is open, show links */}
        {open && (
          <div>
            <Hamburger
            toggle={() => setOpen(false)} 
            toggled={open}
            size={20}
            distance='md'
            />
          </div>
        )}
      </div>


      {/* <div className="app__navbar-menu">
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['home', 'about', 'work', 'skills', 'contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div> */}



    </nav>
  )
}

export default Navbar