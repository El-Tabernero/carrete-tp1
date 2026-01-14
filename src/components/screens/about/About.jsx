import styles from "./about.module.css";

const About = () => {
  return (
    <div className={styles.page}>
      <div className={styles.content}>

        <h1 className={styles.title}>Acerca de El Carrete</h1>

        {/* --- DESCRIPCIÓN --- */}
        <section className={styles.section}>
          <p>
            <strong>EL Carrete</strong> es una plataforma demo creada como proyecto
            de portfolio para practicar React, routing, consumo de APIs y diseño
            de interfaces.
          </p>

          <p>
            Permite navegar películas, ver detalles individuales, leer comentarios
            de otros usuarios y simular un sistema de autenticación.
          </p>
        </section>

        {/* --- CÓMO FUNCIONA --- */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>🔐 ¿Cómo funciona la página?</h2>

          <p>
            Para poder acceder al detalle de cada película y ver los comentarios,
            es necesario iniciar sesión con un usuario de prueba.
          </p>

          <div className={styles.loginBox}>
            <p className={styles.loginTitle}>Usuario demo:</p>
            <p className={styles.loginData}>📧 john@mail.com</p>
            <p className={styles.loginData}>🔑 changeme</p>
          </div>
        </section>

        {/* --- APIS --- */}
        <section className={styles.section}>
          <h2 className={styles.subtitle}>🧩 APIs utilizadas</h2>

          <ul className={styles.apiList}>
            <li>
              <span>Usuarios (login):</span>
              <a
                href="https://fakeapi.platzi.com/en/rest/users/"
                target="_blank"
                rel="noreferrer"
              >
                Fake Store API (Platzi)
              </a>
            </li>

            <li>
              <span>Películas:</span>
              <a
                href="https://6938377b4618a71d77cf67b1.mockapi.io/carrete/v1/movies"
                target="_blank"
                rel="noreferrer"
              >
                MockAPI — Movies
              </a>
            </li>

            <li>
              <span>Comentarios:</span>
              <a
                href="https://6938377b4618a71d77cf67b1.mockapi.io/carrete/v1/comments"
                target="_blank"
                rel="noreferrer"
              >
                MockAPI — Comments
              </a>
            </li>
          </ul>
        </section>

      </div>
    </div>
  );
};

export default About;
