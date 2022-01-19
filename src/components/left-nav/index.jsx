import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import { Menu } from 'antd';


import './index.less'
import logo from '../../assets/images/logo.png'
import menuList from '../../config/menuConfig';

const { SubMenu } = Menu;
class LeftNav extends Component {
    
    getMenuNodes = (menuList) => {
        const path = this.props.location.pathname
        return menuList.map(item => {
            if (!item.children) {
                return (
                    <Menu.Item key={item.key} icon={item.icon}>
                        <Link to={item.key}>
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                )
            } else {
                const cItem = item.children.find(cItem => cItem.key === path)
                if(cItem){
                    this.openKey = item.key
                }
                return (
                <SubMenu key={item.key} icon={item.icon} title={item.title}>
                    {this.getMenuNodes(item.children)}
                </SubMenu>
                )

            }

        })
    }
    componentWillMount(){
        this.menuNodes =this.getMenuNodes(menuList)
    }

    render() {
       const path = this.props.location.pathname
       // 得到需要打开菜单项的key
       const openKey = this.openKey
        return (
            <div className='left-nav'>
                <Link to='/' className='left-nav-header'>
                    <img src={logo} alt='logo' />
                    <h1>硅谷后台</h1>
                </Link>
                <div>
                    <Menu
                        defaultOpenKeys={[openKey]}
                        selectedKeys={[path]}
                        
                        mode="inline"
                        theme="dark"
                    >
                        {
                           this.menuNodes
                        }
                    </Menu>
                </div>
            </div>
        )
    }
}
export default withRouter(LeftNav)