import React from 'react';
import MenuStyles from './MenuLinks.module.css';
import {NavLink} from 'react-router-dom';

/* This Component have two props:
    1) onMouseOverForMenuLinks
    2) onMouseOutForMenuLinks
    3) onClickComponentsTransition
    4) isMenuClickOpen

*/

export const MenuLinks = (props) => {

  return (
    <div>
      <div onMouseOver = {props.onMouseOverForMenuLinks} onMouseOut = {props.onMouseOutForMenuLinks} className = {props.isMenuClickOpen ? MenuStyles.wrapBlock + " " + MenuStyles.wrapBlockOpen : MenuStyles.wrapBlock}>
        <p onClick = {props.onClickComponentsTransition}><NavLink to = "/silencelake/aboutme">About me</NavLink></p>
        <p onClick = {props.onClickComponentsTransition}><NavLink to = "/silencelake/portfolio">Portfolio</NavLink></p>
        <p onClick = {props.onClickComponentsTransition}><NavLink to = "/silencelake/contacts">Contacts</NavLink></p>
      </div>
    </div>
  )
}
