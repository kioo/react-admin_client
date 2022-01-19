import React, { Component } from 'react'
import memoryUtils from '../../utils/memoryUtils'
import './index.less'
import { formateDate } from '../../utils/dateUtils'
import { reqWeather } from '../../api'

export default class Header extends Component {
    
    state ={
        currentTime: formateDate(Date.now()),
        weather:'',
        temperature:'',
        winddirection:'',
        windpower:'',
    }

    /**
     * 获取当前格式化后的时间并放入 state 中
     */
    getTime = ()=>{
        setInterval(()=>{
            const currentTime = formateDate(Date.now())
            this.setState({currentTime:currentTime})
        })
    }

    /**
     * 获取天气信息并放入state 中
     */
    getWeather = async () =>{
        const {weather,temperature,winddirection,windpower} = await reqWeather('610100')
        console.log("weather",weather)
        this.setState({weather:weather,temperature:temperature,winddirection:winddirection,windpower:windpower})
    }

    /**
     * 生命周期的函数，当前组件挂载完成后调用两个初始化方法，然后两个方法会改变 state 值，接着该方法又被调用，形成互相调用
     */
    componentDidMount(){
        this.getTime()
        this.getWeather()
    }

    render() {
        // 获取全局内存中的用户名称
        const username = memoryUtils.user.username
        // 获取 state 中的值
        const {weather,currentTime,winddirection,windpower} = this.state
        return (
            <div className='header'>
                <div className='header-top'>
                    <span>欢迎 ，{username}</span>
                    退出
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>首页</div>
                    <div className='header-bottom-right'>
                        <span>当前时间：{currentTime}</span>
                        <span>天气：{weather}</span>
                        <span>风向：{winddirection}</span>
                        <span>风力：{windpower}</span>
                    </div>
                </div>
            </div>
        )
    }
}
