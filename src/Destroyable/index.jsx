import React from "react";
import classnames from "classnames";

import View from "../View";

import styles from "./styles.module.scss";

const Destroyable = ({ children, ...props }) => {
  const css = classnames(styles.destroyable);

  return <View className={css}>{children}</View>;
};

export default Destroyable;
