import "./resultitem.css"

const ResultItem = ({text,number})=>{
  return(
    <li className="result__item">
     <span className="result__text">{text}</span>
     <span className="result__number">{number}</span>
    </li>
  )
}

export default ResultItem;