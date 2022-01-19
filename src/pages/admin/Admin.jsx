import React, { Component } from 'react'
import { Redirect,Route,Switch} from 'react-router-dom'
import { Layout } from 'antd';


import memoryUtils from '../../utils/memoryUtils'
import LeftNav from '../../components/left-nav';
import Header from '../../components/header';
import Home from '../home';
import Role from '../role';
import User from '../user';
import Product from '../product';
import Bar from '../charts/bar';
import Line from '../charts/line';
import Pie from '../charts/pie';
import Category from '../category';



export default class Admin extends Component {

    render() {
        const { Footer, Sider, Content } = Layout;

        const user = memoryUtils.user
        console.log("user is ", user)
        // 如果内存中没有存储user，说明没有登录
        if (!user) {
            console.log("user 不存在，跳转到登录页面 ", user)
            // 自动跳转到登录页面（在render() 中操作
            return <Redirect to="/login" />
        }
        return (
            <Layout style={{ height: '100%' }}>
                <Sider>
                    <LeftNav/>
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{margin:'20px',backgroundColor:'#fff'}}>
                        <Switch>
                            <Route path='/home' component={Home}/>
                            <Route path='/category' component={Category}></Route>
                            <Route path='/product' component={Product}></Route>
                            <Route path='/role' component={Role}></Route>
                            <Route path='/user' component={User}></Route>
                            <Route path='/charts/bar' component={Bar}></Route>
                            <Route path='/charts/line' component={Line}></Route>
                            <Route path='/charts/pie' component={Pie}></Route>
                            <Redirect to='/home'/> 
                        </Switch>
                    </Content>
                    <Footer style={{textAlign:'center',color:'#cccc'}}>推荐使用chrome</Footer>
                </Layout>
            </Layout>
        )
    }
}
