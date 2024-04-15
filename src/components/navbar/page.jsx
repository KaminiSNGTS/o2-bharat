"use client"
import logo from "../../../public/assets/images/nav-logo.png";
import heart from "../../../public/assets/images/hear-icon.png";
import Button from "../button/page";
import "./nav.css";
import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () =>{
  const [scrollPosition, setScrollPosition] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
    const links = [
        {
          title: 'Home',
          path: '/home',
        },
        {
          title: 'About O2Bharat',
          path: '/about',
        },
        {
          title: 'Updates & Events',
          path: '/update-Events',
        },
        {
          title: 'Blogs',
          path: '/blogs',
        },
        {
          title: 'Contact Us',
          path: '/contact',      
        },
       
      ];

    return(
        <main className={`nav-container flex ${scrollPosition > 0 ? 'scrolled' : ''}`}>
          <div className="logo-section">
            <img src={logo.src} />
          </div>
          <ul className="links-container flex">
            {links.map((link, index)=>{
                return(
                    
                        <li key={index} className="list-li">
                         <Link href={link.path}>
              {link.title}
            </Link>
                          </li>
                   
                )
            })}
          </ul>
          <div className="nav-btn-container flex">
            <button className="donate-btn flex"><span><img src={heart.src}/></span><span>Donate Now</span></button>
            <hr className="hr-line"/>
            <h4 className="login-text">Login</h4>
            <Button title="Get Started"/>
          </div>
        </main>
    )
}
export default Navbar;