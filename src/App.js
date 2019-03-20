import React, { Component } from 'react';
import './App.css';
import Button from './components/Button';
import Calculator from "./images/calculator.svg";

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
        <img id ='calcImage' src={Calculator} alt='little professor calculator'/>
        <div id='screen'>
          <div id = 'display'>{this.state.display}</div>
        </div>
        <div id='buttons'>
          <Button buttonDisplay = '1' buttonPress = {this.displayNumber} idName='one' buttonName='1' />
          <Button buttonDisplay = '2' buttonPress = {this.displayNumber} idName='two' buttonName='2' />
          <Button buttonDisplay = '3' buttonPress = {this.displayNumber} idName='three' buttonName='3' />
          <Button buttonDisplay = '&divide;' buttonPress = {this.displayOperator}idName='divide' buttonName='/' />
          <Button buttonDisplay = '4' buttonPress = {this.displayNumber} idName='four' buttonName='4' />
          <Button buttonDisplay = '5' buttonPress = {this.displayNumber} idName='five' buttonName='5' />
          <Button buttonDisplay = '6' buttonPress = {this.displayNumber} idName='six' buttonName='6' />
          <Button buttonDisplay = '&times;' buttonPress = {this.displayOperator}idName='multiply' buttonName = '*'/>
          <Button buttonDisplay = '7' buttonPress = {this.displayNumber} idName='seven' buttonName='7' />
          <Button buttonDisplay = '8' buttonPress = {this.displayNumber} idName='eight' buttonName='8' />
          <Button buttonDisplay = '9' buttonPress = {this.displayNumber} idName='nine' buttonName='9' />
          <Button buttonDisplay = '&minus;' buttonPress = {this.displayOperator}idName='subtract' buttonName='-' />
          <Button buttonDisplay = '.' buttonPress = {this.displayDecimal} idName='decimal' buttonName='.' />
          <Button buttonDisplay = '0' buttonPress = {this.displayNumber} idName='zero' buttonName='0' />
          <Button buttonDisplay = 'AC' buttonPress = {this.clearCalculator} idName='clear' buttonName='AC' />
          <Button buttonDisplay = '&#x2b;' buttonPress = {this.displayOperator}idName='add' buttonName='+' />
          <Button buttonDisplay = '&#x3d;' buttonPress = {this.equateSum} idName='equals' buttonName='=' /> 
        </div>
        <p className='professor'>"LITTLE PROFESSOR"</p>
      </div>
    );
  }
}

export default App;
