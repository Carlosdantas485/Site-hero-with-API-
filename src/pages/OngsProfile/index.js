import React, { useEffect, useState } from 'react';

import './styles.css';
import Logo from'../../assets/logo.svg';
import {Link} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';

import api from '../../services/api';


export default function OngsProfile(){

    const [ongProfile, setOngProfile] = useState([]);

    const IdSelect = localStorage.getItem('IdSelect');

    useEffect(() => {
        api.get('/profile', {
            headers: {Authorization: IdSelect}
        })
        .then(response => {
            setOngProfile(response.data)
        })
    }, [IdSelect]);

    return(
        <div className="profiles-container">
            <header>
                <img src={Logo} alt="herois"/>
                <span>Bem-Vindo, </span>

                <Link className="button" to="/ongs">Voltar</Link>

                <button type="button">
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ol>
                {ongProfile.map(value => (
                   <li className="all-info-ong" key={value.id} >
                        
                            <strong>Caso:</strong>
                            <p>{value.title}</p>

                            <strong>Descrição</strong>
                            <p>{value.description}</p>

                            <strong>VALOR:</strong>
                            <p>{value.value}</p>
                    
                        
                    </li> 
                ))}
            </ol>
        </div>
    );
}