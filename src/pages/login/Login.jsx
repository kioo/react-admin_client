import React, { Component } from 'react'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {reqLogin} from '../../api/index.js'

import './Login.less'
import logo from '../../assets/images/logo.png'
import memoryUtils from '../../utils/memoryUtils.js';
import storageUtils from '../../utils/storageUtils.js';
import { Redirect } from 'react-router-dom';
/**
 * 使用异步 箭头函数入参前加上 async 关键字，在需要异步的方法上放 await 关键字，用try 捕捉异常情况
 */
export default class Login extends Component {
    // 异步写法
    onFinish = async (values) => {
        console.log('Received values of form: ', values);
        const {username,password} = values
       
        const result = await reqLogin(username,password);
        console.log("成功了",result)
        if(result.code === 0){
            // 登录成功
            message.success("登录成功")
            const user = result.data
            memoryUtils.user = user
            storageUtils.saveUser(user)
            this.props.history.replace("/admin")
        }else{
            // 登录失败
            message.error("登录失败")
        }
        
    };
    // 同步写法
    // onFinish = (values) => {
    //     console.log('Received values of form: ', values);
    //     const {username,password} = values
    //     reqLogin(username,password).then(response =>{
    //         console.log('成功了',response.data)
    //     }).catch(error =>{
    //         console.log("失败了",error)
    //     })
    // };


    render() {
        // 实现自动登录功能
        const user = memoryUtils.user
        if(user!==''){
            return <Redirect to='/admin'/>
        }
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>React 后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' },{ max: 10, message: '输入长度不能超过3个字符' }]}
                        >
                            <Input prefix={<UserOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25)'}} />} placeholder="用户名" />
                        </Form.Item>
                        <Form.Item
                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" style={{color:'rgba(0,0,0,.25)'}}/>}
                                type="password"
                                placeholder="密码"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="reset" className="login-form-button">
                                重置
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
