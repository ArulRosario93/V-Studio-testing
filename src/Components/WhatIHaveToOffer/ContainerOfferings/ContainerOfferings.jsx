import React from "react";
import "./ContainerOfferings.css";

const ContainerOfferings = ({ image, text, position }) => {

    const [mouseOver, setMouseOver] = React.useState(false)

    const handleMouseOver = () => {
        if (window.innerWidth < 600) {
            setMouseOver(true)
        }
    }

    const handleMouseOut = () => {
        setMouseOver(false)
    }   

    const handleClick = () => {
        // Go to Service Page
    }

    return (
            <div className="ContainerOfferingsFlexContainer" onClick={() => handleClick()} onMouseOver={() => handleMouseOver()} onMouseLeave={() => handleMouseOut()}>
                <div className="ContainerOfferingsFlexContainerImg"><img className="ContainerOfferingsFlexContainerImgImg" style={{transform: mouseOver? 'scale(1.1)': ''}} src={image} alt="" srcset="" /></div>
                <div className="ContainerOfferingsFlexContainerForTitle" style={{alignItems: position}}>
                    <p className="ContainerOfferingsFlexContainerForTitlePara">{text}</p>
                </div>
                <div className={mouseOver? "" :"ContainerOfferingsFlexContainerForBorder"}></div>
                {
                    mouseOver ? <div className="ContainerOfferingsFlexContainerForHover" style={{color: 'white'}} onMouseOut={handleMouseOut}>
                        <div className="ContainerOfferingsFlexContainerForHoverContent">
                            
                            <p className="ContainerOfferingsFlexContainerForHoverContentP">Click To View More</p>
                            
                        </div>
                    </div> : null
                }
            </div>
    );
}

export default ContainerOfferings;