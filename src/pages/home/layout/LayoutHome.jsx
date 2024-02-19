import React, { useEffect, useState } from 'react';
import css from './layout.module.scss';
import Header from '../header/Header';
import axios from 'axios';
import { URL_POKEMON } from '../../../api/apiRest';
import Card from '../card/Card';

export default function LayoutHome() {
    const [arrayPokemon, setarrayPokemon] = useState([]);

    useEffect(() => {
        const api = async () => {
            const apiPoke = await axios.get(`${URL_POKEMON}/?offset=0&limit=${30}`);

            setarrayPokemon(apiPoke.data.results);
        }

        api();
    }, []);

 /*   useEffect(() => {    
    
        const api = async () => {
          const apiPoke = await axios.get(${URL_POKEMON}/?offset=0&limit=${limit});
          setArrayPokemon(apiPoke.data.results);
        }
        
        api();
      }, []);*/

    
  return (
    <div className={css.layout}>
        <Header/>
        <div className={css.card_content}>

            {arrayPokemon.slice(0,45).map((card, index) => (
                (index + 1) % 5 === 0 ? (
                    <Card key={index} card={card} />
                ):null
                
            ))}
        </div>
    </div>
  );
}
