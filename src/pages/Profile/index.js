

import React, {useState, useEffect}from 'react';

import './styles.css';
import Logo from'../../assets/logo.svg';
import {Link, useHistory} from 'react-router-dom';
import {FiPower, FiTrash2} from 'react-icons/fi';

import api from '../../services/api';

export default function Profile(){

    const [incidents, setIncidents] = useState([]);
    const ongName = localStorage.getItem('ongName');
    const ongId = localStorage.getItem('ongId');
    const history = useHistory();
    
    useEffect(() => { 
        api.get('/incidents', {
        })
        .then(response => {
            
            setIncidents(response.data);
        })
    }, [ongId]);

    async function handleDelete(id){
        try{
            await api.delete(`incidents/${id}`,{
                headers: { 
                    Authorization: ongId
                }
            })

            setIncidents(incidents.filter(incident => incident.id !== id));
        }
        catch(err){
            alert("error to delete ! try again ")
        }
    }

    function exit(){
        localStorage.clear();
        history.push('/');
    }

    function home(){
        history.push('/profile');
    }

    return(
        <div className="profiles-container">
            <header>
                <img src={Logo} alt="herois" onClick={home}/>
                <span>Bem-Vindo, {ongName}</span>
                
                <Link className="button" to="/ongs">Ongs Cadastradas</Link>
            
                <Link className="button" to="/incidents/new">Cadastrar Novo Caso</Link>

                <button type="button" onClick={exit}>
                    <FiPower size={18} color="#e02041"/>
                </button>
            </header>
            <h1>Casos Cadastrados</h1>
            <ol>
                {incidents.map(value => (
                   <li key={value.id}>
                        <strong>Caso:</strong>
                        <p>{value.title}</p>

                        <strong>Descrição</strong>
                        <p>{value.description}</p>

                        <strong>VALOR:</strong>
                        <p>{value.value}</p>

                        <button type="button" onClick={ () => handleDelete( value.id )}>
                            <FiTrash2 size={20} color="#a8a8b3"/>
                        </button>
                    </li> 
                ))}
            </ol>
        </div>
    );
}