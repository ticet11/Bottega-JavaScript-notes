import React, { Component } from 'react';
import { footer } from 'bk-js-footer';

export default class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>DevCamp React Starter</h1>
        { footer('Brian Kozub') }
        
      </div>
    );
  }
}
