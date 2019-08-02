import React from "react";
import './StudyNote.css'
import 'animate.css'
import PageButton from "./PageButton";



const studydata = [
  { key: '01', title: 'React官方文档', author: 'Facebook', url: 'https://react.docschina.org/' },
  { key: '02', title: 'Element官方文档', author: 'Element-UI', url: 'https://element.eleme.cn/2.0/#/zh-CN' },
  { key: '03', title: 'Vue官方文档', author: '尤雨溪', url: 'https://cn.vuejs.org/' },
  { key: '04', title: 'Bootstrap中文网', author: 'Twitter', url: 'https://www.bootcss.com/' },
  { key: '05', title: 'Git 安装和使用教程', author: '懵懂的菜鸟', url: 'https://www.cnblogs.com/smuxiaolei/p/7484678.html' },
  { key: '06', title: '冴羽的博客(Javascript文章)', author: '冴羽', url: 'https://github.com/mqyqingfeng/Blog?files=1' },
  { key: '07', title: 'Github官网', author: 'Linux', url: 'https://github.com/' },
  { key: '08', title: '一个优秀前端都应该阅读这些文章', author: '	Nealyang', url: 'https://github.com/Nealyang/PersonalBlog/issues/48' },
  { key: '09', title: '什么是回流和重绘，有什么区别？', author: '你滴止痛药儿', url: 'https://www.jianshu.com/p/e081f9aa03fb' },
  { key: '10', title: '更好的纯CSS滚动指示器技术实现', author: '张鑫旭', url: 'https://www.zhangxinxu.com/wordpress/2019/06/better-css-scroll-indicator/' },
  { key: '11', title: 'word-break、word-wrap、white-space', author: '顾二凡', url: 'https://juejin.im/post/5b8905456fb9a01a105966b4' },
  { key: '12', title: 'JavaScript 进阶问题列表', author: ' LazyChenY', url: 'https://github.com/lydiahallie/javascript-questions/blob/master/README-zh_CN.md?tdsourcetag=s_pctim_aiomsg' },
  { key: '13', title: '这一次，彻底弄懂 JavaScript 执行机制', author: 'ssssyoki', url: 'https://juejin.im/post/59e85eebf265da430d571f89?tdsourcetag=s_pctim_aiomsg' },
  { key: '14', title: '你未必知道的49个CSS知识点', author: '老姚', url: 'https://juejin.im/post/5d3eca78e51d4561cb5dde12' },
  { key: '15', title: 'VUE组件汇总', author: '龙逸轩', url: 'https://juejin.im/post/5af16a2cf265da0b8636353b' },
  {key:'16',title:'Vue学习看这篇就够',author:'juejin.com',url:'https://juejin.im/entry/5a54b747518825734216c3df'}
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
    }, function () {
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
      <div className="back">
        <div className='list'>{list}</div>
        <PageButton {...this.state} pageNext={this.pageNext}></PageButton>
      </div>
    )
  }
}
export default StudyNote