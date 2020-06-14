import React from "react";

import View from "../View";
import styles from "./styles.module.scss";

const Editor = ({ children }) => {
  const template = {
    columns: `min-content auto`,
    rows: `auto`
  };

  return (
    <View className={styles.editor} colGap={5} template={template}>
      {children}
    </View>
  );
};

export default Editor;
