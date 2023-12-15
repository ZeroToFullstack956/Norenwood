import { DotsCard } from './landingPage/DotCard/dotCard.jsx';
import { LandingUnderlay } from './landingPage/navBar/LandingUnderlay.jsx';
import { LandingPageText } from './landingPage/text/landingPageText.jsx';
import { SpinGame } from './3DimentionalThings/3dLoader.jsx';
import React, { useState, useEffect } from 'react';
//VideoButton.module.css. This change signifies that the styles in this file are a module and should be treated as such by the build tool
import styles from './VideoButton.module.css';
import { svgLarge } from '../../utils/svgs/svgLarge.jsx';
import { svgSmall } from '../../utils/svgs/svgSmall.jsx';
import { svgXsmall } from '../../utils/svgs/svgXsmall.jsx';

export const VideoButton = () => {
    const [isChecked, setIsChecked] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 1300);
    const [isXSmallScreen, setIsXSmallScreen] = useState(window.innerWidth < 505);
    
    const handleCheckboxChange = (event) => {
        setIsChecked(event.target.checked);
    };

    const responsiveFont = { base: "1.1rem", sm: ".9rem", md: "1.659rem", lg: "1.5rem", xl: "1.4rem", "2xl": "1.4rem" }

    useEffect(() => {
      const handleResize = () => {
        const width = window.innerWidth;
        setIsXSmallScreen(width < 505);
        setIsSmallScreen(width >= 505 && width < 1170);
      };
  
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
      <>
        <div className={styles.svgMask}>
          <div className={styles.mainContentContainer}>
            <div className={styles.dotsCard}>
              {/* Svg positioning is controlled by VideoButton.module.css and the text position is controlled inside dotCard.css */}
              <DotsCard content={isSmallScreen ? svgSmall() : isXSmallScreen ? svgXsmall() : svgLarge()} content2={ <LandingPageText font_Size={responsiveFont}/>} />
            </div>
            <div className={styles.lowerContainer}>
              <div className={styles.iphone}>
                <SpinGame isChecked={isChecked}/>
              </div>
            </div>
          </div>
          <div className={styles.customSvg}>  
            <div className={styles.wrapper}>
              <input type="checkbox" checked={isChecked} onChange={handleCheckboxChange}/>
              <div className={styles.video}>
             <video loop={true} muted={true} autoPlay={true} >
                {Date.now() % 2 === 0 
                    ? <source src="https://www.robmillsarchitects.com/files/land/city/RMA_Web_land_city_1.mp4" type="video/mp4" />
                    : Date.now() % 3 === 0 ? <source src="https://www.robmillsarchitects.com/files/land/city/RMA_Web_land_city_2.mp4" type="video/mp4" />
                    : <source src="https://www.robmillsarchitects.com/files/land/city/RMA_Web_land_city_3.mp4" type="video/mp4"/>
                    }
            </video>
              </div>
              <div className={styles.text}>
                <span className="videoText" data-text={isChecked ? "⏪ Click to return" : "🎯 Click to watch"}></span>
              </div>
              <div className={styles.underlay}>
                <div className={styles.underlayContent}>
                  {isChecked && <LandingUnderlay isCheckboxChecked={isChecked} />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
    
};