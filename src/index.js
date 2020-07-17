import React from 'react';
import ReactDOM from 'react-dom';

// 状态提升
// 多个组件需要反映相同的变化数据时，建议将共享状态提升到最近的共同父组件中
function BoilingVerdict(props) {
  const celsius = props.celsius;
  return (
    <>
      {
        celsius >= 100
          ? <p>The water would boil.</p>
          : <p>The water would not boil.</p>
      }
    </>
    // 或者直接返回
    // celsius >= 100
    //   ? <p>The water would boil.</p>
    //   : <p>The water would not boil.</p>
  );
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);

    // 提升至父组件
    // this.state = {
    //   temperature: ''
    // };
  }

  handleChange(e) {
    // Before: this.setState({temperature: e.target.value});
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    // Before: const temperature = this.state.temperature;
    const temperature = this.props.temperature;
    const scale = this.props.scale;

    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature}
          onChange={this.handleChange}
        />
      </fieldset>
    );
  }
}

// 温度转换函数
function toCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;     // 为了只在输入了三位小数以后才保留三位
  return rounded.toString();

  // 或者始终生成三位小数（体验稍差，相互输入后显示不一致）
  // const outputString = output.toFixed(3);
  // return outputString;
}

class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleTemperatureChange = this.handleTemperatureChange.bind(this);

    // 我们可以存储两个输入框中的值，但这并不是必要的;只需要存储最近修改的温度及其计量单位即可
    this.state = {
      temperature: '',
      scale: 'c'
    };
  }

  handleTemperatureChange(scale, temperature) {
    this.setState({
      temperature: temperature,
      scale: scale
    });
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    // 摄氏温度
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;

    // 华氏温度
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return (
      <div>
        <TemperatureInput scale="c"
          temperature={celsius}
          onTemperatureChange={(temperature) => this.handleTemperatureChange('c', temperature)}
        />
        <TemperatureInput scale="f"
          temperature={fahrenheit}
          onTemperatureChange={(temperature) => this.handleTemperatureChange('f', temperature)}
        />
        <BoilingVerdict celsius={parseFloat(celsius)}/>
      </div>
    );
  }
}

ReactDOM.render(
  <Calculator />,
  document.getElementById('root')
);

// ---------------------------------
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