import React from "react";


const BeyCard = (props) => {
  return (
    <div onClick={() => props.flipFav(props.info)} >
      <h3>{props.info.name}</h3>
      <img src={props.info.img} />
    </div>
  );
};

export default BeyCard;