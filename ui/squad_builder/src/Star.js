import React, {useState, useEffect} from "react";

import "./Star.css";

import Rating from "@mui/material/Rating";

const Star = ({players}) => {

    const [starVal, setStarVal] = useState(0);

    useEffect(() => {
        setStarVal(calculateCompetitiveness());
    }, [players]);

    const calculateCompetitiveness = () => {
        let sum = 0;
        players.forEach(function (player) {
            if (!player) return;
            sum += parseInt(player.overall);
        });

        let percentage = sum / 11;

        console.log(percentage);

        switch (true) {
            case (percentage > 83):
                return 5;
            case (percentage > 80):
                return 4.5;
            case (percentage > 75):
                return 4;
            case (percentage > 70):
                return 3.5;
            case (percentage > 60):
                return 3;
            case (percentage > 50):
                return 2.5;
            case (percentage > 40):
                return 2;
            case (percentage > 30):
                return 1.5;
            case (percentage > 20):
                return 1;
            case (percentage > 10):
                return 0.5;
            default:
                return 0;
        }
    }

    return (
        <div className="star-div">
            <Rating 
            name="half-rating" 
            value={starVal} 
            precision={0.5} 
            readOnly>
            </Rating>
        </div>
    );
}

export default Star;