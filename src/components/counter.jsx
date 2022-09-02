import React from "react";
import CounterButton from "./CounterButton";
import "./counter.css";

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  render() {
    return (
      <>
        <div className="counter-border">
          <CounterButton
            onClickHandler={() =>
              this.setState({ count: this.state.count - 1 })
            }
          >
            -
          </CounterButton>
          <span className="spanTag">{this.state.count}</span>
          <CounterButton
            onClickHandler={() =>
              this.setState({ count: this.state.count + 1 })
            }
          >
            +
          </CounterButton>

          <div>
            <CounterButton onClickHandler={() => this.setState({ count: 0 })}>
              Reset
            </CounterButton>
          </div>
        </div>
      </>
    );
  }
}

export default Counter;
