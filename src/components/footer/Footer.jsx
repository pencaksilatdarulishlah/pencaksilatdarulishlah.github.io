import "./footer.css";

const Footer = () => {
  return (
    <>
      <div className="container-fluid footer mt-5">
        <div className="sosmed">
          <p>Official Social Media Account</p>
          <div className="list-sosmed">
            <div className="box-icon-sosmed">
              <a href="https://www.instagram.com/pencaksilat_darulishlah/">
                <img src="../icon/instagram.webp" alt="instagram" />
              </a>
            </div>
            <div className="box-icon-sosmed">
              <a href="">
                <img src="../icon/gmail.png" alt="instagram" />
              </a>
            </div>
          </div>
        </div>
        <div className="alamat">
          <p>Jalan Usman Harun Komplek Arafat</p>
          <p>Kecamatan Kampung Makasar, Kota Jakarta Timur</p>
        </div>
      </div>
      <div className="copyright">
        <p>© 2024 Darul Ishlah</p>
      </div>
    </>
  );
};

export default Footer;
