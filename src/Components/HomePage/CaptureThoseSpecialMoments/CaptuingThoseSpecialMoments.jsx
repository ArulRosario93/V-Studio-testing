import React from "react";
import "./CaptuingThoseSpecialMoments.css";
import { useIntersectionObserver } from 'usehooks-ts';
import { Fade } from "react-awesome-reveal";

const CaptuingThoseSpecialMoments = () => {

    const { isIntersecting, ref } = useIntersectionObserver({
        threshold: .9,
      })
    
      console.log(`Render Section`, {
        isIntersecting,
      });
    

    return (
        <div className="CaptuingThoseSpecialMoments" ref={ref}>
            <div className="CaptuingThoseSpecialMomentsHead">Captuing those special moments</div>
            <div className="CaptuingThoseSpecialMomentsFlex">
                <div className="CaptuingThoseSpecialMomentsImg">
                    <img className="CaptuingThoseSpecialMomentsImgImg" src="https://www.thegreekclub.com.au/wp-content/uploads/Kat-Manoli-Sneak-Peeks-11.jpg" alt="" srcset="" />    
                </div>    
                    <div className="CaptuingThoseSpecialMomentsContent">
                        <Fade>
                            <p className="CaptuingThoseSpecialMomentsContentP">Capturing special moments is like bottling joy, preserving the essence of life's most beautiful experiences. Each click of the shutter holds the laughter, the tears, the embraces, and the whispers of those we hold dear. It's in these fleeting instances that true magic lies, where the ordinary becomes extraordinary, and every frame tells a story of love, connection, and pure happiness. </p>
                            <br />
                            <p className="CaptuingThoseSpecialMomentsContentP">Imagine a family gathered around a birthday cake, the glow of the candles reflecting in the eyes of a child making a wish. Picture a couple sharing a quiet dance under the stars, their world reduced to the rhythm of their hearts. Visualize the pride in a parent's eyes as their child takes their first steps, or the joy in a graduate's smile, marking the culmination of years of hard work and dreams. </p>
                            <br />
                            <p className="CaptuingThoseSpecialMomentsContentP">In capturing these moments, we create a tapestry of memories that warms the soul and brightens even the darkest days. Through the lens, we see the world not just as it is, but as it feels, filled with love, joy, and endless possibilities. </p>
                        </Fade>
                    </div>   
            </div>
        </div>
    );
}

export default CaptuingThoseSpecialMoments;