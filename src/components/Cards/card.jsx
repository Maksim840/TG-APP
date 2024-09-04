import React from "react";
import oven from "../../images/oven.jpg"
import "./card.css"

const Card = () => {
    return (
        <div className="cards_container">
            <div>
                <img src={oven}/>
            </div>
            <div>
                <img src={oven}/>
            </div>
            <div>
                <img src={oven}/>
            </div>
            <div>
                <img src={oven}/>
            </div>
            <div>
                <img src={oven}/>
            </div>
        </div>
        
    )
}
export default Card;