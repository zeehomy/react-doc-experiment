import React from 'react';
import ReactDOM from 'react-dom';

// 体验context
// // 为当前的 theme 创建一个 context（“light”为默认值）。
// const ThemeContext = React.createContext('light');

// class ThemedButton extends React.Component {
//   // 指定 contextType 读取当前的 theme context。
//   // React 会往上找到最近的 theme Provider，然后使用它的值。
//   // 在这个例子中，当前的 theme 值为 “dark”。
//   static contextType = ThemeContext;         // contextType使得this.context可以使用
//   render() {
//     return <button>{this.context}</button>;
//   }
// }

// // 中间的组件再也不必指明往下传递 theme 了。
// function Toolbar() {
//   return (
//     <div>
//       <ThemedButton />
//     </div>
//   );
// }

// class App extends React.Component {
//   render() {
//     // 使用一个 Provider 来将当前的 theme 传递给以下的组件树。
//     // 无论多深，任何组件都能读取这个值。
//     // 在这个例子中，我们将 “dark” 作为当前的值传递下去。
//     return (
//       <ThemeContext.Provider value="dark">
//         <Toolbar />
//       </ThemeContext.Provider>
//     );
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// ----------------------------------

// 传统传值方式
function Link(props) {
  return (
    <a href={props.href}>
      {props.children}
    </a>
  );
}

function Avatar(props) {
  return (
    `${props.user}  ${props.size}`
  );
}

class NavigationBar extends React.Component {
  render() {
    return (
      <Link href={this.props.href}>
        <Avatar user={this.props.user}
          size={this.props.avatarSize}
        />
      </Link>
    );
  }
}

function PageLayout(props) {
  return (
    <NavigationBar user={props.user}
      avatarSize={props.avatarSize}
      href={props.href}
    />
  );
}

class Page extends React.Component {
  render() {
    return (
      <PageLayout user={this.props.user}
        avatarSize={this.props.avatarSize}
        href={this.props.href}
      />
    );
  }
}

const user = 'tad';
const avatarSize = 3;

ReactDOM.render(
  <Page user={user}
    avatarSize={avatarSize}
    href="#"
  />,
  document.getElementById('root')
);