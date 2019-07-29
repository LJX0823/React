import React from "react";
import './StudyNote.css'
import PageButton from "./PageButton";


const studydata = [
  { key: '01', title: 'React官方文档', author: 'Facebook', url: 'https://react.docschina.org/' },
  { key: '02', title: 'Element官方文档', author: 'Element-UI', url: 'https://element.eleme.cn/2.0/#/zh-CN' },
  { key: '03', title: 'Vue官方文档', author: '尤雨溪', url: 'https://cn.vuejs.org/' },
  { key: '04', title: 'Bootstrap中文网', author: 'Twitter', url: 'https://www.bootcss.com/' },
  { key: '05', title: 'Git 安装和使用教程', author: '懵懂的菜鸟', url: 'https://www.cnblogs.com/smuxiaolei/p/7484678.html' },
  { key: '06', title: '冴羽的博客(Javascript文章)', author: '冴羽', url: 'https://github.com/mqyqingfeng/Blog?files=1' }
]

class StudyNote extends React.Component {
  constructor(props) {
    super(props);
    this.pageNext = this.pageNext.bind(this);
    this.setPage = this.setPage.bind(this);
    this.state = {
      totalDate: studydata, //总数据
      indexlist: [],  // 当前的页面数据
      current: 1,   // 当前页
      pagesize: 5,  // 每页显示条数
      goValue: 0, // 要去的条数
      totalpage: 0 // 总页数
    }
  }
  componentWillMount() {
    this.setState({
      totalpage: Math.ceil(this.state.totalDate.length / this.state.pagesize)
    },function() {
      console.log(this.state.totalpage)
    })
    
    this.pageNext(this.state.goValue);
  }
  pageNext(num) {
    this.setPage(num);
  }
  setPage(num) {
    this.setState({
      indexlist: (this.state.totalDate.slice(num, num + this.state.pagesize))
    })
  }

  render() {
    const list = this.state.indexlist.map(({ key, title, author, url }) =>
      <div key={key} className='note'>
        <span className='tit'><a href={url}>{title}</a></span>
        <span className='author'><b>作者：{author}</b></span>
      </div>
    )
    return (
      <div className="back">{list}
        <PageButton totalpage={this.state.totalpage} current={this.state.current} pagesize={this.state.pagesize} pageNext={this.pageNext}></PageButton>
      </div>
    )
  }
}
export default StudyNote