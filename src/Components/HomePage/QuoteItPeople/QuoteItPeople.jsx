import React from "react";
import "./QuoteItPeople.css";
import { Fade } from "react-awesome-reveal";

const QuoteItPeople = () => {
    
    const [reveal, setReveal] = React.useState(false);

    const hanldeEnter = () => {
        setReveal(true);
    }

    const handleLeave = () => {
        setReveal(false);
    }

    return(
        <div className="QuoteItPeople">
            <div className="QuoteIt">
                {
                    !reveal? <p className="QuoteItPTruth" onMouseOver={hanldeEnter} onMouseOut={handleLeave} style={{opacity: reveal? 0: 1}}>Reveal The Truth</p>: 
                    <Fade><p className="QuoteItP" onMouseOver={hanldeEnter} onMouseOut={handleLeave} style={{opacity: reveal? 1: 0}}>Rise Up</p> <p className="QuoteItP" onMouseOver={hanldeEnter} onMouseOut={handleLeave} style={{opacity: reveal? 1: 0}}>Live A Life</p></Fade>
                } 
            </div>
        </div>
    )
}

export default QuoteItPeople;