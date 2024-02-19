import React, { useEffect, useState } from 'react';
import css from './card.module.scss';
import axios from 'axios';
import { URL_POKEMON } from '../../../api/apiRest';

export default function Card({card}) {

    const [itemPokemon, setitemPokemon] = useState({})
    const [especiePokemon, setEspeciePokemon] = useState({})
    

    useEffect(() => {
        const dataPokemon =async () => {
            const api =await axios.get(`${URL_POKEMON}/${card.name}`);
            setitemPokemon(api.data);
        }

        dataPokemon();

    }, []);
    
    useEffect(() => {
        const dataEspecie =async () => {
            const URL = card.url.split("/");
            const api =await axios.get(`${URL_ESPECIES}/${URL[6]}`);
            setEspeciePokemon(api.data);
        }

        dataEspecie();

    }, []);

    console.log(card);
    return (
        <div className={css.card}>
            <img className={css.img_poke} src={itemPokemon?.sprites?.other["official-artwork"]?.front_default} alt="pokemon" />
            <div className={css.sub_card}>
                <h3>My pokemon</h3>
                <strong className={css.name_card}> name </strong>
                <strong className={css.id_card}> 001 </strong>
                <h4 className={css.stats_poke}>About</h4>
                <h4 className={css.altura_poke}>
                    10 cm
                </h4>
                <h4 className={css.peso_poke}>
                    peso
                </h4>
                <h4 className={css.habitad_poke}>
                    habitad
                </h4>
                <h4 className={css.stats_poke}>Stats</h4>
                <div className={css.div_stats}>
                    {itemPokemon?.stats?.map((sta, index )=> {
                        return  <h6 key={index} className={css.item_stats}>
                                <span className={css.name}>{sta.stat.name}</span>
                                <span className={css.numero}>{sta.base_stat}</span>
                        </h6>;
                    } )}
                </div>
            </div>

        </div>
    )
}
