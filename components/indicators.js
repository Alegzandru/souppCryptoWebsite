import styles from "../styles/indicators.module.css"
import Layout from "../components/layout"
import Image from 'next/image'
import {sliderPhotos2} from "./sliderContent"
import React, { useState } from 'react';
import {globalContent} from "./content"
import Fade from 'react-reveal/Fade';




export function Indicators(props){

    const [slide, setSlide] = useState(0);
    const [hovered1, setHovered1] = useState(false)
    const [hovered2, setHovered2] = useState(false)

    return(
        <div className={styles.wrapper}>
            <div name="trading" className={styles.container}>
                <h1 className={styles.h1}>
                    {globalContent[props.lang].indicators.heading}
                </h1>
                <div className={styles.mainInfoWrapper}>
                    <div className={styles.textDiv}>
                        <Fade right>
                            <p className={styles.subheading}>
                                {sliderPhotos2[slide].text[props.lang].text}
                            </p>
                        </Fade>
                    </div>
                    <div className={styles.sliderWrapper}>
                        <div className={styles.slider}>
                            <img
                                src={sliderPhotos2[slide].photo}
                                className={styles.tradingImg}
                            />
                            <div className={styles.changeSlideButtonsWrapper}>
                                <div   
                                    className={styles.changeSlideButton}
                                    onMouseEnter={() => setHovered1(true)}
                                    onMouseLeave={() => setHovered1(false)}
                                    style={{backgroundColor: hovered1? "transparent" : "#AFDF9D"}}
                                    onClick={() => {
                                        if(slide == 0){
                                            setSlide(sliderPhotos2.length - 1)
                                        }
                                        else{
                                            setSlide(slide-1)
                                        }
                                    }}
                                >
                                    <Image
                                        src={hovered1? "/greenArrow.svg" : "/leftArrowInactive.svg"}
                                        height={60}
                                        width={60}
                                    >
                                    </Image>
                                </div>
                                <div 
                                    className={styles.changeSlideButton}
                                    onMouseEnter={() => setHovered2(true)}
                                    onMouseLeave={() => setHovered2(false)}
                                    style={{backgroundColor: hovered2? "transparent" : "#AFDF9D"}}
                                    onClick={() => {
                                        if(slide == sliderPhotos2.length - 1){
                                            setSlide(0)
                                        }
                                        else{
                                            setSlide(slide+1)
                                        }
                                    }}
                                >
                                    <Image
                                        src={hovered2? "/greenArrow.svg" : "/leftArrowInactive.svg"}
                                        height={60}
                                        width={60}
                                        className={styles.rotatedImg}
                                    >
                                    </Image>
                                </div>
                            </div>
                        </div>
                        <div className={styles.slidesButtonsWrapper}>
                            {sliderPhotos2.map((photo, index)=>
                                <div 
                                    className={slide == index ? styles.slidesButtonActive : styles.slidesButtonInactive}
                                    onClick={() => setSlide(index) }
                                >
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}