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

  callLastName = (first) => {
    return new Promise((result, reject) => {
      setTimeout(() => {
        result ? result(first + "Firmansyah") : reject("gagal");
      }, 3000);
    });
  };

  login = () => {
    this.callFirstName()
      .then((result, reject) => {
        return this.callLastName(result);
      })
      .then((result2) => {
        this.setState({ text: result2 });
      });
  };

  render() {
    const { text } = this.state;
    const name = text;
    const { login } = this;

    return (
      <div className="App">
        <button onClick={() => login()}>Login</button>
        <h1>{name}</h1>
      </div>
    );
  }
}
