import React from 'react';
import PortfolioStyles from './Portfolio.module.css';

export const Portfolio = (props) => {
setTimeout(props.turnOffAnimateDisplay,5000)

  return (
    <div className = {props.showContentStylesToggle ? PortfolioStyles.main + " " + PortfolioStyles.showContent : PortfolioStyles.main}>
      <p>There are no works yet. But it will soon.</p>
    </div>
  )
}
