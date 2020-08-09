import React, { useState } from 'react';
import MenuButtonStyles from './MenuButton.module.css';
import {CSSTransition} from 'react-transition-group';

/* This Component take to props:
    1)onClickOpenMenu - this is a function for change second property
    2)isMenuClickOpen - this is a toggle for change a styles
*/

export const MenuButton = (props) => {

  let [inProp, setInProp] = useState(false);
  
  let onOver = () => {
    setInProp(true);
  }
  let onOut = () => {
    setInProp(false);
  }

  return (
     <CSSTransition in = {inProp} timeout = {500} classNames={{
        enter: MenuButtonStyles.displayEnter,
        enterDone: MenuButtonStyles.displayEnterDone,
        exit: MenuButtonStyles.displayExit,
        exitDone: MenuButtonStyles.displayExitDone,
      }}>
    <div onMouseOver = {onOver} onMouseOut = {onOut} onClick = {props.onClickOpenMenu} 
    className = {MenuButtonStyles.burgerWrapper}>
     
        <div 
          className = {props.isMenuClickOpen 
          ? MenuButtonStyles.burger + " " + MenuButtonStyles.burgerClose 
          : MenuButtonStyles.burger}></div>
    </div>
    </CSSTransition>
  );
}
