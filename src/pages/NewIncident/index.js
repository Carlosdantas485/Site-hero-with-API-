import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';

import './styles.css';

import logo from '../../assets/logo.svg';
import api from '../../services/api';

export default function NewIncident() {

  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [value, setValue] = useState();
  
  // nome guarda
  //setNome troca
  //useState define

  const ongId = localStorage.getItem('ongId');
  
  const history = useHistory();

  async function handleNewIncident(e){
    e.preventDefault();
      // guarda tudo no json
    const data = { 
      title,
      description,
      value 
    }
    
    try{
      const response = await api.post( '/incidents', data, { 
        headers:{ 
          Authorization: ongId, 
          // Aplication: ongPassword
        }
      });
      console.log(response.data);

      history.push('/profile');
    }      
    catch(err){
      alert('Falha ao encontrar este ID ! TENTE NOVAMNETE !')
    }
  }

  function home(){
    history.push('/profile');
  }


  return (
    <div className="new-incident-container">
      <div className="content">
        <section>
          <img src={logo} alt="Herois" onClick={home}/>

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
          onChange={ resposta => setTitle(resposta.target.value)}
          />

          <textarea 
          placeholder="Descricao" 
          value={description}
          onChange={ resposta => setDescription( resposta.target.value ) }
          />
          
          <input 
            placeholder="Valor em reais"
            value={value}
            //onChange = quando mudar
            onChange={ resposta => setValue( resposta.target.value )}
          />
          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
}
