import React, { Component } from 'react';
import Madlibform from './madlib_form';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="backgroundSkew"> 
          <div className='madlib-heading'>
            <h1>Nathan Mad libs</h1>
              <div className='madlib-subheading'>
              Fillout the fields below and click the generate button<br/>to see the mad lib story,
              </div>
          </div>
          <Madlibform />
          
        </div>
      </div>
    );
  }
}
