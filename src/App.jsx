import React, { Component } from 'react'
import 'antd/dist/antd.less';
import {BrowserRouter,Route,Switch} from 'react-router-dom'

import Login from './pages/login/Login';
import Admin from './pages/admin/Admin';



export default class App extends Component {


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
