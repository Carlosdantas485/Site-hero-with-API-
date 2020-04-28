import React, {useState, useEffect}from 'react';

import './styles.css';
import Logo from'../../assets/logo.svg';
import FotoTeste from'../../assets/foto_teste.jpg';
import {Link, useHistory} from 'react-router-dom';
import {FiPower} from 'react-icons/fi';

import api from '../../services/api';

export default function Ongs(){

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
            setOngs(response.data);
        })
    }, [ongId]);
  
    function exit(){
        localStorage.clear();
        history.push('/');
    }

    function ongSelectd(id){

        localStorage.setItem('IdSelect', id);
    
        history.push('/ongsprofile');
    }

    return(
        <div className="profiles-container">
            <header>
                <img src={Logo} alt="herois"/>
                <span>Bem-Vindo, {ongName}</span>

                <Link className="button" to="/profile">Voltar</Link>

                <button type="button" onClick={exit}>
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ol>
                {ongs.map(value => (
                   <button 
                    className="all-info-ong"
                    onClick={() => ongSelectd(value.id)} 
                    key={value.id}
                    >

                       <div>
                            <img className="photo-test" src={FotoTeste} alt="Foto da ong "/>
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
                    </button> 
                ))}
            </ol>
        </div>
    );
}