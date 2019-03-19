import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';

// using math.js as an alternative to native eval function
const math = require('mathjs');



class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      display: '0',
      // this state allows control over how many decimal points can be entered
      decimalDisplayed: false
    }
  }
  
  // clears the calculator display
  clearCalculator = () => {
    this.setState({display: '0',
                   decimalDisplayed: false});
  }
  
  // function controls how numbers are displayed if there is just a 0 in the calculator display
  displayNumber = (e) => {
    if(e.target.value === '0'){
      this.setState({display: this.state.display === '0' ? '0' : this.state.display + e.target.value});
    } else {
      this.setState({display: this.state.display === '0' ? e.target.value : this.state.display + e.target.value});
    }  
  } 

  // function to enter only one decimal place per number
  displayDecimal = () => {
    if(this.state.decimalDisplayed === false){
      this.setState({display: this.state.display + '.',
                     decimalDisplayed: true
                    });
    }
  }

  // function controls how operators can be used.  Only one between two numbers.
  displayOperator = (e) => {
    let operator = e.target.value;
    // string manipulation to check the last digit in the display
    let lastDigit = this.state.display.slice(-1);

    // if the last entered digit was an operator then it replaces that operator with a new operator or if not then adds the operator to the display
    if(lastDigit === '*' || lastDigit === '-' || lastDigit === '/' || lastDigit === '+'){
      this.setState({display: this.state.display.slice(0, -1) + operator});
    } else {
      this.setState({display: this.state.display + operator});
    }

    // once an operator has been pressed then this allows the decimal key to become active again
    this.setState({decimalDisplayed: false});
  }
      
  // uses math.js to evaluate the equation
  equateSum = () => {
    let num = math.eval(this.state.display).toString();
    this.setState({display: num, displayDecimal: true});
  }

  render() {
    return (
      <div id='calcBody'>
        <div id='screen'>
          {/* <div id='currentSum'>000</div> */}
          <div id = 'display'>{this.state.display}</div>
        </div>
        <div id='buttons'>
          <Button buttonPress = {this.displayOperator}idName='add' buttonName='+' />
          <Button buttonPress = {this.displayOperator}idName='subtract' buttonName='-' />
          <Button buttonPress = {this.displayOperator}idName='multiply' buttonName = '*'/>
          <Button buttonPress = {this.displayOperator}idName='divide' buttonName='/' />
          <Button buttonPress = {this.displayNumber} idName='one' buttonName='1' />
          <Button buttonPress = {this.displayNumber} idName='two' buttonName='2' />
          <Button buttonPress = {this.displayNumber} idName='three' buttonName='3' />
          <Button buttonPress = {this.displayNumber} idName='four' buttonName='4' />
          <Button buttonPress = {this.displayNumber} idName='five' buttonName='5' />
          <Button buttonPress = {this.displayNumber} idName='six' buttonName='6' />
          <Button buttonPress = {this.displayNumber} idName='seven' buttonName='7' />
          <Button buttonPress = {this.displayNumber} idName='eight' buttonName='8' />
          <Button buttonPress = {this.displayNumber} idName='nine' buttonName='9' />
          <Button buttonPress = {this.displayNumber} idName='zero' buttonName='0' />
          <Button buttonPress = {this.displayDecimal} idName='decimal' buttonName='.' />
          <Button buttonPress = {this.clearCalculator} idName='clear' buttonName='AC' />
          <Button buttonPress = {this.equateSum} idName='equals' buttonName='=' /> 
        </div>
      </div>
    );
  }
}

export default App;
