import { useRef } from "react";
import Beranda from "../components/beranda/Beranda";
import Footer from "../components/footer/Footer";
import Kegiatan from "../components/kegiatan/Kegiatan";
import Navbar from "../components/navbar/navbar";
import TentangKami from "../components/tentang/TentangKami";

const Home = () => {
  const kegiatanReff = useRef(null); // Buat referensi untuk elemen Kegiatan
  const berandaReff = useRef(null); // Buat referensi untuk elemen Kegiatan
  const tentangKamiReff = useRef(null); // Buat referensi untuk elemen Kegiatan
  const footerReff = useRef(null); // Buat referensi untuk elemen Kegiatan

  const scrollTo = (id) => {
    const element = document.getElementById(id)
    const navbarHeight = 75; // Sesuaikan dengan tinggi navbar Anda
    const elementPosition = element.getBoundingClientRect().top + window.scrollY;

    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
    // if (section === "beranda") berandaReff.current.scrollIntoView({ behavior: "smooth" });
    // if (section === "kegiatan") kegiatanReff.current.scrollIntoView({ behavior: "smooth" });
    // if (section === "tentangKami") tentangKamiReff.current.scrollIntoView({ behavior: "smooth" });
    // if (section === "kontak") footerReff.current.scrollIntoView({ behavior: "smooth" });
    console.log(id)
  };

  return (
    <>
      <Navbar scrollTo={scrollTo} />
      <div id="beranda" ref={berandaReff}><Beranda /></div>
      <div id="tentangKami" ref={tentangKamiReff}><TentangKami /></div>
      <div id="kegiatan" ref={kegiatanReff}><Kegiatan /></div>
      <div id="kontak" ref={footerReff}><Footer /></div>
    </>
  );
}

export default Home;