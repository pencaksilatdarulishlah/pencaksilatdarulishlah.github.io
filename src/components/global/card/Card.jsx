import "./card.css";
import PropTypes from "prop-types";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import ImageSlider from "../imageSlider/ImageSlider";

const Card = ({ dataAos, images, idImages, title, deskripsi, link }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: false, // Animasi berjalan hanya sekali
    });
  }, []);

  return (
    <div className="card card-kegiatan rounded-3" data-aos={dataAos}>
      <div className="box-image-card rounded">
        {<ImageSlider images={images} idImage={idImages} />}
      </div>
      <div className="box-deskripsi-card">
        <h5 className="card-title">{title}</h5>
        <p className="card-text text">{deskripsi}</p>
      </div>
      <div className="card-body body-card">
        <a href={link} className="btn btn-outline-success">
          Lihat Selengkapnya
        </a>
      </div>
    </div>
  );
};
Card.propTypes = {
  dataAos: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string),
  idImages: PropTypes.string,
  title: PropTypes.string,
  deskripsi: PropTypes.string,
  link: PropTypes.string,
};

export default Card;
