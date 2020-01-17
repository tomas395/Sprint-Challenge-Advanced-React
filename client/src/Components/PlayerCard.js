import React from "react";

const PlayerCard = props => {
  return (
    <div className="player-card">
      <h2>{props.name}</h2>
      <h3>{props.country}</h3>
    </div>
  );
};

export default PlayerCard;
