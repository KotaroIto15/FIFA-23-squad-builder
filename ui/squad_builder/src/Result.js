import React from "react";

import "./Result.css";

const Result = ({index, players, setPlayers, playerData}) => {

    if (playerData === "Not found") {
        return (
            <div className="not-found">
                <h2 className="not-found">Not Found</h2>
            </div>
        );
    }

    const createNewPlayer = (newId) => {
        return {
            pos: newId,
            name: playerData.name,
            overall: playerData.overall,
            image: playerData.image
        };
    }

    const handleClick = (e) => {
        console.log(index.get("number")-1)
        var updatedPlayers = [...players];
        updatedPlayers[index.get("number")-1] = createNewPlayer(index.get("number")-1);
        setPlayers(updatedPlayers);
        console.log(players);
    };

    return (
        <div className="result-box" onClick={handleClick}>
            <img className="player-img" src={playerData.image}></img>
            <div className="player-info">
                <p>{playerData.name}</p>
                <p>{playerData.overall}</p>
            </div>
        </div>
    );
};

export default Result;