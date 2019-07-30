import React from 'react'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import 'animate.css'
import './PhoneTest.css'

class PhoneTest extends React.Component {
  constructor(props) {
    super(props)
    this.countDown = this.countDown.bind(this)
    this.state = {
      count: 60,
      flag: true,
      msg: '获取验证码',
      isClick:true,
    }
  }
  countDown() {
    this.setState({isClick:false})
    if (this.state.count === 1) {
      this.setState({
        count: 60,
        flag: true,
        msg: '再次获取验证码'
      });
    } else {
      this.setState({
        count: this.state.count - 1,
        flag: false,
      });
     
        setTimeout(this.countDown.bind(this), 1000);
      
    }
  }
  reSend(){
     this.setState({
       flag:true,
       count:60
     })
  }

  render() {
    return (
      <div>
        <button className='test' onClick={this.state.isClick ? this.countDown : ''} >
          {
            this.state.flag
              ? this.state.msg
              : `${this.state.count} 秒后重发`
          }
        </button>
        <ReactCSSTransitionGroup
          transitionEnter={true}
          transitionLeave={true}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1500}
          transitionName="animated"
        >
        <p key="amache" className="animated fadeInLeftBig" onClick={this.reSend.bind(this)}>{
          this.state.flag
          ? ''
          : '没收到验证码 ?'    }</p>
           </ReactCSSTransitionGroup>
      </div>
    )


  }
}
export default PhoneTest 