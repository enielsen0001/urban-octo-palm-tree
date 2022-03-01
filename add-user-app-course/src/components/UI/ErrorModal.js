import React from "react";
import Card from "./Card";
import Button from "../UI/Button";
import styles from "./ErrorModal.module.scss";

const ErrorModal = (props) => {
  return (
    <div>
      <div className={styles.backdrop} onClick={props.OnConfirm}></div>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.title}</h2>
        </header>

        <div className={styles.content}>
          <p>{props.message}</p>
        </div>
        <footer className={styles.actions}>
          <Button onClick={props.OnConfirm}>okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
