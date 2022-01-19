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

    getTime = ()=>{
        setInterval(()=>{
            const currentTime = formateDate(Date.now())
            this.setState({currentTime:currentTime})
        })
    }

    getWeather = async () =>{
        const {weather,temperature,winddirection,windpower} = await reqWeather('610100')
        console.log("weather",weather)
        this.setState({weather:weather,temperature:temperature,winddirection:winddirection,windpower:windpower})
    }
    componentDidMount(){
        this.getTime()
        // 获取当前天气
        this.getWeather()
    }

    render() {
        const username = memoryUtils.user.username
        const {weather,currentTime,winddirection,windpower} = this.state
        return (
            <div className='header'>
                <div className='header-top'>
                    <span>欢迎 ，{username}</span>
                    退出
                </div>
                <div className='header-bottom'>
                    <div className='header-bottom-left'>wang</div>
                    <div className='header-bottom-right'>
                        <span>{currentTime}</span>
                        <span>{weather}</span>
                        <span>{winddirection}</span>
                        <span>{windpower}</span>
                    </div>
                </div>
            </div>
        )
    }
}
