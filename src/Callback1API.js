import { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    text: "text disini"
  };

  callFirstName = (callback) => {
    setTimeout(() => {
      callback("Randi");
    }, 3000);
  };

  login = () => {
    this.callFirstName((result) => {
      const first = result;
      const last = "Firmansyah";
      const name = first + last;
      this.setState({ text: name });
    });
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
