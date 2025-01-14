import { useState, useEffect, useMemo } from "react";
import Beranda from "../components/beranda/Beranda";
import Footer from "../components/footer/Footer";
import Kegiatan from "../components/kegiatan/Kegiatan";
import Navbar from "../components/navbar/navbar";
import TentangKami from "../components/tentang/TentangKami";

const Home = () => {
  const navbarHeight = 75;
  const sections = useMemo(() => [
    { id: "beranda", component: <Beranda /> },
    { id: "tentangKami", component: <TentangKami /> },
    { id: "kegiatan", component: <Kegiatan /> },
    { id: "kontak", component: <Footer /> },
  ], [])

  const [active, setActive] = useState("home")
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    };
  }, []);

  useEffect(() => {
    const activeSection = sections.find((section) => {
      const element = document.getElementById(section.id);
      if (element) {
        const elementTop = element.getBoundingClientRect().top + window.scrollY;
        const elementBottom = elementTop + element.offsetHeight;

        // Periksa apakah elemen berada dalam jangkauan scroll
        return scrollY + 75 >= elementTop && scrollY + 75 <= elementBottom;
      }
      return false;
    });

    if (activeSection) {
      setActive(activeSection.id);
    }
  }, [scrollY, active, sections]);

  const handleActive = (e) => {
    setActive(e);
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    const elementPosition =
      element.getBoundingClientRect().top + window.scrollY;
    // console.log(elementPosition)

    window.scrollTo({
      top: elementPosition - navbarHeight,
      behavior: "smooth",
    });
    console.log(id);
  };

  return (
    <>
      <Navbar scrollTo={scrollTo} active={active} handleActive={handleActive} />
      {sections.map((section) => (
        <div key={section.id} id={section.id}> {section.component} </div>
      ))}
      {/* <div id="beranda">
        <Beranda />
      </div>
      <div id="tentangKami">
        <TentangKami />
      </div>
      <div id="kegiatan">
        <Kegiatan />
      </div>
      <div id="kontak">
        <Footer />
      </div> */}
    </>
  );
};

export default Home;
