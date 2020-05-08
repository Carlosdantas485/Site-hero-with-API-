import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import{FiArrowLeft} from 'react-icons/fi';

import './styles.css';

import logo from'../../assets/logo.svg';

import api from '../../services/api';

export default function Register(){
    
    const history = useHistory();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [whatsapp, setWhatsapp] = useState('');
    const [city, setCity] = useState('');
    const [uf, setUf] = useState('');    

    async function newOng(e){
        e.preventDefault();

        const data = { 
            name,
            email,
            whatsapp,
            city,
            uf
        }
        
        try{
            const response = await api.post( '/ongs', data);
            
            alert('Seu Id: ' + response.data.id);
            history.push('/');

        }      
        catch(err){
            alert('Falha ao encontrar este ID ! TENTE NOVAMNETE !')
        }
      }

    function home(){
        history.push('/');
    }

    return(
       <div className="register-container">
            <div className="content">
                <section>
                   <img src={logo} alt="Herois" onClick={home}/>
                   <h1>Cadastro</h1>
                   <p>Faça Seu cadastro, entre na plataforma e ajude pessoas a encontrarem os casos da sua ONG</p>
                   <Link className="links" to="/">
                    <FiArrowLeft size={15} color="#e02041"/>
                        Faça seu login
                    </Link>
                </section>
              
                <form onSubmit={newOng}>
                    <input 
                        placeholder="Nome da ONG"
                        value={name}
                        onChange={ resposta => setName(resposta.target.value)}
                        />
                    <input 
                        type="email" 
                        placeholder="E-mail"
                        alue={email}
                        onChange={ resposta => setEmail(resposta.target.value)}
                    />
                    <input
                        placeholder="Whatsapp"
                        value={whatsapp}
                            onChange={ resposta => setWhatsapp(resposta.target.value)}
                    />
                    <div className="input-group">
                        <input 
                            placeholder="cidade"
                            value={city}
                            onChange={ resposta => setCity(resposta.target.value)}
                        />
                        <input 
                            maxlength="2" 
                            placeholder="UF" 
                            style={{ width:80 }}
                            value={uf}
                            onChange={ resposta => setUf(resposta.target.value)}
                        />
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
            
       </div>
    );
}