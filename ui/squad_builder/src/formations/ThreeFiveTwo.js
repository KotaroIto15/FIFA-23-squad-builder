import React from "react";
import Stack from "@mui/material/Stack";

import "./XI.css";

import Player from "../Player";

const ThreeFiveTwo = ({showSearch, setShowSearch, setIndex, players, map}) => {
    return (
        <Stack
            direction="column"
            justifyContent="space-between"
            alignItems="stretch"
            className="formation-box"
        >
            <div id = "st_wg" className="formation-row">
                <Player showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} position = {map("ST", 11)} players = {players}/>
                <Player showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} position = {map("ST", 9)} players = {players}/>
            </div>

            <div id = "am" className="formation-row">
                <Player showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} position = {map("CAM", 10)} players = {players}/>
            </div>

            <div id = "wb" className="formation-row">
                <Player showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} position = {map("LWB", 3)} players = {players}/>
                <Player showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} position = {map("RWB", 7)} players = {players}/>
            </div>

            <div id = "dm" className="formation-row">
                <Player showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} position = {map("LCM", 6)} players = {players}/>
                <Player showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} position = {map("RCM", 8)} players = {players}/>
            </div>

            <div id = "df" className = "formation-row">
                <Player showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} position = {map("LCB", 5)} players = {players}/>
                <Player showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} position = {map("CB", 4)} players = {players}/>
                <Player showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} position = {map("RCB", 2)} players = {players}/>
            </div>

            <div id = "gk" className = "formation-row">
                <Player showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} position = {map("GK", 1)} players = {players}/>
            </div>
        </Stack>
    );
}

export default ThreeFiveTwo;