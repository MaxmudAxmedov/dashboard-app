import "./card.css"

export const Card = ({text,num}) => {
  return(
    <div className="card__min">
      <span className="card__text">{text}</span>
      <span className="card__num">{num}</span>
    </div>
  )
}