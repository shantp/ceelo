import 'babel-core/polyfill';
import React from 'react';
import Dice from './common/dice';

const DOM_APP_ID = 'app';

class App extends React.Component {
  render() {
    Dice.roll();
    return (
      <div />
    )
  }
}

React.render(<App />, document.getElementById(DOM_APP_ID));