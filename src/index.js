import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez',
};

// --------------------------

// 在 JSX 中嵌入表达式；JSX 也是一个表达式
// 在 JSX 中，大括号内可以放置任何有效的 JavaScript 表达式
const element = (
  <h1>Hello, {formatName(user)}!</h1>
);
const myElement = (
  <div tabIndex="0"
    className={user.lastName}
  >sdfsfdsf {user.firstName}{element}</div>
);

// ------------------------
// 使用React.createElement()对JSX取值后得到 JavaScript 对象
const ele = React.createElement(       // 代表JSX
  'h1',
  {
    className: 'trade'
  },
  'xinjian'
);

ReactDOM.render(            // 第一个参数可以是JSX表达式，或组件
  ele,
  document.getElementById('root')
);