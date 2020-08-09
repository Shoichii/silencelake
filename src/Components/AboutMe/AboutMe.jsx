import React from 'react';
import AboutMeStyles from './AboutMe.module.css';

export const AboutMe = (props) => {
setTimeout(props.turnOffAnimateDisplay,5000)

  return (
    <div className = {props.showContentStylesToggle ? AboutMeStyles.main + " " + AboutMeStyles.showContent : AboutMeStyles.main}>
    <p className = {AboutMeStyles.frontendPart}>
        <p>Hi. Nice to welcom you here. My name is Vasiliy.</p>
        <p>I am a beginner programmer from Russia.</p>
        <p>Knowledges what I have like frontend developer:</p>
        <p><ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript ES6</li>
          <li>React</li>
        </ul></p>
        <p>I have a little experience as a front-end developer. But I want to be able and know more.</p>
        <p>In current time I  am leveling up my english and web knowledges.</p>
      </p>
    </div>
  )
}
