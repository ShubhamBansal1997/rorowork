import React, { Component } from 'react';
import boxes from './boxes.json';
import './App.css';
import GraphSvg from './GraphSvg.js';

class App extends Component {
  render() {
    return (
      <div className="App">
          <h2 style={{ textAlign: 'left', color: 'rgb(83, 129, 212)', marginTop: '5px', marginLeft: '5px'}}>TSS Academy - Navigation</h2>
          {boxes.map((value, index) => {
            return (
             <GraphSvg
              key={index}
              type={index===0?"open":((index===boxes.length-1)?"close":"normal")} 
              color={value.color}
              colorDark={value.colorDark}
              name={value.name}
              modules={value.modules}           
              /> 
            )
          })}
      </div>
    );
  }
}

export default App;
