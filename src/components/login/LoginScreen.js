import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './login.css';
import { database } from '../../data/database'

export const LoginScreen = () => {
    const history = useHistory();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [usuarios, setUsuarios] = useState();

    useEffect(() => {
        const usuarios = database();
        console.log("data", usuarios);
        setUsuarios(usuarios)
    }, [])

    const handleInputChange = (e) => {
        const{value, name} = e.target;
        if(name === 'email'){
            setEmail(value);
        }else {
            setPassword(value);
        }
    }

    const validarUsuario = (user) => {
        let validacion = false;
        usuarios.forEach( info => {
            if(JSON.stringify(info) === JSON.stringify(user)){
                validacion = true;
            } 
        })
        return validacion;
    }

    const handleLogin = (e) => {
        
        let usuario = { email, password };

        const user = validarUsuario(usuario)
        if(user){
            history.push("/home")
        }else{
            console.log("no entro")
        }
    }
    
    
    
    
    return (
        <>
            <div className="container">
                <div className="login_body">
                    <div className="login">
                        <div className="presentacion">
                            <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" width="300px" height="100px" alt="facebook_clone"/>
                            <h2>Conectado con amigos y el mundo alrededor de ti en Facebook</h2>
                        </div>
                        <div className="formulario">
                            <div className="card">
                                
                                    <input 
                                        type="text" 
                                        name="email"
                                        placeholder="Email or Phone Number"
                                        value={email}
                                        onChange={handleInputChange}
                                    />
                                    <input 
                                        type="password" 
                                        name="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={handleInputChange}
                                    />
                                    <button onClick={handleLogin} className="log_in">Log in</button>
                                
                                <Link to="/" className="forgot_password"> Forget Password</Link>
                                <Link to="/signup" className="new_account"> Create New Account</Link>
                            </div>
                            <p><strong>Create a Page</strong> for a celebrity, band or business</p>
                        </div>
                    </div>

                </div>
                <footer className="footer"></footer> 
            </div>
        </>
    )
}
