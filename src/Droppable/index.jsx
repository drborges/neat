import React from "react";
import classnames from "classnames";
import { useDrop } from "react-dnd";

import View from "../View";

import styles from "./styles.module.scss";

const Droppable = ({ accept, children, onDrop }) => {
  const [{ isOver, canDrop }, drop] = useDrop({
    accept,
    drop: data => {
      if (canDrop) onDrop(data);
    },
    collect: monitor => ({
      isOver: monitor.isOver(),
      canDrop: monitor.canDrop()
    })
  });

  const css = classnames({ [styles.over]: isOver });

  return (
    <View className={css} ref={drop}>
      {children}
    </View>
  );
};

export default Droppable;
