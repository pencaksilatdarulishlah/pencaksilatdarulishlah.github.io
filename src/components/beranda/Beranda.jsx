import { useEffect, useState } from "react";
import "./beranda.css";

const Beranda = () => {
  const images = [
    "./images/pengukuhan2024/1.jpg",
    "./images/pengukuhan2024/2.jpg",
    "./images/pengukuhan2024/3.jpg",
    "./images/pengukuhan2024/4.jpg",
    "./images/pengukuhan2024/5.jpg",
  ];

  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(true);
      setTimeout(() => {
        setIndex((prevImage) => (prevImage + 1) % images.length);
        setFade(false);
      }, 700);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="beranda">
      <div
        className={`imageAnimated ${fade ? "fade-out" : "fade-in"}`}
        style={{ backgroundImage: `url(${images[index]})` }}
      ></div>
    </div>
  );
};

export default Beranda;
