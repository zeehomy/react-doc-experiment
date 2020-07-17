import React from 'react';
import ReactDOM from 'react-dom';

// function formatName(user) {
//   return user.firstName + ' ' + user.lastName;
// }

// const user = {
//   firstName: 'Harper',
//   lastName: 'Perez',
// };

// --------------------------

// 在 JSX 中嵌入表达式；JSX 也是一个表达式
// 在 JSX 中，大括号内可以放置任何有效的 JavaScript 表达式
// const element = (
//   <h1>Hello, {formatName(user)}!</h1>
// );
// const myElement = (
//   <div tabIndex="0"
//     className={user.lastName}
//   >sdfsfdsf {user.firstName}{element}</div>
// );

// ------------------------
// 使用React.createElement()对JSX取值后得到 JavaScript 对象
// const ele = React.createElement(       // 代表JSX
//   'h1',
//   {
//     className: 'trade'
//   },
//   'xinjian'
// );

// ReactDOM.render(            // 第一个参数可以是JSX表达式，或组件
//   ele,
//   document.getElementById('root')
// );

// -------------------------------
// 元素渲染
// function tick() {
//   const element = (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   ReactDOM.render(element, document.getElementById('root'));
// }

// setInterval(tick, 1000);

// -------------------------------
// props的attribute和children
// function Welcome(props) {
//   return <h1>Hello, {props.name}{props.children}</h1>;
// }

// const element = (
//   <Welcome name="Sara">
//     <span>sss</span>
//   </Welcome>
// );
// ReactDOM.render(
//   element,
//   document.getElementById('root')
// );

// ---------------------------------
// 组合组件
// function Welcome(props) {
//   return <h1>Hello, {props.name}{props.children}</h1>;
// }

// function App() {
//   return (
//     <div>
//       <Welcome name="Sara">
//         <span> sss314</span>
//       </Welcome>
//       <Welcome name="Cahal" />
//       <Welcome name="Edite" />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// --------------------------------------
// 提取组件
// function Avatar(props) {
//   return (
//     <img className="Avatar"
//       src={props.user.avatarUrl}
//       alt={props.user.name}
//     />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">
//         {props.user.name}
//       </div>
//     </div>
//   );
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author}></UserInfo>
//       <div className="Comment-text">
//         {props.text}
//       </div>
//       <div className="Comment-date">
//         {formatDate(props.date)}
//       </div>
//     </div>
//   );
// }

// ------------------------------------
// 封装Clock 
// function Clock(props) {
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {props.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }

// function tick() {
//   ReactDOM.render(
//     <Clock date={new Date()}/>,
//     document.getElementById('root')
//   );
// }
// setInterval(tick, 1000);

// 加入state使只写一次代码(有自己的状态)和生命周期钩子
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);             // 将 props 传递到父类的构造函数中
//     this.state = {
//       date: new Date()
//     };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.updateDate(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   updateDate() {
//     this.setState({
//       date: new Date()
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Hello, world!</h1>
//         <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <Clock />,
//   document.getElementById('root')
// );

// -------------------------------------
// 每个组件都是真正独立的
// function App() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// -----------------------------------
// 事件 阻止默认
// function ActionLink() {
//   function handleClick(e) {
//     e.preventDefault();
//     console.log('The link was clicked.');
//   }

//   return (
//     <a href="#" onClick={handleClick}>
//       Click me
//     </a>
//   );
// }

// ReactDOM.render(
//   <ActionLink />,
//   document.getElementById('root')
// );

// ------------------------------------
// JSX 的this
// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {isToggleOn: true};

//     // 为了在回调中使用 `this`
//     this.handleClick = this.handleClick.bind(this);
//   }

//   handleClick() {
//     this.setState(state => ({
//       isToggleOn: !state.isToggleOn
//     }));
//   }

//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? 'ON' : 'OFF'}
//       </button>
//     );
//   }
// }

// ReactDOM.render(
//   <Toggle />,
//   document.getElementById('root')
// );

// -----------------------------------
// 条件渲染
// function UserGreeting(props) {
//   return <h1>Welcome back!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Please sign up.</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {                         // 用if
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// // ReactDOM.render(
// //   // Try changing to isLoggedIn={true}:
// //   <Greeting isLoggedIn={false} />,
// //   document.getElementById('root')
// // );

// function LoginButton(props) {
//   return (
//     <button onClick={props.handleLoginClick}>
//       Login
//     </button>
//   );
// }

// function LogoutButton(props) {
//   return (
//     <button onClick={props.handleLogoutClick}>
//       Logout
//     </button>
//   );
// }

// class LoginControl extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleLoginClick = this.handleLoginClick.bind(this);
//     this.handleLogoutClick = this.handleLogoutClick.bind(this);
//     this.state = {isLoggedIn: false};
//   }

//   handleLoginClick() {
//     this.setState({isLoggedIn: true});
//   }

//   handleLogoutClick() {
//     this.setState({isLoggedIn: false});
//   }

//   render() {
//     const isLoggedIn = this.state.isLoggedIn;
//     // let button = isLoggedIn
//     //   ? <LogoutButton handleLogoutClick={this.handleLogoutClick} />
//     //   : <LoginButton handleLoginClick={this.handleLoginClick} />; 

//     return (                                      // 用三目运算符
//       <div>
//         <Greeting isLoggedIn={isLoggedIn} />
//         { isLoggedIn
//           ? <LogoutButton handleLogoutClick={this.handleLogoutClick} />
//           : <LoginButton handleLoginClick={this.handleLoginClick} />
//         }
//       </div>
//     );
//   }
// }

// ReactDOM.render(
//   <LoginControl />,
//   document.getElementById('root')
// );

// ---------------------------------------
// 阻止渲染
// function WarningBanner(props) {
//   if (!props.warn) {
//     return null;                    // 让组件返回null
//   }

//   return (
//     <div className="warning">Warning!</div>
//   )
// }

// class Page extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       showWarning: true
//     };
//     this.handleToggleClick = this.handleToggleClick.bind(this);
//   }

//   handleToggleClick(event) {
//     console.log('target', event.target);
//     console.log('currentTarget', event.currentTarget);
//     this.setState(state => ({
//       showWarning: !state.showWarning
//     }));
//   }

//   // 在组件的 render 方法中返回 null 并不会影响组件的生命周期。
//   componentDidUpdate() {
//     console.log('componentDidUpdate');
//   }

//   render() {
//     return (
//       <div>
//         <WarningBanner warn={this.state.showWarning} />
//         <button onClick={this.handleToggleClick}>
//           {this.state.showWarning ? 'Hide' : 'Show'}
//         </button>
//       </div>
//     )
//   }
// }

// ReactDOM.render(
//   <Page />,
//   document.getElementById('root')
// );

// ------------------------------------
// 列表渲染
// function ListItem(props) {
//   const value = props.value;
//   return (
//     <li li-key={value.toString()}>{value}</li>
//   );
// }

// function NumberList(props) {
//   const numbers = props.numbers;
//   return (                                        // key不会不会传递给子组件
//     <ul>
//       {
//         numbers.map((number) => 
//           <ListItem key={number.toString()}
//             value={number}
//           />
//         )
//       }
//     </ul>
//   );
// }

// const numbers = [1, 2, 3, 4, 5];
// ReactDOM.render(
//   <NumberList numbers={numbers} />,
//   document.getElementById('root')
// );

// -------------------------------------
// 受控组件
// input
// class NameForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: '123'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('提交的名字: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (                                        // 事件属性的表达式是否要调用，取决于this的绑定绑定方式（3种）
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           名字:
//           <input type="text"
//             value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="提交" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <NameForm />,
//   document.getElementById('root')
// );

// textarea
// class EssayForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
//     };

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     // this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('提交的文章: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           文章:
//           <textarea value={this.state.value}
//             onChange={this.handleChange}
//           />
//         </label>
//         <input type="submit" value="提交" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <EssayForm />,
//   document.getElementById('root')
// );

// ----------------------------------
// select
// class FlavorForm extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {value: 'coconut'};

//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange(event) {
//     this.setState({value: event.target.value});
//   }

//   handleSubmit(event) {
//     alert('你喜欢的风味是: ' + this.state.value);
//     event.preventDefault();
//   }

//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           选择你喜欢的风味:
//           <select
//             value={this.state.value}
//             onChange={this.handleChange}>
//             <option value="grapefruit">葡萄柚</option>
//             <option value="lime">酸橙</option>
//             <option value="coconut">椰子</option>
//             <option value="mango">芒果</option>
//           </select>
//         </label>
//         <input type="submit" value="提交" />
//       </form>
//     );
//   }
// }

// ReactDOM.render(
//   <FlavorForm />,
//   document.getElementById('root')
// );

// --------------------------------------
// 多个输入 
// class Reservation extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       isGoing: true,
//       numberOfGuests: 2
//     };

//     this.handleInputChange = this.handleInputChange.bind(this);
//   }

//   // 根据 event.target.name 的值选择要执行的操作
//   handleInputChange(event) {
//     const target = event.target;
//     const value = target.name === 'isGoing' ? target.checked : target.value;
//     const name = target.name;

//     this.setState({
//       [name]: value
//     });
//     // 等同于
//     // var partialState = {};
//     // partialState[name] = value;
//     // this.setState(partialState);
//   }

//   render() {
//     return (
//       <form>
//         <label>
//           参与:
//           <input
//             name="isGoing"
//             type="checkbox"
//             checked={this.state.isGoing}
//             onChange={this.handleInputChange} />
//         </label>
//         <br />
//         <label>
//           来宾人数:
//           <input
//             name="numberOfGuests"
//             type="number"
//             value={this.state.numberOfGuests}
//             onChange={this.handleInputChange} />
//         </label>
//       </form>
//     );
//   }
// }
// ReactDOM.render(
//   <Reservation />,
//   document.getElementById('root')
// );

// ----------------------------------------
// 受控输入空值
ReactDOM.render(
  <input value="hi" />,
  document.getElementById('root')
);

setTimeout(function() {
  ReactDOM.render(
  <input value={null} />,
  document.getElementById('root')
);
}, 3000);

// --------------------------------------
