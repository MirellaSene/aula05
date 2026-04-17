import React from "react";
import styles from "./style.module.css";

interface DefaultInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const DefaultInput: React.FC<DefaultInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      className={styles.input}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

export default DefaultInput;