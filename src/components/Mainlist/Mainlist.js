import "./mainlist.css"
import Analik from "../../assets/images/Analik.svg"
import ResultItem from "../ResultItem/ResultItem"
export const Mainlist = () =>{
  return(
    <div className="mainlist">
      <div className="mainleft">
        <div className="left__header">
          <div>
          <h4 className="left__title">Today’s trends</h4>
          <p className="left__text">as of 25 May 2019, 09:41 PM</p>
          </div>
          <div>
            <span className="left__span">Today</span>
            <span className="left__span">Yesterday</span>
          </div>
        </div>
        <img src={Analik} alt="anlit" />
      </div>
      <ul className="result__list">
        <ResultItem text="Resolved" number="449"/>
        <ResultItem text="Received" number="426"/>
        <ResultItem text="Average first response time" number="33m"/>
        <ResultItem text="Average response time" number="3h 8m"/>
        <ResultItem text="Resolution within SLA" number="94%"/>
      </ul>

    </div>
  )
}