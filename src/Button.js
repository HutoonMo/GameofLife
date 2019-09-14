import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-outline-light btn-lg " onClick={this.props.handleReset}>
          Reset
        </button>
        {" "}
        <button type="button" className="btn btn-outline-light btn-lg">
          Start
        </button>
      </div>
    );
  }
}

export default Button;
