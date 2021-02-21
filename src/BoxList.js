import React, { Component } from "react";
import Box from "./Box";
import BoxForm from "./BoxForm";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = { boxes: [] };
    this.create = this.create.bind(this);
  }
  remove() {}
  create(newBox) {
    this.setState({
      boxes: [...this.state.boxes, newBox],
    });
  }
  render() {
    const boxes = this.state.boxes.map((box) => (
      <Box width={box.width} height={box.height} color={box.color} />
    ));
    return (
      <div>
        <h1>Color Box Maker Thingy</h1>
        <BoxForm createBox={this.create} />
        {boxes}
      </div>
    );
  }
}

export default BoxList;
