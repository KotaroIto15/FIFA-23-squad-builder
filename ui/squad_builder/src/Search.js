import React, { useState } from "react";

import TextField from "@mui/material/TextField";

import Result from "./Result";


import "./Search.css";

const Search = ({ players, setPlayers, index }) => {

    const [inputValue, setInputValue] = useState("");

    const [searchResult, setSearchResult] = useState([]);

    const handleEnter = (e) => {
        var url = "http://localhost:9000/apis/player/" + inputValue.toLowerCase().replace(" ", "");
        console.log(url);
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.onload = function () {
            if (xhr.status === 200) {
                var res;
                res = (xhr.responseText === "Not found") ? "Not found" : JSON.parse(xhr.responseText);
                setSearchResult(res);
            }
        };
        xhr.send();
        setInputValue("");
    };

    const renderResults = () => {
        let container = [];

        for (let i = 0; i < searchResult.length; i++) {
            let result = <Result  index={index} players={players} setPlayers={setPlayers} playerData = {searchResult[i]}/>
            container.push(result);
        }

        return container;
    }

    return (
        <div className="search-page">
            <h2 className="search-title">{index.get("name")}</h2>
            <TextField
                fullWidth
                label="Enter player name"
                id="player-search"
                className="player-search"
                value={inputValue}
                sx={{
                    label: {
                        color: "white",
                        fontStyle: "italic",
                    },
                    input: {
                        color: "white",
                        fontFamily: "Cambria, Georgia, serif",
                        fontWeight: "bold",
                        fontSize: "large",
                        fontStyle: "italic",
                    },
                }}
                onChange={(e)=> {
                    setInputValue(e.target.value);
                }}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        // setInputValue(e.target.value);
                        handleEnter(e);
                        console.log(searchResult);
                    }
                }}
            />
            <div id="results" className="results">
                {renderResults()}
                {/* <Result index={index} players={players} setPlayers={setPlayers} playerData = {searchResult} /> */}
            </div>

        </div>
    );
}

export default Search;