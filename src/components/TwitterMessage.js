import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {value:''};
  }

  handleInputChange = (event) => {

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default TwitterMessage;
