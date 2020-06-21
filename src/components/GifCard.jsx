import React from 'react'
import PropTypes from 'prop-types'

const GifCard = ( {id, title, url}) => {
    return (
      <div className="gif-card animate__animated animate__fadeInLeft">
        <img src={url} alt={title} />
        <p title={title}>{title}</p>
      </div>
    );
}

GifCard.propTypes = {
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
}

export default GifCard
