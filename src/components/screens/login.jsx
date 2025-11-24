import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../screens/AuthContext";

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
  }, [isLoggedIn]);

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Usuario:</label>
        <input
          value={form.email}
          onChange={(e) =>
            setForm({ ...form, email: e.target.value })
          }
          id="email"
          type="email"
        />

        <label htmlFor="password">Contraseña:</label>
        <input
          value={form.password}
          onChange={(e) =>
            setForm({ ...form, password: e.target.value })
          }
          type="password"
        />

        <button>Iniciar sesión</button>
      </form>

      {error && <p>{error}</p>}
    </>
  );
}

export default Login;
