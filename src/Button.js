import React from "react";

export class Button extends React.Component {
  render() {
    return (
      <div>
        <button type="button" className="btn btn-outline-light btn-md " onClick={this.props.handleReset}>
          Reset
        </button>
        {" "}
        <button type="button" className="btn btn-outline-light btn-md" onClick={this.props.start}>
          Start
        </button>
        <button type="button" className="btn btn-outline-light btn-md" onClick={this.props.pause}>
          Pause
        </button>
      </div>
    );
  }
}

export default Button;
