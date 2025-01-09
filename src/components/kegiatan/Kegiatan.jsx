
// import ImageSlider from '../global/imageSlider/ImageSlider'
import Card from '../global/card/Card'
import './kegiatan.css'

const Kegiatan = () => {

  const pengukuhan2024 = [
    './images/pengukuhan2024/1.jpg',
    './images/pengukuhan2024/2.jpg',
    './images/pengukuhan2024/3.jpg',
    './images/pengukuhan2024/4.jpg',
    './images/pengukuhan2024/5.jpg',
    './images/pengukuhan2024/6.jpg',
  ]

  return (
    <>
      <div className="kegiatan-container text-center">
        <h1>Kegiatan Yang Telah Kami Dilakukan</h1>
        <div className="list-kegiatan-container">
          <Card
            dataAos={"fade-up"}
            title={"Pengukuhan 2024"}
            images={pengukuhan2024}
            idImages={"pengukuhan2024"}
            deskripsi={"Momen pengukuhan ini menjadi bukti nyata dari dedikasi, semangat, dan kerja keras para pesilat yang telah berhasil melewati ujian dan siap melangkah ke jenjang yang lebih tinggi. Semoga perjalanan ini tidak hanya menguatkan keterampilan fisik, tetapi juga memperkokoh karakter, ketangguhan mental, dan persaudaraan kita sebagai sesama pesilat."}
            link={"#"} />
          <Card
            dataAos={"fade-down"}
            title={"Event Internal"}
            images={pengukuhan2024}
            idImages={"eventInternal"}
            deskripsi={"Event internal yang diadakan 1 tahun sekali, ......."}
            link={"#"} />
          {/* <Card dataAos={"fade-down"} />
          <Card dataAos={"fade-up"} /> */}
          {/* {<ImageSlider images={pengukuhan2024} idImage="pengukuhan2024" deskripsi='Pengukuhan 2024' />} */}
          {/* {<ImageSlider />}
          {<ImageSlider />} */}
        </div>
      </div>
    </>
  )
}

export default Kegiatan