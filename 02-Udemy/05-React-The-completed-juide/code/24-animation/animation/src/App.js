import React, { Component } from "react";
import { Transition } from "react-transition-group";
import "./App.css";
import Modal from "./components/Modal/Modal";
import Backdrop from "./components/Backdrop/Backdrop";
import List from "./components/List/List";

class App extends Component {
  state = {
    modalIsOpen: false,
    showBlock: false,
  };

  showModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  toggleBlock = () => {
    this.setState((prevState) => ({
      showBlock: !prevState.showBlock,
    }));
  };
  render() {
    return (
      <div className="App">
        <h1>React Animations</h1>
        <button onClick={this.toggleBlock}>toggle</button>
        <Transition in={this.state.showBlock} timeout={1000}>
          {(state) => (
            <div
              style={{
                backgroundColor: "red",
                width: 100,
                height: 100,
                margin: "auto",
                transition: "opacity 1s ease-out",
                opacity: state === "entering" ? 1 : 0,
              }}
            ></div>
          )}
        </Transition>
        <br />
        <Transition
          mountOnEnter
          unmountOnExit
          in={this.state.modalIsOpen}
          timeout={300}
        >
          {(state) => <Modal show={state} closed={this.closeModal} />}
        </Transition>

        {this.state.modalIsOpen ? (
          <Backdrop show={this.state.modalIsOpen} />
        ) : null}
        <button className="Button" onClick={this.showModal}>
          Open Modal
        </button>
        <h3>Animating Lists</h3>
        <List />
      </div>
    );
  }
}

export default App;
