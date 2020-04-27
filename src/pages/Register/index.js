import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import{FiArrowLeft} from 'react-icons/fi';

import './styles.css';

import logo from'../../assets/logo.svg';

export default function Register(){
    
    const history = useHistory();

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
              
                <form>
                    <input placeholder="Nome da ONG"/>
                    <input type="email" placeholder="E-mail"/>
                    <input placeholder="Wha"/>
                    
                    <div className="input-group">
                        <input placeholder="cidade"/>
                        <input maxlength="2" placeholder="UF" style={{ width:80 }}/>
                    </div>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
            
       </div>
    );
}