import React from 'react';
import { BrowserRouter as Router,Link } from 'react-router-dom';
import { Menu } from "element-react";
import 'element-theme-default';
import './Nav.css'
class Nav extends React.Component {
    onSelect() {

    }

    render() {
        return (
            <Router forceRefresh="ture">
                <Menu defaultActive="1" className="el-menu-demo" mode="horizontal" onSelect={this.onSelect.bind(this)}>
                   <Link to="/"> <Menu.Item index="1">首页</Menu.Item></Link>
                    <Menu.SubMenu index="2" title="我的工作台" >
                        <Menu.Item index="2-1"><Link to='/Jsq'>计算器</Link></Menu.Item>
                        <Menu.Item index="2-2"><Link to='/StudyNote'>学习资料</Link></Menu.Item>
                    </Menu.SubMenu>
                    <Menu.Item index="3">关于</Menu.Item>
                </Menu>
            </Router>
        )
    }
}




export default Nav