{
  /**

  Modules
  JSX expressions
  Rneding Lists
  Conditional Rendering
  Handling Events
  Updating the State

**/
}

import React, { Component } from "react";
class Counter extends Component {
  state = {
    count: 0,
    image_url: "https://picsum.photos/200",
    tags: [],
  };

  styles = {
    fontSize: 12,
    fontWeight: "bold",
  };

  // constructor() {
  //   // Use to bind the event handlers with this
  //   super();
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // } // constructor ends

  // 2nd way: use arrow func,
  // to bind the event handlers with this
  handleIncrement = (product) => {
    // console.log("Increment Clicked!", this);

    // Update the count
    // setSate is async call and render the return
    // And update the New DOM while matching the old DOM

    console.log(product);

    this.setState({ count: this.state.count + 1 });
  }; // handleIncrement ends

  doHandleIncrement = () => {
    this.handleIncrement({ id: 1 });
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;

    return (
      <ul>
        {/* To iterate lists use map and arrow fun */}
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  } // renderTags ends

  render() {
    return (
      <React.Fragment>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >
          Increement
        </button>
        <br />
        {/* In JS when we use boolean logical operator 
        && / || / ! operators then concatinating
        boolean with string will rsult in string 
        becuase this will be truthy statement

        */}
        {this.state.tags.length === 0 && "Would you please a new tag!"}
        {this.renderTags()};
      </React.Fragment>
    );
  } // render ends

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
} // Counter componenet ends

export default Counter;
