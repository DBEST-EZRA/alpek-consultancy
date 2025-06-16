import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./FloatingWhatsAppButton.css";
import popSound from "./chat-pop.wav"; // Place your sound file in the same folder

const FloatingWhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const audio = new Audio(popSound);
      audio.play();
      setShowTooltip(true);

      setTimeout(() => {
        setShowTooltip(false);
      }, 4000);
    }, 8000); // 5s delay

    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    window.open(
      "https://wa.me/254705194260?text=Hello%20Alpek%20Tax%20%26%20Consultancy%20Ltd",
      "_blank"
    );
  };

  return (
    <div className="whatsapp-container" onClick={handleClick}>
      {showTooltip && <div className="whatsapp-tooltip">Chat with us</div>}
      <FaWhatsapp size={28} />
    </div>
  );
};

export default FloatingWhatsAppButton;
