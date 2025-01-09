import './cardAnggota.css'
import PropTypes from 'prop-types';
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const CardAnggota = ({ image, nama, nomorAnggota, jabatan }) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: false, // Animasi berjalan hanya sekali
    });
  }, []);
  return (
    <div className="anggota-tim" data-aos="zoom-in">
      <div className="box-image-anggota">
        <img className="img img-fluid" src={image} alt="anggota tim" />
      </div>
      <h6 className="nama-anggota">{nama}</h6>
      <p className="nomor-anggota">{nomorAnggota}</p>
      <p className="jabatan">{jabatan}</p>
    </div>
  )
}

CardAnggota.propTypes = {
  image: PropTypes.string.isRequired,
  nama: PropTypes.string.isRequired,
  nomorAnggota: PropTypes.string.isRequired,
  jabatan: PropTypes.string.isRequired,
};

export default CardAnggota