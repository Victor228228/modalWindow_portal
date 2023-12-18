import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import ReactDOM from "react-dom";

const Background = (props) => {
    return <div className={styles.backdrop} onClick={props.onCloseModal}></div>
}
const Modal = (props) => {
    return (
        <Card className={styles.modal}>
            <header className={styles.header}>
                <h2>{props.title}</h2>
            </header>
            <div className={styles.content}>
                <p>{props.message}</p>
            </div>
            <footer className={styles.actions}>
                <Button onClick={props.onCloseModal}>Закрыть</Button>
            </footer>
        </Card>
    )
}

const ErrorModal = (props) => {
  return (
    <>
        {ReactDOM.createPortal(<Background onCloseModal={props.onCloseModal}/>, document.getElementById("backdrop"))}
        {ReactDOM.createPortal(<Modal onCloseModal={props.onCloseModal} title={props.title} message={props.message}/>, document.getElementById("modal"))}
    </>
  );
};

export default ErrorModal;
