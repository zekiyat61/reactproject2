

function Card({image,title,description}) {
  return (
    <div className="card shadow-lg"  >
    <div className="card-img-holder">
      <img src={image} alt="Blog image"/>
    </div>
    <h3 className="blog-title">{title}</h3>
    <p className="description">{description}</p>
    <div className="options">
      <span>
        Read Full Book
      </span>
      <button className="btn">buy</button>
    </div>
  </div>
  )
}

export default Card