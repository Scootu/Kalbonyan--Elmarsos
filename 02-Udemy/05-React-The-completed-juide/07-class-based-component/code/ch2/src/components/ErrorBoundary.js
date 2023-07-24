import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hasError: false,
    };
  }
  componentDidCatch() {
    console.log("send to linux servere");
    if (this.props.answere.length === 0) {
      this.setState({
        hasError: true,
      });
    }
  }

  render() {
    if (this.state.hasError) {
      return <p>Something is rong !</p>;
    }
    return this.props.children;
  }
}
export default ErrorBoundary;
