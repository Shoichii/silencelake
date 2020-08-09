import React, {useState} from 'react';
import AppStyles from './App.module.css';
import {Route,Switch,useLocation, useParams} from 'react-router-dom';
import {Welcome} from './Components/Welcome/Welcome.jsx';
import {ContentWithRouter} from './Components/Content/Content.jsx';
import {CSSTransition} from 'react-transition-group';

const App = () => {

let location = useLocation();
let {paths} = useParams();

// animation for transition
let [inPropApp, setinPropApp] = useState(false);
let onClickComponentsTransition = (e) => {
  // when you click on link of menu - toggle will change
  setinPropApp(true)
}

  return (
    <div>
    <CSSTransition in ={inPropApp}  timeout={100} classNames={{
      enter: AppStyles.TransitionEnter,
      enterDone: AppStyles.TransitionEnterDone,
      exit: AppStyles.TransitionExit,
      exitDone: AppStyles.TransitionExitDone,
      }}>
      <Switch location = {location}>
        <Route exact path = "/silencelake" render = {() => <Welcome onClickComponentsTransition = {onClickComponentsTransition} />} />
        <Route path = "/silencelake/:paths" render = {() => <ContentWithRouter setinPropApp = {setinPropApp} onClickComponentsTransition = {onClickComponentsTransition} />} />
      </Switch>
    </CSSTransition>
    </div>
  );
}

export default App;
