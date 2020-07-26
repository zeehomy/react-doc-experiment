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
//       <>
//         <ThemeContext.Provider value="dark">
//           <Toolbar />
//         </ThemeContext.Provider>
//         当不使用ThemeContext.Provider组件时，this.context为默认值
//         <Toolbar />
//       </>
//     );
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// ----------------------------------
// // 传统传值方式
// function Link(props) {
//   return (
//     <a href={props.href}>
//       {props.children}
//     </a>
//   );
// }

// function Avatar(props) {
//   return (
//     `${props.user}  ${props.size}`
//   );
// }

// class NavigationBar extends React.Component {
//   render() {
//     return (
//       <Link href={this.props.href}>
//         <Avatar user={this.props.user}
//           size={this.props.avatarSize}
//         />
//       </Link>
//     );
//   }
// }

// function PageLayout(props) {
//   return (
//     <NavigationBar user={props.user}
//       avatarSize={props.avatarSize}
//       href={props.href}
//     />
//   );
// }

// class Page extends React.Component {
//   render() {
//     return (
//       <PageLayout user={this.props.user}
//         avatarSize={this.props.avatarSize}
//         href={this.props.href}
//       />
//     );
//   }
// }

// const user = 'tad';
// const avatarSize = 3;

// ReactDOM.render(
//   <Page user={user}
//     avatarSize={avatarSize}
//     href="#"
//   />,
//   document.getElementById('root')
// );

// -----------------------------------

// // 在顶层控制的模式，将底层组件传递下去;中间组件无需知道众多props：
// class NavigationBar extends React.Component {
//   render() {
//     return (
//       this.props.userLink         // 直接渲染JSX节点属性
//     );
//   }
// }

// function PageLayout(props) {
//   return (
//     <NavigationBar userLink={props.userLink}/>
//   );
// }

// function Link(props) {
//   return (
//     <a href={props.href}>
//       {props.children}
//     </a>
//   );
// }

// function Avatar(props) {
//   return (
//     `${props.user}  ${props.size}`
//   );
// }

// function Page(props) {
//   const href = props.href;
//   const user = props.user;
//   const userLink = (
//     <Link href={href}>
//       <Avatar user={user}
//         size={props.avatarSize}
//       />
//     </Link>
//   );
//   return <PageLayout userLink={userLink} />;
// }

// const user = 'tadddd';
// const avatarSize = 3;

// ReactDOM.render(
//   <Page user={user}
//     avatarSize={avatarSize}
//     href="#"
//   />,
//   document.getElementById('root')
// );

// -------------------------------------

// Context.displayName
// const ThemeContext = React.createContext('light');
// ThemeContext.displayName = 'MyDisplayName';

// class App extends React.Component {
//   render() {
//     return (
//       <ThemeContext.Provider value="dark">
//         <div>sdfsdfdsf</div>
//       </ThemeContext.Provider>
//     );
//   }
// }

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// );

// -------------------------------------
// 动态 Context
// const themes = {
//   light: {
//     foreground: '#000000',
//     background: '#eeeeee',
//   },
//   dark: {
//     foreground: '#ffffff',
//     background: '#222222',
//   },
// };

// const ThemeContext = React.createContext(
//   themes.dark // 默认值
// );

// class ThemedButton extends React.Component {
//   render() {
//     let props = this.props;
//     let theme = this.context;
//     return (
//       <button
//         {...props}
//         style={{backgroundColor: theme.background}}
//       />
//     );
//   }
// }
// ThemedButton.contextType = ThemeContext;

// // 一个使用 ThemedButton 的中间组件
// function Toolbar(props) {
//   return (
//     <ThemedButton onClick={props.changeTheme}>
//       Change Theme
//     </ThemedButton>
//   );
// }

// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       theme: themes.light,
//     };

//     this.toggleTheme = () => {
//       this.setState(state => ({
//         theme:
//           state.theme === themes.dark
//             ? themes.light
//             : themes.dark,
//       }));
//     };
//   }

//   render() {
//     // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
//     // 而外部的组件使用默认的 theme 值
//     return (
//       <>
//         <ThemeContext.Provider value={this.state.theme}>
//           <Toolbar changeTheme={this.toggleTheme} />
//         </ThemeContext.Provider>
//         <section>
//           <ThemedButton>default button</ThemedButton>
//         </section>
//       </>
//     );
//   }
// }
// ReactDOM.render(<App />, document.getElementById('root'));

// -----------------------------------------
// 在嵌套组件中更新 Context （含Consumer）
const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  },
};

const ThemeContext = React.createContext({
  theme: themes.dark,
  toggleTheme: () => {},
});

function ThemeTogglerButton() {
  // Theme Toggler 按钮不仅仅只获取 theme 值，它也从 context 中获取到一个 toggleTheme 函数
  return (
    <ThemeContext.Consumer>
      {({theme, toggleTheme}) => (
        <button onClick={toggleTheme}
          style={{backgroundColor: theme.background}}>
          Toggle Theme
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

 // 中间组件 并没有使用context，而在子组件中有使用
 function Content() {
  return (
    <div>
      <ThemeTogglerButton />
    </div>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);

    // constructor中的方法
    this.toggleTheme = () => {
      this.setState(state => ({
        theme:
          state.theme === themes.dark
            ? themes.light
            : themes.dark,
      }));
    };

    // State 也包含了更新函数，因此它会被传递进 context provider。
    this.state = {
      theme: themes.light,
      toggleTheme: this.toggleTheme,
    };
  }

  render() {
    // 整个 state 都被传递进 provider
    return (
      <ThemeContext.Provider value={this.state}>
        <Content />
      </ThemeContext.Provider>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));

// ------------------------------------
