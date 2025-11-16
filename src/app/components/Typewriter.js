import React, { useState, useEffect } from "react";
import "./typewrite.css"
function Typewriter({ texts, period = 2000, href = "" }) {
  const [index, setIndex] = useState(0);      // which phrase we’re on
  const [subIndex, setSubIndex] = useState(0); // which character
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;

    const fullText = texts[index];

    // base typing speed
    let delta = 200 - Math.random() * 100;
    if (isDeleting) delta /= 2;

    // pause when full word is typed
    if (!isDeleting && subIndex === fullText.length) {
      delta = period;
    }

    // pause at end of deletion
    if (isDeleting && subIndex === 0) {
      delta = 500;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && subIndex < fullText.length) {
        // type forward
        setSubIndex((prev) => prev + 1);
      } else if (isDeleting && subIndex > 0) {
        // delete backward
        setSubIndex((prev) => prev - 1);
      } else if (!isDeleting && subIndex === fullText.length) {
        // start deleting
        setIsDeleting(true);
      } else if (isDeleting && subIndex === 0) {
        // move to next word
        setIsDeleting(false);
        setIndex((prev) => (prev + 1) % texts.length);
      }
    }, delta);

    return () => clearTimeout(timer);
  }, [texts, index, subIndex, isDeleting, period]);

  const currentText = texts[index].substring(0, subIndex);

  return (
    <div
      
      className="typewrite"
      style={{color:'black' }} // no underline
    >
      <span className="wrap"> {currentText || "\u00A0"}</span>
    </div>
  );
}

export default Typewriter;
