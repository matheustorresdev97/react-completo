import { useState } from "react";
import styles from "./image.module.css";

export function Image({ alt, ...props }) {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className={styles.wrapper}>
      {skeleton && <div className={styles.skeleton}></div>}
      <img alt={alt} {...props} className={styles.img} onLoad={handleLoad} />
    </div>
  );
}
