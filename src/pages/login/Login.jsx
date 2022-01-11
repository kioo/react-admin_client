import React, { Component } from 'react'
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import {reqLogin} from '../../api/index.js'
import axios from 'axios';

import './Login.less'
import logo from './images/logo.png'

export default class Login extends Component {
    onFinish = (values) => {
        console.log('Received values of form: ', values);
        const {username,password} = values
        reqLogin(username,password)
        // axios.get(`/app/login`).then(
        //     response => {
        //         console.log(response)
        //         this.props.updateAppState({isLoading:false,users:response.data.items})
        //     },
        //     error => {
        //         console.log(error)
        //         this.props.updateAppState({isLoading:false,err:error.message})
        //     }
        // )
      };


    render() {
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
                            rules={[{ required: true, message: '请输入用户名!' },{ max: 3, message: '输入长度不能超过3个字符' }]}
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
