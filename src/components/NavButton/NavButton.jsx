import styles from "./NavButton.module.css";

const NavButton = ({ children, onClick, variant = "default" }) => {
  return (
    <button
      className={`${styles.button} ${styles[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default NavButton;