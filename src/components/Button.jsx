import React from "react";

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      styling: {
        backgroundColor: "red",
        width: "150px",
        height: "25px",
        border: "none",
      },
      toggle: 0,
    };
  }
  changeColor = () => {
    if (this.state.styling.backgroundColor === "red") {
      this.setState({
        styling: { ...this.state.styling, backgroundColor: "green" },
      });
    } else {
      this.setState({
        styling: { ...this.state.styling, backgroundColor: "red" },
      });
    }
  };
  render() {
    return (
      <button
        style={this.state.styling}
        // onClick={() =>
        //   this.setState({ toggle: this.state.toggle === 0 ? 1 : 0 })
        // }
        onClick={this.changeColor}
      >
        {this.props.text}
      </button>
    );
  }
}

export default Button;
