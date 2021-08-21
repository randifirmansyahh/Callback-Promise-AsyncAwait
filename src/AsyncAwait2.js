import { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    text: "text disini"
  };

  callFirstName = () => {
    setTimeout(() => {
      return "Randi";
    }, 3000);
  };

  callLastName = () => {
    setTimeout(() => {
      return "Firmansyah";
    }, 3000);
  };

  login = () => {
    const first = this.callFirstName();
    const last = this.callLastName();
    this.setState({ text: first + last });
  };

  render() {
    const { text } = this.state;
    const { login } = this;

    return (
      <div className="App">
        <button onClick={() => login()}>Login</button>
        <h1>{text}</h1>
      </div>
    );
  }
}
