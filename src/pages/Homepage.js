import {React, useEffect, useState} from 'react'
import Cookies from 'universal-cookie';
import axios from 'axios'
import {useNavigate} from 'react-router-dom'

export default function Homepage() {

//     useEffect(() => {
//     // Atualiza o titulo do documento usando a API do browser
//     try{
//         await axios.get('http://localhost:1337/auth/local', credentials)
//         .then(response=>{
//                 const cookies = new Cookies();
//                 cookies.set('jwt', response.data.jwt, { path: '/' });
//                 console.log(cookies.get('jwt'))
                
//                 navigate('/Home')
    
//         })
//         }catch(error){
//             console.log('Usuário ou senha inválido')
//         }
//     document.title = `Você clicou ${count} vezes`;
//   });
//     const isAuth = ()=>{

//     }
    return (
        <div>
            <h1>Homepage</h1>
        </div>
    )
}
