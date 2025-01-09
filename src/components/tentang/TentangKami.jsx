import { useEffect } from "react";
import CardAnggota from '../global/cardAnggota/CardAnggota'
import AOS from "aos";
import "aos/dist/aos.css";
import './tentangKami.css'

const TentangKami = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durasi animasi dalam milidetik
      once: false, // Animasi berjalan hanya sekali
    });
  }, []);
  return (
    <div className="tentang-kami">
      <section className="darulishlah" data-aos="zoom-in">
        <h1 className='judul'>Tentang Kami</h1>
        <p><strong>Pencak Silat Darul Ishlah </strong>adalah sebuah organisasi seni bela diri yang berkomitmen untuk mengembangkan kemampuan fisik, mental, dan spiritual anggotanya.
          Berdiri dengan tujuan mulia untuk memajukan seni bela diri Pencak Silat, kami tidak hanya mengajarkan teknik bertahan hidup,
          tetapi juga menanamkan nilai-nilai kedisiplinan, keharmonisan, dan semangat persaudaraan di antara para anggotanya.</p>
      </section>
      <section className="sejarah">
        <div className="box-image"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <img className='img img-fluid rounded image-pendukung'
            src="./images/sejarah.jpeg"
            alt="" />
        </div>
        <div className="deskripsi-sejarah deskripsi"
          data-aos="fade-left"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <h3 className='sub-judul'>Sejarah Pencak Silat Darul Ishlah</h3>
          <p>....</p>
        </div>
      </section>
      <section className="lambang">
        <div className="deskripsi-lambang deskripsi" data-aos="fade-right">
          <h3 className='sub-judul mb-3'>Lambang Perguruan Pencak Silat Darul Ishlah</h3>
          <ol>
            <li><strong>Bintang Sembilan</strong> <br />
              <p>Mewakili angka sembilan yang melambangkan kesempurnaan, harapan untuk mencapai hasil yang terbaik dalam setiap aspek kehidupan dan silat.</p></li>
            <li><strong>API</strong> <br />
              <p>Melambangkan kekuatan, semangat, dan energi yang tidak pernah padam, sebagai simbol dari tekad dan semangat juang yang tak kenal lelah.</p></li>
            <li><strong>Kepalan Tangan</strong> <br />
              <p>Mewakili bela diri, menunjukkan kemampuan bertahan dan berjuang untuk mempertahankan diri dan kebenaran.</p></li>
            <li><strong>Kitab</strong> <br />
              <p>Melambangkan ilmu, pendidikan, dan proses belajar yang terus-menerus. Dalam konteks ini, kitab mengingatkan bahwa pengetahuan adalah dasar untuk mengasah keterampilan dan kebijaksanaan dalam kehidupan dan bela diri.</p></li>
            <li><strong>Darul Ishlah</strong> <br />
              <p>Mengandung makna tempat berkumpul, yang berarti tempat untuk berlatih, bertumbuh, dan memperbaiki diri bersama dalam semangat kekeluargaan dan saling mendukung.</p></li>
          </ol>
          <p>Belajar dari <strong>{`"Kitab"`}</strong> untuk <strong>{`"Bela Diri"`}</strong> yang mengarah pada <strong>{`"Kekuatan"`}</strong>, yang pada gilirannya membawa kita menuju <strong>{`"Kesempurnaan"`}</strong>. Semua ini berlangsung di <strong>{`"Darul Ishlah"`}</strong>, tempat untuk terus berkembang dan memperbaiki diri bersama dalam suasana kekeluargaan.</p>
        </div>
        <div className="box-image box-image-lambang order-change" data-aos="fade-left">
          <img className='img img-fluid rounded image-pendukung' src="./images/LOGO.png" alt="" />
        </div>
      </section>
      <section data-aos="fade-down"><h1 className="judul-visi-misi text-center">Visi dan Misi</h1></section>
      <section className="visi">
        <div className="box-image" data-aos="flip-up">
          <img className='img img-fluid rounded image-pendukung' src="./images/visi.jpeg" alt="" />
        </div>
        <div className="deskripsi" data-aos="fade-down-left">
          <h3 className='sub-judul'>Visi Perguruan Pencak Silat Darul Ishlah</h3>
          <p>Menjadi wadah pembentukan pribadi yang kuat, berbudi pekerti luhur, serta berperan aktif dalam menjaga dan melestarikan budaya bangsa melalui seni bela diri Pencak Silat.</p>
        </div>
      </section>
      <section className="misi">
        <div className="deskripsi" data-aos="fade-down">
          <h3 className='sub-judul mb-3'>Misi Perguruan Pencak Silat Darul Ishlah</h3>
          <ol>
            <li><p>Meningkatkan kualitas fisik dan mental para anggota melalui latihan pencak silat yang disiplin, penuh tanggung jawab, dan berorientasi pada pengembangan diri.</p></li>
            <li><p>Menumbuhkan rasa persaudaraan dan kekeluargaan antar anggota agar tercipta suasana yang harmonis, saling mendukung, dan peduli terhadap sesama.</p></li>
            <li><p>Membentuk karakter anggota dengan menjunjung tinggi nilai-nilai moral dan etika, seperti kejujuran, kedisiplinan, keberanian, dan rasa hormat terhadap orang lain.</p></li>
            <li><p>Melestarikan dan mengembangkan seni budaya pencak silat sebagai warisan budaya bangsa yang harus dijaga dan dikenalkan kepada generasi muda.</p></li>
            <li><p>Mengandung makna tempat berkumpul, yang berarti tempat untuk berlatih, bertumbuh, dan memperbaiki diri bersama dalam semangat kekeluargaan dan saling mendukung.</p></li>
          </ol>
        </div>
        <div className="box-image order-change"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000">
          <img className='img img-fluid rounded image-pendukung' src="./images/misi.jpeg" alt="" />
        </div>
      </section>
      <section><h1 className="text-center" data-aos="fade-down">Struktur Organisasi</h1></section>
      <section className="struktur penasihat">
        <div className="judul">
          <h3 data-aos="fade-down">Tim Penasihat Senior</h3>
        </div>
        <div className="list-anggota-tim">
          {<CardAnggota image="./images/LOGO.png" nama="SARIMAN" nomorAnggota="PSDI-0000-000" jabatan="KETUA" />}
          {<CardAnggota image="./images/LOGO.png" nama="......." nomorAnggota="PSDI-0000-000" jabatan="WAKIL" />}
        </div>
      </section>
      <section className="struktur inti">
        <div className="judul">
          <h3 data-aos="fade-down">Tim Kepemimpinan Inti</h3>
        </div>
        <div className="list-anggota-tim">
          {<CardAnggota image="./images/LOGO.png" nama="RAHMAT RAMADHAN" nomorAnggota="PSDI-0000-000" jabatan="KETUA" />}
          {<CardAnggota image="./images/LOGO.png" nama="......." nomorAnggota="PSDI-0000-000" jabatan="WAKIL" />}
          {<CardAnggota image="./images/LOGO.png" nama="......." nomorAnggota="PSDI-0000-000" jabatan="SEKRETARIS" />}
          {<CardAnggota image="./images/LOGO.png" nama="......." nomorAnggota="PSDI-0000-000" jabatan="BENDAHARA" />}
        </div>
      </section>
      <section className="struktur operasional">
        <div className="judul">
          <h3 data-aos="fade-down">Tim Operasional</h3>
        </div>
        <div className="list-anggota-tim">
          {<CardAnggota image="./images/LOGO.png" nama="DIFA IKHWANI AKBAR" nomorAnggota="PSDI-0000-000" jabatan="KETUA" />}
          {<CardAnggota image="./images/LOGO.png" nama="Azhar Romdhon" nomorAnggota="PSDI-0000-000" jabatan="WAKIL" />}
          {<CardAnggota image="./images/LOGO.png" nama="......." nomorAnggota="PSDI-0000-000" jabatan="SEKRETARIS" />}
          {<CardAnggota image="./images/LOGO.png" nama="......." nomorAnggota="PSDI-0000-000" jabatan="BENDAHARA" />}
          {<CardAnggota image="./images/LOGO.png" nama="......." nomorAnggota="PSDI-0000-000" jabatan="PELATIHAN DAN TEKNIK" />}
          {<CardAnggota image="./images/LOGO.png" nama="WILDAN SYAHRUL NURCHOLIS" nomorAnggota="PSDI-0000-000" jabatan="KEANGGOTAAN" />}
          {<CardAnggota image="./images/LOGO.png" nama="TAMIR SEPTIAN" nomorAnggota="PSDI-0000-000" jabatan="HUMAS DAN PUBLIKASI" />}
          {<CardAnggota image="./images/LOGO.png" nama="......." nomorAnggota="PSDI-0000-000" jabatan="SARANA DAN PRASARANA" />}
        </div>
      </section>
      <section className="guru-besar">
        <div className="box-image box-image-lambang"
          data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine">
          <img className='img img-fluid rounded image-pendukung'
            src="./images/LOGO.png"
            alt="" />
        </div>
        <div className="deskripsi"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine">
          <h3 className='sub-judul'>Mengenang Guru Besar Ka Imam Sugino</h3>
          <br />
          <p>Pada 10 Juni 2024, kita telah kehilangan sosok yang begitu berharga, Guru Besar Imam Sugino. Beliau adalah pendiri sekaligus pencetus Pencak Silat Darul Ishlah, yang menjadi wadah pembinaan seni bela diri sekaligus moralitas dan spiritualitas.</p>
          <br />
          <p>Guru Besar Imam Sugino tidak hanya mengajarkan teknik pencak silat, tetapi juga menanamkan nilai-nilai kehidupan seperti disiplin, kejujuran, dan persaudaraan. Selama hidupnya, beliau menjadi inspirasi bagi banyak murid dan komunitas, mencurahkan waktu dan tenaganya untuk membangun generasi yang berkarakter.</p>
          <br />
          <p>Kepergian beliau adalah duka mendalam bagi keluarga besar Darul Ishlah dan dunia pencak silat. Namun, semangat perjuangan beliau akan terus hidup dalam setiap langkah dan gerakan yang telah beliau wariskan kepada kita semua.</p>
          <br />
          <p>Semoga kita dapat menjaga dan meneruskan warisan beliau, serta menjadikannya sebagai inspirasi dalam kehidupan sehari-hari.</p>
        </div>
      </section>
    </div>
  )
}

export default TentangKami