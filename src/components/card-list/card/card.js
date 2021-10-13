import React from 'react';
import './card-styles.css';
export const Card = (props) => {

return (
     <div className='card-list'>
     <img alt='monsters' src={`https://robohash.org/${props.mon.id}?set=set2&size=180x180`} />   
    <h2>{props.mon.name}</h2>
    <h4>{props.mon.email}</h4>
    </div>
);
}