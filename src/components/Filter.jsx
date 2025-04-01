import styles from "@/styles/Filter.module.css";
import { useState } from "react";

export const Filter = () => {
  return (
    <div className={styles.Button}>
      <button className={styles.All}>All</button>
      <button className={styles.Active}>Active</button>
      <button className={styles.Completed}>Completed</button>
    </div>
  );
};
