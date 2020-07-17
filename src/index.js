import React from 'react';
import ReactDOM from 'react-dom';

// 组合
// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         Welcome
//       </h1>
//       <p className="Dialog-message">
//         Thank you for visiting our spacecraft!
//       </p>
//     </FancyBorder>
//   );
// }

// ReactDOM.render(
//   <WelcomeDialog />,
//   document.getElementById('root')
// );

// ---------------------------------------
// 多个插槽
// function Contacts() {
//   return <div className="Contacts" />;
// }

// function Chat() {
//   return <div className="Chat" />;
// }

// function SplitPane(props) {
//   return (
//     <div className="SplitPane">
//       <div className="SplitPane-left">
//         {props.left}
//       </div>
//       <div className="SplitPane-right">
//         {props.right}
//       </div>
//     </div>
//   );
// }

// function App() {
//   return (
//     <SplitPane
//       left={
//         <Contacts />
//       }
//       right={<Chat />}
//     />
//   );
// }
// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// -----------------------
// 定制化一般组件
// function FancyBorder(props) {
//   return (
//     <div className={'FancyBorder FancyBorder-' + props.color}>
//       {props.children}
//     </div>
//   );
// }
// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         {props.title}
//       </h1>
//       <p className="Dialog-message">
//         {props.message}
//       </p>
//     </FancyBorder>
//   );
// }

// function WelcomeDialog() {
//   return (
//     <Dialog
//       title="Welcome123"
//       message="Thank you for visiting our spacecraft!！！！！" />
//   );
// }
// ReactDOM.render(
//   <WelcomeDialog />,
//   document.getElementById('root')
// );

// ----------------------------------
// class组件的组合
// function FancyBorder(props) {
//     return (
//       <div className={'FancyBorder FancyBorder-' + props.color}>
//         {props.children}
//       </div>
//     );
//   }

// function Dialog(props) {
//   return (
//     <FancyBorder color="blue">
//       <h1 className="Dialog-title">
//         {props.title}
//       </h1>
//       <p className="Dialog-message">
//         {props.message}
//       </p>
//       {props.children}
//     </FancyBorder>
//   );
// }

// class SignDialog extends React.Component {
//   constructor(props) {
//     super(props);
//     this.handleChange = this.handleChange.bind(this);
//     this.handleClick = this.handleClick.bind(this);
//     this.state = {
//       login: ''
//     }
//   }

//   handleChange(e) {
//     this.setState({
//       login: e.target.value
//     });
//   }

//   handleClick() {
//     alert(`Welcome aboard, ${this.state.login}!`);
//   }

//   render() {
//     return (
//       <Dialog
//         title="Welcome11"
//         message="Thank you for visiting our spacecraft!！！！！"
//       >
//         <input value={this.state.login}
//           onChange={this.handleChange}
//         />
//         <button onClick={this.handleClick}>Sign Me up!</button>
//       </Dialog>
//     );
//   }
// }

// ReactDOM.render(
//   <SignDialog />,
//   document.getElementById('root')
// );