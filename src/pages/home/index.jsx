import React, { Component } from 'react'
import { formateDate } from '../../utils/dateUtils'
import { reqWeather } from '../../api'

export default class Home extends Component {

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
        this.getWeather()
    }
    
    render() {
        const {weather,currentTime,winddirection,windpower} = this.state

        return (
            <div>
                 <div >
                        <span>当前时间：{currentTime}</span>
                        <span>天气：{weather}</span>
                        <span>风向：{winddirection}</span>
                        <span>风力：{windpower}</span>
                    </div>
            </div>
        )
    }
}
