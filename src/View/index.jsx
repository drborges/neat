import React from "react";
import classnames from "classnames";

import styles from "./styles.module.scss";

const View = React.forwardRef((props, ref) => {
  const {
    children,
    colGap = 0,
    cols = 1,
    className,
    fitContent = false,
    onDestroy = () => {},
    rowGap = 0,
    rows = 1,
    template
  } = props;
  const css = classnames(styles.view, className);
  const columnTemplate = fitContent
    ? `repeat(${cols}, min-content)`
    : `repeat(${cols}, auto)`;

  const rowTemplate = fitContent
    ? `repeat(${rows}, min-content)`
    : `repeat(${rows}, auto)`;

  const grid = {
    rowGap: rowGap,
    columnGap: colGap,
    gridTemplateRows: template ? template.rows : rowTemplate,
    gridTemplateColumns: template ? template.columns : columnTemplate
  };

  const handleDestroy = e => {
    e.stopPropagation();
    onDestroy(e);
  };

  return (
    <section className={css} ref={ref} style={grid} onClick={handleDestroy}>
      {children}
    </section>
  );
});

export default View;
