import React from "react"
import PropTypes from "prop-types"

class PointerLocation extends React.Component {
  constructor (props) {
    super(props);
    this.pointerMovement = this.pointerMovement.bind(this);
    this.state = { x: 0, y: 0 };
  }

  pointerMovement (event) {
    this.setState({
      x: event.clientX,
      y: event.clientY
    });
  }

  render () {
    return (
      <div style = {{ height: '100vh' }} onMouseMove = { this.pointerMovement }>
        <p>The current pointer location is: ({this.state.x}, {this.state.y})</p>
      </div>
    );
  }
}

export default PointerLocation
