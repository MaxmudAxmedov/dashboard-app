import "./app.css"
import React from 'react'
import { Header } from './components/Header/Header';
import { Card } from "./components/Card/Card";
import { Mainlist } from "./components/Mainlist/Mainlist";


function App() {
  return (
    <div>
      <div className="appp">
      <Header />
      <div className="ok">
      <Card text={"Unresolved"} num={"634"}/>
      <Mainlist/>
      </div>
      </div>
    </div>
  )
}

export default App;