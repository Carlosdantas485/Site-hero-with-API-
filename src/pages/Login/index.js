import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import api from '../../services/api';

import './styles.css';

import{FiLogIn} from 'react-icons/fi';
import Logo from'../../assets/logo.svg';
import Bunner from '../../assets/heroes.png';

export default function Login(){

    const [id, SetId] = useState('');
    
    const history = useHistory();

    async function handleLogin(e){
        e.preventDefault();

        try{
            const responses = await api.post ( '/sessions', { id });
            
            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', responses.data.name)
            
            history.push('/profile');
        }
        catch(err){
            alert('Falha ao encontrar este ID ! TENTE NOVAMNETE !')
        }
    }

    return (
        <div className="login-container">
            <section className="form">
                <img src={Logo} alt="Seja um heroi"/>
                
                <form onSubmit={handleLogin}>
                    <h1>Faça seu Login</h1>
                    <input 
                        placeholder ="seu ID"
                        value={id}
                        onChange={ v => SetId ( v.target.value ) }
                    />
                    <button className="button"type="submit">Entrar</button>
                    
                    <Link className="links" to="/register">
                        <FiLogIn size={15} color="#e02041"/>
                        Não tenho cadastro
                    </Link>

                </form>

            </section>
            <img src={Bunner} alt="Heroes"/>
        </div>
    );
}