import {React, useState } from 'react'
import {Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import Cookies from 'universal-cookie';

export default function Login() {
    const [credentials, setCredentials] = useState({identifier:'',password:''});
    const navigate = useNavigate();
    const handleChange = (e)=>{
        e.preventDefault();
        const {value , name} = e.target;
        
        if (name ==='email'){
            setCredentials({ ...credentials, identifier: value })
            
        }else{
            setCredentials({ ...credentials, password: value })

        }
    }
    const login = async ()=>{
        try{
        await axios.post('http://localhost:1337/auth/local', credentials)
        .then(response=>{
                const cookies = new Cookies();
                cookies.set('jwt', response.data.jwt, { path: '/' });
                console.log(cookies.get('jwt'))
                
                navigate('/Home')
    
        })
        }catch(error){
            console.log('Usuário ou senha inválido')
        }
    }
    return (
        <div class="login-container">
            <div className="login-wrapper flex-center">
                <div className="login-form">
                    <span>Login</span>
                    <form>
                        <input onChange={handleChange} name="email" className="std-input" type="text" placeholder="E-mail"/>
                        <input onChange={handleChange} name="password" className="std-input" type="password" placeholder="Senha"/>
                        <a onClick={login} className="std-button login-btn" >ENTRAR</a>
                        <Link className="std-button login-btn" to="/Cadastrocandidato">CADASTRE-SE</Link>
                    </form>
                </div>
            </div>
            <div className="login-image">
            </div>
        </div>
    )
}
