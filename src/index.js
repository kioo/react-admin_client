import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';

import App from './App';

import storageUtils from './utils/storageUtils';
import memoryUtils from './utils/memoryUtils';

// 读取 local 中保存的user保存到内存中
const user = storageUtils.getUser()
// console.log("刷新后重新获取用户信息：",user)
memoryUtils.user = user

ReactDOM.render(
    <App />,
  document.getElementById('root')
);

