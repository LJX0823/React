import React, { Component } from "react";
import './Jsq.css';
function Show(props) {
  return (
    <h1 className='screen'>{props.show}</h1>
  )
}
class Jsq extends Component {
  constructor(props) {
    super(props);
    this.handelClick = this.handelClick.bind(this);
    this.signClick = this.signClick.bind(this);
    this.comPute = this.comPute.bind(this);
    this.cleAr = this.cleAr.bind(this);
    this.BackSpace = this.BackSpace.bind(this);
    this.keyUp = this.keyUp.bind(this)
    this.inputRef = React.createRef();

    this.state = { value: '0', sign: '', numone: '', numtwo: '', output: '' }
  }
  handelClick(e) {
    // eslint-disable-next-line
    if (this.state.value === '0') {
      this.setState({ value: e.target.value })
    }
    else
      this.setState({ value: this.state.value + e.target.value });
    this.inputRef.current.focus();
  }
  keyUp(e) {
    console.log(e.keyCode)
    switch (e.keyCode) {
      case 96:

        if (this.state.value === '0') {
          this.setState({ value: '0' })
        }
        else {
          this.setState({ value: this.state.value + '0' })
        }
        break;
      case 97:
        if (this.state.value === '0') {
          this.setState({ value: '1' })
        }
        else {
          this.setState({ value: this.state.value + '1' })
        }
        break;
      case 98:
        if (this.state.value === '0') {
          this.setState({ value: '2' })
        }
        else {
          this.setState({ value: this.state.value + '2' })
        }
        break;
      case 99:
        if (this.state.value === '0') {
          this.setState({ value: '3' })
        }
        else {
          this.setState({ value: this.state.value + '3' })
        }
        break;
      case 100:
        if (this.state.value === '0') {
          this.setState({ value: '4' })
        }
        else {
          this.setState({ value: this.state.value + '4' })
        }
        break;
      case 101:
        if (this.state.value === '0') {
          this.setState({ value: '5' })
        }
        else {
          this.setState({ value: this.state.value + '5' })
        }
        break;
      case 102:
        if (this.state.value === '0') {
          this.setState({ value: '6' })
        }
        else {
          this.setState({ value: this.state.value + '6' })
        }
        break;
      case 103:
        if (this.state.value === '0') {
          this.setState({ value: '7' })
        }
        else {
          this.setState({ value: this.state.value + '7' })
        }
        break;
      case 104:
        if (this.state.value === '0') {
          this.setState({ value: '8' })
        }
        else {
          this.setState({ value: this.state.value + '8' })
        }
        break;
      case 105:
        if (this.state.value === '0') {
          this.setState({ value: '9' })
        }
        else {
          this.setState({ value: this.state.value + '9' })
        }
        break;
      case 8:
        this.BackSpace();
        break;
      case 13:
        this.comPute();
        break;
      case 106:
        this.setState({ sign: 'multiply' })
        // eslint-disable-next-line
        this.state.numone = this.state.value;
        // eslint-disable-next-line
        this.state.value = '0';
        break;
      case 111:
        this.setState({ sign: 'divide' })
        // eslint-disable-next-line
        this.state.numone = this.state.value;
        // eslint-disable-next-line
        this.state.value = '0';
        break;
      case 107:
        this.setState({ sign: 'add' })
        // eslint-disable-next-line
        this.state.numone = this.state.value;
        // eslint-disable-next-line
        this.state.value = '0';
        break;
      case 109:
        this.setState({ sign: 'subtract' })
        // eslint-disable-next-line
        this.state.numone = this.state.value;
        // eslint-disable-next-line
        this.state.value = '0';
        break;
      case 48:
        if (this.state.value === '0') {
          this.setState({ value: '0' })
        }
        else {
          this.setState({ value: this.state.value + '0' })
        }
        break;
      case 49:
        if (this.state.value === '0') {
          this.setState({ value: '1' })
        }
        else {
          this.setState({ value: this.state.value + '1' })
        }
        break;
      case 50:
        if (this.state.value === '0') {
          this.setState({ value: '2' })
        }
        else {
          this.setState({ value: this.state.value + '2' })
        }
        break;
      case 51:
        if (this.state.value === '0') {
          this.setState({ value: '3' })
        }
        else {
          this.setState({ value: this.state.value + '3' })
        }
        break;
      case 52:
        if (this.state.value === '0') {
          this.setState({ value: '4' })
        }
        else {
          this.setState({ value: this.state.value + '4' })
        }
        break;
      case 53:
        if (this.state.value === '0') {
          this.setState({ value: '5' })
        }
        else {
          this.setState({ value: this.state.value + '5' })
        }
        break;
      case 54:
        if (this.state.value === '0') {
          this.setState({ value: '6' })
        }
        else {
          this.setState({ value: this.state.value + '6' })
        }
        break;
      case 55:
        if (this.state.value === '0') {
          this.setState({ value: '7' })
        }
        else {
          this.setState({ value: this.state.value + '7' })
        }
        break;
      case 56:
        if (this.state.value === '0') {
          this.setState({ value: '8' })
        }
        else {
          this.setState({ value: this.state.value + '8' })
        }
        break;
      case 57:
        if (this.state.value === '0') {
          this.setState({ value: '9' })
        }
        else {
          this.setState({ value: this.state.value + '9' })
        }
        break;
      default:
        break;
    }
  }
  signClick(e) {
    this.setState({ sign: e.target.value })
    // eslint-disable-next-line
    this.state.numone = this.state.value;
    // eslint-disable-next-line
    this.state.value = '0';
    this.inputRef.current.focus();
  }
  comPute() {
    if (this.state.sign === '') {
      return false;
    }
    this.inputRef.current.focus();
    // eslint-disable-next-line
    this.state.numtwo = this.state.value;
    switch (this.state.sign) {
      case 'add':
        // eslint-disable-next-line
        this.state.output = parseFloat(this.state.numone) + parseFloat(this.state.numtwo);
        // this.state.value=this.state.output;

        break;
      case 'subtract':
        // eslint-disable-next-line
        this.state.output = this.state.numone - this.state.numtwo;
        break;
      case 'multiply':
        // eslint-disable-next-line
        this.state.output = this.state.numone * this.state.numtwo;
        break;
      case 'divide':
        if (this.state.numtwo === '0') {
          // eslint-disable-next-line
          this.state.output = "Wdnmd真就除0呀,重来！";
          setTimeout(() => {
            this.cleAr()
          }, 1000);
        }
        else {
          // eslint-disable-next-line
          this.state.output = this.state.numone / this.state.numtwo;
        }
        break;
      case 'pow':
        // eslint-disable-next-line
        this.state.output = Math.pow(this.state.numone, this.state.numtwo)
        break;
      default:
        break;

    }
    if (this.state.output === 0)
      this.setState({ value: '0' });
    else
      this.setState({ value: this.state.output })
  }
  cleAr() {
    this.setState({ value: '0', sign: '', numone: '', numtwo: '', output: '' });
    this.inputRef.current.focus();
  }
  BackSpace() {

    if (this.state.value.length > 1)
      this.setState({ value: this.state.value.slice(0, -1) })
    else
      this.setState({ value: '0' })
    this.inputRef.current.focus();
  }
  componentDidMount() {
    this.inputRef.current.focus()
  }

  render() {

    return (
      <div className="board" draggable="true">
        <Show show={this.state.value} />
        <div className="numboard" onKeyUp={this.keyUp}  >
          <div className="line1" >
            <button value="7" onClick={this.handelClick}>7</button>
            <button value="8" onClick={this.handelClick}>8</button>
            <button value="9" onClick={this.handelClick}>9</button>
          </div>
          <div className="line2">
            <button value="4" onClick={this.handelClick}>4</button>
            <button value="5" onClick={this.handelClick}>5</button>
            <button value="6" onClick={this.handelClick}>6</button>
          </div>
          <div className="line3">
            <button value="1" onClick={this.handelClick}>1</button>
            <button value="2" onClick={this.handelClick}>2</button>
            <button value="3" onClick={this.handelClick}>3</button>
          </div>
          <div className="line4">
            <button value="pow" onClick={this.signClick}>POW</button>
            <button value="0" onClick={this.handelClick}>0</button>
            <button ref={this.inputRef} className="focus"> </button>
          </div>
        </div>
        <div className="signboard">
          <div className="sign1">
            <button value='add' onClick={this.signClick}>+</button>
            <button value='subtract' onClick={this.signClick}>-</button>
          </div>
          <div className="sign2">
            <button value='multiply' onClick={this.signClick}>*</button>
            <button value="divide" onClick={this.signClick}>/</button>
          </div>
          <div className="sign3">
            <button onClick={this.comPute}>=</button>
            <button onClick={this.cleAr}>C</button>
          </div>
          <div className="sign4">
            <button onClick={this.BackSpace}>Backspace</button>
          </div>
        </div>



      </div>
    )


  }
}

export default Jsq