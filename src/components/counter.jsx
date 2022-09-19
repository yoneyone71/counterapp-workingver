import React, { Component } from "react";

class Counter extends Component {
  state = {
    value: this.props.value,
    //imageUrl: "https://picsum.photos/200",
    //tag: ["tag1", "tag2", "tag3"],
  };

  style = {
    fontSize: 10,
    fontWeight: "bold",
  };

  // constructor() {
  //   super();
  //   //console.log("constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    //console.log("Increment Clicked", this);
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    console.log(this.props);
    let classes = this.getBadgeClasses();

    return (
      // code to add under button ;;; include in older code add
      <div>
        {this.props.children}
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement} // do not onClick={this.handleIncrement()} *****THIS is wrong. you have to pass a reference syntax. i toiled over this for hours
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.value === 0 ? "warning" : "secondary";

    return classes;
  }

  formatCount() {
    const { value: count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
// code to add under render() { ;;; include in older code add
// //console.log("props", this.props);

// code to add under button ;;; include in older code add

// <ul>
//           {/* {this.state.tag.map((tag) => (
//             <li key={tag}>{tag}</li>
//           )
//           )} */}
//         </ul>

// >>>>>>>>>>>
// <<<<<<<<<<<

// older code
//(11:13 29March2022 Tue)
/*
import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    //imageUrl: "https://picsum.photos/200",
    tag: ["tag1", "tag2", "tag3"],
  };

  style = {
    fontSize: 10,
    fontWeight: "bold",
  };

  // constructor() {
  //   super();
  //   //console.log("constructor", this);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    //console.log("Increment Clicked", this);
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}  // do not onClick={this.handleIncrement()} *****THIS is wrong. you have to pass a reference syntax. i toiled over this for hours
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <ul>
          {this.state.tag.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
*/
// >>>>>>>>>>>
// <<<<<<<<<<<

//>>>>>>>>
//<<<<<<<<

/* older code
(16:34 26March2022 Sat) 

use babel and grepper to work on ways to find out how to get x code transformed 
into any other code or programming languages.

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    //imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"],
  };

  renderTags() {
    if (this.state.tags.length === 0) return <p>There are no tags!</p>;
    return (
      <ul>
        {this.state.tags.map((tag) => (
          <li key={tag}>{tag}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <div>
        {this.state.tags.length == 0 && "Please create a new tag!"}
        {this.renderTags()}
      </div>
    );
  }
}

export default Counter;
 */

//>>>>>>>>
//<<<<<<<<

// >>>>>>
// <<<<<<

// older code
// 11:32 26March2022 Sat
// mosh vid: https://www.youtube.com/watch?v=Ke90Tje7VS0&list=PLTjRvDozrdlw5En5v2xrBr_EqieHf7hGs&index=10
// 55min in vid

/*
the older code // NB Counter class state tag isnt tags its tag here in old code

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 1,
    //imageUrl: "https://picsum.photos/200",
    tag: ["tag1", "tag2", "tag3"],
  };

  style = {
    fontSize: 10,
    fontWeight: "bold",
  };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tag.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
*/

// >>>>>>
// <<<<<<
/* another way to write the code
render() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

*/

/*
formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
*/
/*
formatCount() {
    const { count } = this.state;
    return count === 0 ? 'Zero' : count;
  }
*/

//_______________________________
/* another way to write the code
formatCount() {
    return this.state.count === 0 ? 'Zero' : this.state.count;
}
*/

/* define a class and exproted it on the same line
export default class Counter  extends Component {
    render() { 
        return <h1>Hello World</h1>;
    }
} 

*/
