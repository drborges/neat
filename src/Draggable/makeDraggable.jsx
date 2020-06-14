import React from "react";

import Draggable from "./";

const makeDraggable = (Component, type = "widget") => (props, key) => (
  <Draggable type={type} key={key}>
    <Component {...props} />
  </Draggable>
);

export default makeDraggable;
