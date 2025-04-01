import Image from "next/image";
import styles from "@/styles/globals.css";
import { ToDoParents } from "@/components/ToDoParents";

const Home = () => {
  return (
    <div className="header-style">
      <div className="header-mid">
        <ToDoParents />
      </div>
    </div>
  );
};
export default Home;
