
import { message } from "antd"
import axios from "axios"

/**
 * 
 * 统一处理异常
 * 在外层包裹一个promise 对象，在请求出错时不 reject
 */
export default function ajax(url, data={},type='GET'){
   return new Promise((resolve, reject) => {
      let promise
      // 1. 执行异步 ajax 请求
      if(type==='GET'){
         promise =  axios.get(url,{params: data})
      }else{
         promise = axios.post(url,data)
      }
      promise.then(response => {
         resolve(response.data)
      }).catch(error => {
         message.error('请求出错了： '+error.message)
      })
   })
   
}
