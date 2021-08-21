import { Component } from "react";
import "./styles.css";

export default class App extends Component {
  state = {
    first: "text",
    last: "disini"
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
    this.callFirstName()
      .then((result, reject) => {
        return result
          ? this.setState({ first: result })
          : this.setState({ fisrt: reject });
      })
      .then(
        this.callLastName().then((result, reject) => {
          return result
            ? this.setState({ last: result })
            : this.setState({ last: reject });
        })
      );
  };

  render() {
    const { first, last } = this.state;
    const name = first + last;
    const { login } = this;

    return (
      <div className="App">
        <button onClick={() => login()}>Login</button>
        <h1>{name}</h1>
      </div>
    );
  }
}
