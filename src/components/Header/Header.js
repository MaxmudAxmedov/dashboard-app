import "./header.css"

import {Logo,Overview,Tickets,Ideas,Contacts,Agents,Articles,Settings,Subscription} from "../../assets/images/icons/icons"
export const Header = () => {
  const data = [
    {
      icon: <Overview /> ,
      text:"Overview"
    },
    {
      icon: <Tickets /> ,
      text:"Tickets"
    },
    {
      icon: <Ideas /> ,
      text:"Ideas"
    },
    {
      icon: <Contacts /> ,
      text:"Contacts"
    },
    {
      icon: <Agents /> ,
      text:"Agents"
    },
    {
      icon: <Articles /> ,
      text:"Articles"
    },
    
  ]

  const down = [
    {
      icon: <Settings /> ,
      text:"Settings"
    },
    {
      icon: <Subscription /> ,
      text:"Subscription"
    },
  ]
  console.log(data);
  return (
    <header className="header">
      <a className="link__logo" href="../../../public/index.html">
        <Logo />
      </a>
      <ul className="header__list">
        {
          data.map(e => (
            <li className="header__item">
              {e.icon}{e.text}
            </li>
          ))
        }
      </ul>
      <ul className="list__bottom">
        {
          down.map(e => (
            <li className="header__item">
              {e.icon}{e.text}
            </li>
          ))
        }
      </ul>
    </header>
  )
}
