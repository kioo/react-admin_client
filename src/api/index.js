/**
 * 包含应用中所有接口请求函数
 */
import ajax from "./ajax";
import jsonp from "jsonp";
import { message } from "antd";

// 登录接口
export const reqLogin = (username,password) => ajax('/app/login',{username,password},'GET')

export const reqAddUser = (user) => ajax('/manage/user/add',user,'POST')

// 使用 jsonp 获取 天气信息，高德的接口
export const reqWeather = (city) => {
    return new Promise((reslove,reject) => {
        const url = `http://restapi.amap.com/v3/weather/weatherInfo?city=${city}&key=b12ade33927e7c27c91d6be853b52daa`
        jsonp(url,{},(err,data)=>{
            console.log('jsonp()',err,data)
            if(!err && data.status==='1'){
                const {weather,temperature,winddirection,windpower} = data.lives[0]
                reslove({weather,temperature,winddirection,windpower})
            }else{
                //失败了
                reject(err)
                message.error('获取天气信息失败',err)
            }
        })
    })
}

// reqWeather(610100)