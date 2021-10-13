import React from "react";
import {Card} from './card/card';
import './card/card-styles.css';

export const CardList = (props) =>{

    return (

        <div className='card'>
            {props.monster && props.monster.map((mon) => (
                <Card mon={mon}/>
            ))}
        </div>
    )
}
