import React from "react";

import "./Formation.css";

import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

const Formation = ({selectedFormation, setSelectedFormation}) => {
    
    const handleChange = (event) => {
        setSelectedFormation(event.target.value);
    }

    return (

        <FormControl sx={{ m: 1, minWidth: 120 }}>
            <InputLabel id="formation-label">Select Formation</InputLabel>
            <Select
                className="formation-select"
                labelId="formation-label"
                id="formation-dropdown"
                value={selectedFormation}
                label="Formation"
                onChange={handleChange}
            >
                <MenuItem value={"FourThreeThree"}><em>4-3-3</em></MenuItem>
                <MenuItem value={"FourFourTwo"}>4-4-2</MenuItem>
                <MenuItem value={"ThreeFiveTwo"}>3-5-2</MenuItem>
            </Select>
        </FormControl>
    );
}

export default Formation;