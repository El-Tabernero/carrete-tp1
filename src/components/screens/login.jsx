import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useAuth } from "../screens/AuthContext";
import styles from "./login.module.css";

function Login() {
  const { handleLogin, isLoggedIn, error } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleLogin(form);
  };

  useEffect(() => {
    if (isLoggedIn) navigate("/");
  }, [isLoggedIn, navigate]);

  return (
    <div className={styles.page}>
      <div className={styles.card}>

        <h2 className={styles.title}>Iniciar sesión</h2>

        <form onSubmit={handleSubmit} className={styles.form}>
          <label>
            Usuario
            <input
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              type="email"
              placeholder="correo@email.com"
              required
            />
          </label>

          <label>
            Contraseña
            <input
              value={form.password}
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              type="password"
              placeholder="********"
              required
            />
          </label>

          <button className={styles.loginBtn}>Ingresar</button>
        </form>

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.demoBox}>
          <p className={styles.demoTitle}>Usuario demo</p>
          <p>📧 <strong>john@mail.com</strong></p>
          <p>🔑 <strong>changeme</strong></p>
        </div>

      </div>
    </div>
  );
}

export default Login;

