import styles from "@/styles/TodoParents.module.css";
import { useState } from "react";
import { Filter } from "./Filter";

function ToDoParents() {
  return (
    <div className={styles.header}>
      <p className={styles.toDoText}>To-Do-List</p>

      <div className={styles.blankTop}>
        <div className={styles.ChildInput}>
          <input
            type="text"
            placeholder="Add a new task..."
            className={styles.ChildText}
          />
          <button className={styles.ChildButton}>Add</button>
        </div>
      </div>
      <Filter />
    </div>
  );
}
