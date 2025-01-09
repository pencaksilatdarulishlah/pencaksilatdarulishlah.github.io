import './imageSlider.css'
import PropTypes from 'prop-types'

const ImageSlider = ({ images, idImage, deskripsi }) => {
  return (
    <div className="container-item">
      <div id={idImage} className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              data-bs-target={`#${idImage}`}
              data-bs-slide-to={i}
              className={i === 0 ? "active" : ""}
              aria-current={i === 0 ? "true" : undefined}
              aria-label={i + 1}>
            </button>
          ))}
        </div>
        <div className="carousel-inner">
          {images.map((image, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img src={image} className="d-block w-100 rounded" alt={`Slide ${i + 1}`} />
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target={`#${idImage}`} data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target={`#${idImage}`} data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
        </button>
      </div>
      {deskripsi !== undefined ? (<p className='deskripsi-item'>{deskripsi}</p>) : (undefined)}
    </div>
  )
}
ImageSlider.propTypes = {
  idImage: PropTypes.string.isRequired,
  deskripsi: PropTypes.string,
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
}

export default ImageSlider