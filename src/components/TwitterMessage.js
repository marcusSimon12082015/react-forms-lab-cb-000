import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {value:'',maximum:this.props.maxChars};
  }

  handleInputChange = (event) => {
    this.setState({value:event.target.value,maximum: this.state.maximum - 1});
    this.setState({});
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <p>Remaning characters: {this.props}</p>
        <input type="text" value={this.state.value} onChange={this.handleInputChange} />
      </div>
    );
  }
}

export default TwitterMessage;
