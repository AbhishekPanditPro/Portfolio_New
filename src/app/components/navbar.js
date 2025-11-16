'use client'; 
import "./navbar.css";
import Image from "next/image";

import Link from 'next/link';

const sections = [{title:"home",
                    src: "/home.svg"}, 
                  {title:"projects",
                    src: "/projects.svg"},
                  {title:'resume',
                    src: "/resume.svg"
                  }
                ];

export default function Navbar() {
    const handleScroll = (id) => {
    const el = document.getElementById(id);
    console.log(el)
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="navContainer">
    <nav className="fly">
      <ul className="name" >
        {sections.map((sec) => (
          <li key={sec.title}>
            <button
              
                type="button"
                className="bar"
                onClick={() => handleScroll(sec.title)}
              >
                <Image
                      className="navimg"
                      src={sec.src}
                      width={4}
                      height={30}
                      alt={sec.title}
                ></Image>
                {sec.title.charAt(0).toUpperCase() + sec.title.slice(1)}
              </button>
          </li>
        ))}
      </ul>
    </nav>
    </div>
  );
}