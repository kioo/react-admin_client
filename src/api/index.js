/**
 * 包含应用中所有接口请求函数
 */
import ajax from "./ajax";
// 登录接口
export const reqLogin = (username,password) => ajax('/app/login',{username,password},'GET')

export const reqAddUser = (user) => ajax('/manage/user/add',user,'POST')