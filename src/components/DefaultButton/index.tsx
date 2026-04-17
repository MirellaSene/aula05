import React from "react";
import styles from "./style.module.css";

interface DefaultButtonProps {
  text: string;
}

const DefaultButton: React.FC<DefaultButtonProps> = ({ text }) => {
  return (
    <button type="submit" className={styles.button}>
      {text}
    </button>
  );
};

export default DefaultButton;