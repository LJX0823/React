import React from 'react'
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import 'animate.css'
import './PhoneTest.css'
import img from '../../images/tick.png'

class PhoneTest extends React.Component {
  constructor(props) {
    super(props)
    this.countDown = this.countDown.bind(this)
    this.state = {
      count: 60,
      flag: true,
      msg: '获取验证码',
      tick:'',
      isCheck:true,
      isClick:true,
      isIcon:false,
    }
  }
  countDown() {
    this.setState({isClick:false})
    if (this.state.count === 1) {
      this.setState({
        tel:'',
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
  telCheck(e){
       
       this.setState({tel:e.target.value},()=>{
        let reg= /^1[3456789]\d{9}$/;
         if(!reg.test(this.state.tel)){
           this.setState({
             tick:'手机号码格式不正确',
             isCheck:false,
             isIcon:false,
          })
         }
         else
           this.setState({
             tick:'输入正确',
             isCheck:true,
             isIcon:true
            })
       });
       
       
  }

  render() {
   
    return (
      <div>
        <label className='form-phone'>手机号</label>
        <input type='text' size="11"  className={this.state.isCheck ? 'tel' : 'tel checking'} onChange={this.telCheck.bind(this)} />
        < img src={img} alt='' className={this.state.isIcon ? 'icon' : 'hide' } />
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
        <p key="amache" className="animated swing" onClick={this.reSend.bind(this)}>{
          this.state.flag
          ? ''
          : '没收到验证码 ?'    }</p>
           </ReactCSSTransitionGroup>
      </div>
    )


  }
}
export default PhoneTest 