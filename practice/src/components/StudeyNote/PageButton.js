import React from 'react'
import './PageButton.css'

class PageButton extends React.Component {
  constructor(props) {
    super(props)
    this.setNext = this.setNext.bind(this);
    this.setUp = this.setUp.bind(this);
    this.state = {
      num: 0,
      pagenum: this.props.current
    }
  }
  setNext() {
    if (this.state.pagenum < this.props.totalpage) {
      this.setState({
        num: this.state.num + this.props.pagesize,
        pagenum: this.state.pagenum + 1
      }, function () {
        console.log(this.state)
        this.props.pageNext(this.state.num);
      })
    }
  }
  setUp() {
    if (this.state.pagenum > 1) {
      this.setState({
        num: this.state.num - this.props.pagesize,
        pagenum: this.state.pagenum - 1
      }, function () {
        console.log(this.state);
        this.props.pageNext(this.state.num)

      })
    }
  }
  render() {
    return (
      <div className="change_page">
        <span className="button" onClick={this.setUp} >上一页</span>
        <span>{this.state.pagenum}页/ {this.props.totalpage}页</span>
        <span className="button" onClick={this.setNext}>下一页</span>
      </div>
    )
  }
}
export default PageButton