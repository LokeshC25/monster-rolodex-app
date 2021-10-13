import React from "react";
import './card-styles.css';

export const SearchComp = (props) => {
  return (
    <div className='search'>
      <input
        type={props.type}
        placeholder={props.placeholder}
        onChange={(e) => props.handleclick(e)}
      />
    </div>
  );
};
