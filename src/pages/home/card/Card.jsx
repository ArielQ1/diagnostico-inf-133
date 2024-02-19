import React, { useEffect, useState } from 'react';
import css from './card.module.scss';
import axios from 'axios';
import { URL_POKEMON } from '../../../api/apiRest';

export default function Card({card}) {

    const [itemPokemon, setitemPokemon] = useState({})
    console.log(itemPokemon);

    useEffect(() => {
        const dataPokemon =async () => {
            const api =await axios.get(`${URL_POKEMON}/${card.name}`)
            setitemPokemon(api.data)
        }

        dataPokemon()

    }, [])
    

    console.log(card);
    return (
        <div>
            <img src={itemPokemon?.sprites?.other["official-artwork"]?.front_default} alt="pokemon" />
            <div>
                <strong> 001 </strong>
                <strong> name </strong>
                <h4>
                    10 cm
                </h4>
                <h4>
                    peso
                </h4>
                <h4>
                    habitad
                </h4>
            </div>
        </div>
    )
}
