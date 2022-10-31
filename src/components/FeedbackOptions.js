import React, { Component } from "react";

class FeedbackOptions extends Component {
  render() {
    return (
      <div className="feedbackBtn">
        <button type="button" className="btnGood" onClick={this.props.setGood}>
          Good
        </button>
        <button type="button" className="btnNeutral" onClick={this.props.setNeutral}>
          Neutral
        </button>
        <button type="button" className="btnBad" onClick={this.props.setBad}>
          Bad
        </button>
      </div>
    );
  }
}

export default FeedbackOptions;
