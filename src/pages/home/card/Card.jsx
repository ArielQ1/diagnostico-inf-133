import React, { useEffect, useState } from 'react';
import css from './card.module.scss';
import axios from 'axios';
import { URL_POKEMON } from '../../../api/apiRest';

export default function Card({card}) {

    const [itemPokemon, setitemPokemon] = useState({})
    const [especiePokemon, setEspeciePokemon] = useState({})
    console.log(itemPokemon);

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

    return (
        <div className={css.card}>
            
            <div className={css.sub_card}>
                <h3>My pokemon</h3>
                <strong className={css.name_card}> {itemPokemon.name} </strong>
                <strong className={css.id_card}> 001 </strong>
                <img className={css.img_poke} src={itemPokemon?.sprites?.other["official-artwork"]?.front_default} alt="pokemon" />
                <h4 className={css.stats_poke}>About</h4>
                <h4 className={css.habitad_poke}>
                    Type : 
                    <div className={css.div_type}>
                        {itemPokemon?.types?.map((ti, index) => {
                            return <h4 key={index}>{ti.type.name},</h4>;
                        })}
                    </div>
                </h4>
                <h4 className={css.altura_poke}>
                    Height: 
                    <div className={css.div_others_height}>
                        {itemPokemon.height/10} m
                    </div>
                </h4>
                <h4 className={css.peso_poke}>
                    Weight: 
                    <div className={css.div_others_weight}>
                        {itemPokemon.weight/10} kg
                    </div>
                </h4>
                <h4 className={css.habitad_poke}>
                    habilities : 
                    <div className={css.div_hability}>
                        {itemPokemon?.abilities?.map((ti, index) => {
                            return <h4 key={index}>{ti.ability.name},</h4>;
                        })}
                    </div>
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
