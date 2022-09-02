import React from "react";

class CounterButton extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className="btn" onClick={this.props.onClickHandler}>
        {this.props.children}
      </button>
    );
  }
}
export default CounterButton;
