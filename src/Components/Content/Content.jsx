import React, {useState} from 'react';
import ContentStyles from './Content.module.css';
import {Route,Switch, withRouter} from 'react-router-dom';

import {NavLink} from 'react-router-dom';
import {AboutMe} from '../AboutMe/AboutMe.jsx';
import {Contacts} from '../Contacts/Contacts.jsx';
import {Portfolio} from '../Portfolio/Portfolio.jsx';

const Content = (props) => {

  //toggle for show first o second styles. it's change display of content: slow(7s) o fast(in a flash). (Look in CSS)
  let [showContentStylesToggle, setShowContentStylesToggle] = useState(true);

  // toggle for animate transition (look in App component)
  props.setinPropApp(false)

  // turn off styles for slow display of content
  let turnOffAnimateDisplay = () => {
  setShowContentStylesToggle(false)
}


  return (
    <div className = {ContentStyles.main}>
    {/* Background video */}
      <video width="100%" height="auto" preload="auto" autoPlay loop muted playsInline>
        <source src="../silencelake/Videos/VideoOfAVastWheat Field.mp4" type="video/mp4"></source>
        <source src="../silencelake/Videos/VideoOfAVastWheat Field.mp4" type="video/webm"></source>
      </video>

      {/* Menu*/}
      <div className = {ContentStyles.miniBackground}>
        <div className = {ContentStyles.navMenu}>
          <p onClick = {props.onClickComponentsTransition} className = {ContentStyles.toMain}><NavLink to = "/silencelake">to Lake</NavLink></p>
          <p className = {ContentStyles.otherMenuLinks}>
            <NavLink to = "/silencelake/aboutme">About me</NavLink>
            <NavLink to = "/silencelake/portfolio">Portfolio</NavLink>
            <NavLink to = "/silencelake/contacts">Contacts</NavLink>
          </p>
        </div>
      </div>

      {/* Content Components */}
      <Switch>
        <Route path = "/silencelake/aboutme" render = {() => <AboutMe showContentStylesToggle = {showContentStylesToggle} turnOffAnimateDisplay = {turnOffAnimateDisplay} />} />
        <Route path = "/silencelake/contacts" render = {() => <Contacts showContentStylesToggle = {showContentStylesToggle} turnOffAnimateDisplay = {turnOffAnimateDisplay} />} />
        <Route path = "/silencelake/portfolio" render = {() => <Portfolio showContentStylesToggle = {showContentStylesToggle} turnOffAnimateDisplay = {turnOffAnimateDisplay} />} />
      </Switch>
    </div>
  )
}

export const ContentWithRouter = withRouter(Content);
