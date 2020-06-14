import React from "react";
import classnames from "classnames";
import { useDrag } from "react-dnd";

import View from "../View";

import styles from "./styles.module.scss";

const Draggable = ({ children, type }) => {
  const [{ dragging }, drag] = useDrag({
    item: { type, children },
    collect: monitor => ({
      dragging: monitor.isDragging()
    })
  });

  const css = classnames(styles.draggable, { [styles.dragging]: dragging });

  return (
    <View className={css} ref={drag}>
      {children}
    </View>
  );
};

export default Draggable;
