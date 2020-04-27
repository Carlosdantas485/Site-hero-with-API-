import React, {useState, useEffect}from 'react';

import './styles.css';
import Logo from'../../assets/logo.svg';
import FotoTeste from'../../assets/foto_teste.jpg';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

export default function Ongs(){

    //cont e minha declaraçao da constante 
    // [insidents armazena os dadeos do estado, vai atribuir os dados para o meu estado
    // useStates(tipo de deados do meu esrado )

    const [ongs, setOngs] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();

    useEffect(() => { 
        api.get('/ongs', {
            headers:{ 
                Authorization: ongId 
            }
        })
        .then(response => {
            //data = conteudo da api
            setOngs(response.data);
        })
    }, [ongId]);
  
    function exit(){
        localStorage.clear();
        history.push('/');
    }

    return(
        <div className="profiles-container">
            <header>
                <img src={Logo} alt="herois"/>
                <span>Bem-Vindo, {ongName}</span>

                <Link className="button" to="/ongs">Ongs Cadastradas</Link>

                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>

                <button type="button" onClick={exit}>
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ol>
                {ongs.map(value => (
                   <li className="all-info-ong" >
                       
                       <div>
                       <img className="photo-test" src={FotoTeste}/>
                            <div className="name-ong">
                                <strong>Nome:</strong>
                                <p>{value.name}</p>
                            </div>
                       </div>
                       
                        <div>
                            <strong>Email:</strong>
                            <p>{value.email}</p>

                            <strong>Whatsapp</strong>
                            <p>{value.whatsapp}</p>

                            <strong>Cidade:</strong>
                            <p>{value.city}</p>

                            <strong>Estado</strong>
                            <p>{value.uf}</p>
                        </div>
                        
                    </li> 
                ))}
            </ol>
        </div>
    );
}