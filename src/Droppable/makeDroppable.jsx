import React, { useState } from "react";

import Droppable from "./";

const uuid = ((id = 0) => () => id++)();

const makeDroppable = (Component, draggables = ["widget"]) => props => {
  const [children, setChildren] = useState([]);
  const handleDestroy = key => () => {
    setChildren(children => children.filter(c => c.uuid !== key));
  };

  const makeChildDestroyable = child => {
    const key = uuid();
    const props = { ...child.props, onDestroy: handleDestroy(key) };
    return { ...child, props, key, uuid: key };
  };

  const handleDrop = data => {
    const newChildren = React.Children.toArray(data.children).map(
      makeChildDestroyable
    );
    setChildren(children => [...children, ...newChildren]);
  };

  return (
    <Droppable accept={draggables} onDrop={handleDrop}>
      <Component {...props}>{children}</Component>
    </Droppable>
  );
};

export default makeDroppable;
