import React from "react";
import styles from "./style.module.css";

interface MainFormProps {
  children: React.ReactNode;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const MainForm: React.FC<MainFormProps> = ({ children, onSubmit }) => {
  return (
    <form className={styles.form} onSubmit={onSubmit}>
      {children}
    </form>
  );
};

export default MainForm;