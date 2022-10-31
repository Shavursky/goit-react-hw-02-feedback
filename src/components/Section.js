
import React, { Component } from "react";

class Section extends Component {
  render() {
    return (
      <section className="components_title">
        <h1 className="title_feedback">{this.props.title}</h1>
        {this.props.children}
      </section>
    );
  }
}

export default Section;
