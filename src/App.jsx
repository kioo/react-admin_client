import React, { Component } from 'react'
import {message,Button} from 'antd'
import 'antd/dist/antd.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom'



import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';



export default class App extends Component {

  handleClick = () =>{
    message.success("按钮点击成功。。")
  }


  render() {
    return (
      <BrowserRouter>
       <Switch>
          <Route path="/login" component={Login}></Route>
          <Route path="/admin" component={Admin}></Route>
       </Switch>
      </BrowserRouter >
    )
  }
} 
