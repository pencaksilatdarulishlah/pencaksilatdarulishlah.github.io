import { useState, useEffect } from "react";
import PropTypes from 'prop-types';
import './navbar.css';

const Navbar = ({ scrollTo }) => {

  // const linkRef = useRef(null)


  const [active, setActive] = useState('home');
  const [scrolled, setsSrolled] = useState(false)
  const [open, setOpen] = useState(false);

  const handleActive = (e) => {
    setActive(e)
  }

  useEffect(() => {
    const handleScrolle = () => {
      if (window.scrollY > (window.innerHeight / 3)) {
        setsSrolled(true)
      } else {
        setsSrolled(false)
      }
    }

    window.addEventListener("scroll", handleScrolle)

    return () => {
      window.removeEventListener("scroll", handleScrolle)
    }
  }, [])

  const toggleSidebar = () => {
    setOpen(!open);
  };

  return (
    <>
      <header className={`container-fluid navbar ${scrolled ? "scrolled" : ""}`}>
        <a href="/" className="box-brand">
          <h4>DARUL</h4>
          <img className="img img-fluid" src="./images/logo-darul-ishlah-2.png" alt="Darul Ishlah" />
          <h4>ISHLAH</h4>
        </a>
        <ul className={`list-navbar ${open ? "open" : ""}`}>
          <li><a onClick={() => { handleActive('beranda'); scrollTo("beranda") }} className={active === "beranda" ? 'active' : ''}>Beranda</a></li>
          <li><a onClick={() => { handleActive('tentang-kami'); scrollTo("tentangKami") }} className={active === "tentang-kami" ? 'active' : ''}>Tentang Kami</a></li>
          <li><a onClick={() => { handleActive('kegiatan'); scrollTo("kegiatan") }} className={active === "kegiatan" ? 'active' : ''}>Kegiatan</a></li>
          <li><a onClick={() => { handleActive('kontak'); scrollTo("kontak") }} className={active === "kontak" ? 'active' : ''}>Kontak</a></li>
        </ul>
        <button type="button" className={`menu-toggle ${open ? "open" : ""}`} onClick={() => toggleSidebar()}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </header>
    </>
  );
}
Navbar.propTypes = {
  scrollTo: PropTypes.func
}

export default Navbar;
