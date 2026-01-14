import styles from "./contact.module.css";

const Contact = () => {
  return (
    <div className={styles.page}>
      
      {/* IZQUIERDA: IMAGEN */}
      <div className={styles.left}>
        <img
          src="https://i.imgur.com/auAldQf.jpeg"
          alt="Foto de perfil de Rodrigo Dojas"
          className={styles.image}
        />
      </div>

      {/* DERECHA: INFO */}
      <div className={styles.right}>
        <h1 className={styles.title}>Un poco sobre mí</h1>

        <p className={styles.text}>
          Soy desarrollador frontend enfocado en React, me gusta aprender
          y probar constantemente funciones o cosas que desconozco.
          Soy creativo, haciendo arte desde pintura, escultura o música,
          a fotografía y filmmaker.
        </p>

        <div className={styles.links}>
          <a href="mailto:rodri.dojas@gmail.com" className={styles.item}>
            📧 rodri.dojas@gmail.com
          </a>

          <a
            href="https://www.linkedin.com/in/rodrigo-dojas-230199214/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            💼 LinkedIn / Rodrigo Dojas
          </a>

          <a
            href="https://github.com/el-tabernero"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.item}
          >
            🐙 GitHub / el-tabernero
          </a>

          <div className={styles.item}>📍 Argentina</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;