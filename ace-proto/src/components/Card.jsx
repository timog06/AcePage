import { Link } from 'react-router-dom'

const Card = ({ icon, title, description, link}) => {
  const cardContent = (
    <>
      <img src={icon} alt={title} className="card-icon" />
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
