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
            const apiPoke = await axios.get(`${URL_POKEMON}`);

            setarrayPokemon(apiPoke.data.results);
        }

        api();
    }, []);
    
  return (
    <div className={css.layout}>
        <Header/>


        <div>
            {arrayPokemon.map((card, index) => {
                return <Card key={index} card={card} />;
            })}
        </div>
    </div>
  );
}
