import { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    text: "text disini"
  };

  callFirstName = () => {
    return new Promise((result, reject) => {
      setTimeout(() => {
        if (result) result("Randi");
        else reject("gagal");
      }, 3000);
    });
  };

  callLastName = () => {
    return new Promise((result, reject) => {
      setTimeout(() => {
        result ? result("Firmansyah") : reject("gagal");
      }, 3000);
    });
  };

  login = () => {
    Promise.all([this.callFirstName(), this.callLastName()]).then(
      ([result, result2]) => {
        this.setState({ text: result + result2 });
      }
    );
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
