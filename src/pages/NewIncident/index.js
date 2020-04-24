import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident() {

  // nome guarda
  //setNome troca
  //useState define

  const history = useHistory();
  
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState();
  
  async function handleNewIncident (e){
    e.preventDefault();

    api.post( 'incident',{ 
      
      "title": title, 
      "description": description,
      "value": value
    });
          
      history.push('/profile');
    }

  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Herois"/>

          <h1>Cadastrar novo caso</h1>
          <p>Descreva o caso detalhadamente para encontrar um heroi para resolver isso.</p>
        
          <Link className="links" to="/profile">
            <FiArrowLeft size={16} color="#e02041"/>
            Voltar para home
          </Link>
        </section>

        <form onSubmit={handleNewIncident}> 
          <input 
          placeholder="Titulo do caso" 
          value={title}
          onChange={ resposta => setTitle (resposta.target.value)}
          />

          <textarea 
          placeholder="Descricao" 
          value={description}
          onChange={ resposta => setDescription ( resposta.target.value ) }
          />
          
          <input 
            placeholder="Valor em reais"
            value={value}
            onChange={ resposta => setValue ( resposta.target.value )}
          />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
