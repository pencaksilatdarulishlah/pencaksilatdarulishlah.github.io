import './accordion.css'
import PropTypes from 'prop-types'

const Accordion = ({ idContainer, idBody, judul, deskripsi }) => {
  return (
    <div className="accordion accordion-container" id={idContainer}>
      <div className="accordion-item">
        <h2 className="accordion-header">
          <button className="accordion-button button-accordion" type="button" data-bs-toggle="collapse" data-bs-target={`#${idBody}`} aria-expanded="true" aria-controls="collapseOne">
            {judul}
          </button>
        </h2>
        <div id={idBody} className="accordion-collapse collapse show" data-bs-parent={`#${idContainer}`}>
          <div className="accordion-body body-accordion" dangerouslySetInnerHTML={{ __html: deskripsi }}>

          </div>
        </div>
      </div>
    </div>
  )
}

Accordion.propTypes = {
  idContainer: PropTypes.string.isRequired,
  idBody: PropTypes.string.isRequired,
  judul: PropTypes.string.isRequired,
  deskripsi: PropTypes.string.isRequired,
}

export default Accordion