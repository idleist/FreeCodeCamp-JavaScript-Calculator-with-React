import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: 0
    }
  }
  
  buttonPress = (e) => {
    e.preventDefault();
    console.log(e.target.value);

    if(e.target.value === 'AC'){
      this.clearCalculator();
    } else{
      this.displayNumber(e);
    } 
  }
  
  clearCalculator = () => {
    this.setState({display: 0});
  }

  displayNumber = (e) => {
    if(this.state.display === 0 && e.target.value !== '0'){
      this.setState({display: e.target.value});
    } else if(this.state.display === 0 && e.target.value === '0'){
      this.setState({display: 0});
    } else {
      this.setState({display: this.state.display + e.target.value});
    }
    
  }

  render() {
    return (
      <div id='calcBody'>
        <div id='screen'>
          {/* <div id='currentSum'>000</div> */}
          <div id = 'display'>{this.state.display}</div>
        </div>
        <div id='buttons'>
          <Button buttonPress = {this.buttonPress}idName='add' buttonName='&#x2b;' />
          <Button buttonPress = {this.buttonPress}idName='subtract' buttonName='&minus;' />
          <Button buttonPress = {this.buttonPress}idName='multiply' buttonName = '&times;' />
          <Button buttonPress = {this.buttonPress}idName='divide' buttonName='&divide;' />
          <Button buttonPress = {this.buttonPress}idName='one' buttonName='1' />
          <Button buttonPress = {this.buttonPress}idName='two' buttonName='2' />
          <Button buttonPress = {this.buttonPress}idName='three' buttonName='3' />
          <Button buttonPress = {this.buttonPress}idName='four' buttonName='4' />
          <Button buttonPress = {this.buttonPress}idName='five' buttonName='5' />
          <Button buttonPress = {this.buttonPress}idName='six' buttonName='6' />
          <Button buttonPress = {this.buttonPress}idName='seven' buttonName='7' />
          <Button buttonPress = {this.buttonPress}idName='eight' buttonName='8' />
          <Button buttonPress = {this.buttonPress}idName='nine' buttonName='9' />
          <Button buttonPress = {this.buttonPress}idName='zero' buttonName='0' />
          <Button buttonPress = {this.buttonPress}idName='decimal' buttonName='.' />
          <Button buttonPress = {this.buttonPress}idName='clear' buttonName='AC' />
          <Button buttonPress = {this.buttonPress}idName='equals' buttonName='=' /> 
        </div>
      </div>
    );
  }
}

export default App;
