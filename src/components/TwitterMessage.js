import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {value:''};
  }

  handleInputChange = (event) => {
    this.setState({value:this.props.maxChars - 1})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Remaning characters: {this.state.value}</p>
        <input type="text" value={this.state.value} onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default TwitterMessage;
