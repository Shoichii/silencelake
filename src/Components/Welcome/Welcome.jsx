import React, {useState, useEffect, useRef} from 'react';
import WelcomeStyles from './Welcome.module.css';
import {MenuLinks} from '../MenuLinks/MenuLinks.jsx';
import {MenuButton} from '../MenuButton/MenuButton.jsx';
import {CSSTransition} from 'react-transition-group';

export const Welcome = (props) => {

  // Open Menu
  let [isMenuClickOpen, setisMenuClickOpen] = useState(false);
  let onClickOpenMenu = (e) => {
    setisMenuClickOpen(!isMenuClickOpen)
  }

  // Boolean for CSSTransition "in" for animate text
  let [inProp, setInProp] = useState(false);

  // Change word "Welcome"
  let [firstWelcomePhrase, setFirstWelcomePhrase] = useState("Welcome");
  let [secondWelcomePhrase, setSecondWelcomePhrase] = useState("to my business card website");

  let linkTarget = useRef(null);

  // functions for move mouse on Menu NavLinks like hover in CSS
  const onMouseOverForMenuLinks = (e) => {
    if(e.target.tagName != "A" && firstWelcomePhrase == "Welcome") {
      setSecondWelcomePhrase("to my business card website")
      return;
    }
    setInProp(!inProp);
    setFirstWelcomePhrase(e.target.textContent)
    switch (e.target.textContent) {
      case "Portfolio": setSecondWelcomePhrase("There are no works yet.    But, I hope that there will be many of them.");
        break;
      case "About me": setSecondWelcomePhrase("Some info about me.");
        break;
      case "Contacts": setSecondWelcomePhrase("How you can contact me.");
        break;
      default: setSecondWelcomePhrase("to my business card website");
    }
  }

  // this function must have for turn text on start position when mouse out block with links
  const onMouseOutForMenuLinks = (e) => {
    if(firstWelcomePhrase == "Welcome") {
      return;
    }
    setInProp(!inProp);
    setFirstWelcomePhrase("Welcome")
    setSecondWelcomePhrase("to my business card website")
  }

  // Unmount and turn toggle open/close menu on start position - close
  useEffect(() => {
    return () => setisMenuClickOpen(false)
  },[])

  return (
    <div className={WelcomeStyles.App}>

    {/* Main background */}
      <video width="100%" height="auto" preload="auto" autoPlay loop muted playsInline>
        <source src="../silencelake/Videos/VideoOfTranquilRiver.mp4" type="video/mp4"></source>
        <source src="../silencelake/Videos/VideoOfTranquilRiver.mp4" type="video/webm"></source>
      </video>

    {/* Small background */}
      <div className = {WelcomeStyles.miniAppBackground}>
        <video width="100%" height="auto" preload="auto" autoPlay loop muted playsInline>
          <source src="../silencelake/Videos/VideoOfTranquilRiver.mp4" type="video/mp4"></source>
          <source src="../silencelake/Videos/VideoOfTranquilRiver.mp4" type="video/webm"></source>
        </video>
      </div>

      {/* Menu button */}
      <MenuButton onClickOpenMenu = {onClickOpenMenu} isMenuClickOpen = {isMenuClickOpen} />
      {/* Menu NavLinks*/}
      <MenuLinks onClickComponentsTransition = {props.onClickComponentsTransition} onMouseOverForMenuLinks = {onMouseOverForMenuLinks} onMouseOutForMenuLinks = {onMouseOutForMenuLinks} isMenuClickOpen = {isMenuClickOpen} />

      {/* Welcome text */}
      <div className = {WelcomeStyles.welcomeMessage}>

      {/* Animation welcome text */}
      <CSSTransition in = {inProp} timeout = {100} classNames={{
        enter: WelcomeStyles.displayEnter,
        enterDone: WelcomeStyles.displayEnterDone,
        exit: WelcomeStyles.displayExit,
        exitDone: WelcomeStyles.displayExitDone,
      }}>
        <p ref = {linkTarget} className = {WelcomeStyles.atfirstGreet}>{firstWelcomePhrase}</p>
      </CSSTransition>

      {/* Animation welcome text */}
      <CSSTransition in = {inProp} timeout = {100} classNames={{
        enter: WelcomeStyles.displayEnter,
        enterDone: WelcomeStyles.displayEnterDone,
        exit: WelcomeStyles.displayExit,
        exitDone: WelcomeStyles.displayExitDone,
      }}>
        <p ref = {linkTarget} className = {WelcomeStyles.atSecondGreet}>{secondWelcomePhrase}</p>
        </CSSTransition>
      </div>


    </div>
  )
}
