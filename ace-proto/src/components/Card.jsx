import { Link } from 'react-router-dom'
import { useState } from 'react'

const Card = ({ icon, title, description, link}) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const cardContent = (
    <>
      <div className={`card-icon-container ${imageLoaded ? 'loaded' : ''}`}>
        {!imageLoaded && !imageError && <div className="card-icon-placeholder" />}
        <img 
          src={icon} 
          alt={title} 
          className="card-icon" 
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageError(true)}
          style={{ display: imageError ? 'none' : 'block' }}
        />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </>
  )

  return link.startsWith('http') ? (
    <a href={link} target="_blank" rel="noopener noreferrer" className="card">
      {cardContent}
    </a>
  ) : (
    <Link to={link} className="card">
      {cardContent}
    </Link>
  )
}

export default Card
