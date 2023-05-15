import React from "react";
import "./Field.css";

import Container from "react-bootstrap/esm/Container";

import FourThreeThree from "./formations/FourThreeThree";
import FourFourTwo from "./formations/FourFourTwo";
import ThreeFiveTwo from "./formations/ThreeFiveTwo";

const Field = ({selectedFormation, showSearch, setShowSearch, setIndex, players})=> {

    const createMap = (pos, num) => {
        var res = new Map([
            ["name", pos],
            ["number", num]
        ]);

        return res;
    }

    const formation_map = new Map([
        ["FourThreeThree", <FourThreeThree showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} players = {players} map = {createMap} />],
        ["FourFourTwo", <FourFourTwo showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} players = {players} map = {createMap} />],
        ["ThreeFiveTwo", <ThreeFiveTwo showSearch = {showSearch} setShowSearch = {setShowSearch} setIndex = {setIndex} players = {players} map = {createMap} />]
    ]);

    return (
        <Container className="field-container" fluid>
            {formation_map.get(selectedFormation)}
        </Container>
    );
}

export default Field;