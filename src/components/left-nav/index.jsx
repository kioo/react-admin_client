import React, { Component } from 'react'
import { Menu, Button } from 'antd';
import {
    AppstoreOutlined,
    PieChartOutlined,
    DesktopOutlined,
    ContainerOutlined,
    MailOutlined,
} from '@ant-design/icons';

import './index.less'
import logo from '../../assets/images/logo.png'
import { Link } from 'react-router-dom'


export default class LeftNav extends Component {
    render() {
        const { SubMenu } = Menu;
        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt='logo' />
                    <h1>硅谷后台</h1>
                </Link>
                <div>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                    >
                        <Menu.Item key="/home" icon={<PieChartOutlined />}>
                            <Link to="/home">
                                <span>首页</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="/user" icon={<DesktopOutlined />}>
                            <Link to="/user">
                                用户管理
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="role" icon={<ContainerOutlined />}>
                            <Link to="/role">
                                角色管理
                            </Link>
                        </Menu.Item>
                        <SubMenu key="sub1" icon={<MailOutlined />} title="商品">
                            <Menu.Item key="/category" icon={<MailOutlined />}>
                                <Link to="/category">
                                    <span>品类管理</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="/product" icon={<MailOutlined />}>
                                <Link to="/product">
                                    <span>商品管理</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="图形图表">
                            <Menu.Item key="9">
                                <Link to="/charts/pie">
                                    <span>饼图</span>
                                </Link>
                            </Menu.Item>
                            <Menu.Item key="10">

                                <Link to="/charts/line">
                                    <span>折线图</span>
                                </Link>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </div>
            </div>
        )
    }
}
