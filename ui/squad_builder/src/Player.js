import React from "react";

import "./Player.css";

const Player = ({showSearch, setShowSearch, position, setIndex, players}) => {

    const handleClick = (e) => {
        setShowSearch(true);
        setIndex(position);
    }

    const grayBox = ()=> {
        return (
            <div className="gray-box" onClick={handleClick} tabIndex={0}>
                <h2 className="add-icon">+</h2>
            </div>
        );
    }

    const playerImg = () => {
        let player = players[position.get("number") - 1];
        return (
            <div className="player-box" onCanPlay={handleClick}>
                <div className="img-box">
                    <img width={100} height={100} src={player.image}></img>
                </div>
                <div className="info-box">
                    <span>{player.name}</span>
                    <br></br>
                    <span>{player.overall}</span>
                </div>   
            </div>
        );
    }

    return (
        <div onClick={handleClick}>
            {
                (players[position.get("number")-1])
                ? playerImg()
                : grayBox()
            }
        </div>
    );
}

export default Player;