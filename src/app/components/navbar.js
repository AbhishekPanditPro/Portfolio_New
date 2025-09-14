'use client'; 
import "./navbar.css";
import { useState } from "react";

import Link from 'next/link';

const sections = ["home", "projects",'resume'];

export default function Navbar() {
    const [active, setActive] = useState("home");
    const handleScroll = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });

  };

  return (
    <div className="navContainer">
    <nav className="fly">
      <ul className="name" >
        {sections.map((sec) => (
          
          
          <li key={sec}>
            <button
                type="button"
                className={`bar ${active === sec ? "active" : ""}`}
                onClick={() => handleScroll(sec)}
              >
                {sec.charAt(0).toUpperCase() + sec.slice(1)}
              </button>
          </li>
         
        ))}
      </ul>
    </nav>
    </div>
  );
}