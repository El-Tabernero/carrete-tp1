import { useState } from "react";

function Login(){
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState();
}
const handleSubmit =(e) => {
    e.preventDefault();
};

function Login() {
    return (
        <form>
            <label htmlFor="username">Usuario:</label>
            <input 
            value={username}
            onChange={() =>{
                console.log(e.target.value)
            }}
            id="username" type="text"/>
            <label htmlFor="password">Contraseña:</label>
            <input name="passowrd" type="text"/>
            <button>Iniciar Sesión</button>
        </form>
    );
}

export default Login;