import styles from "../styles/aboutUsTrading.module.css"
import Layout from "../components/layout"
import Image from 'next/image'
import {sliderPhotos} from "./sliderContent"
import React, { useState } from 'react';
import {globalContent} from "./content"
import Fade from 'react-reveal/Fade';




export function AboutUsTrading(props){

    const [slide, setSlide] = useState(0);
    const [hovered1, setHovered1] = useState(false)
    const [hovered2, setHovered2] = useState(false)

    return(
        <div className={styles.wrapper}>
            <div name="trading" className={styles.container}>
                <h1 className={styles.h1}>
                    {globalContent[props.lang].aboutUsTradingContent.heading}
                </h1>
                <div className={styles.mainInfoWrapper}>
                    <div className={styles.sliderWrapper}>
                        <div className={styles.slider}>
                            <img
                                src={sliderPhotos[slide].photo}
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
                                            setSlide(2)
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
                                        if(slide == 2){
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
                            <div 
                                className={slide == 0 ? styles.slidesButtonActive : styles.slidesButtonInactive}
                                onClick={() => setSlide(0) }
                            >
                            </div>
                            <div 
                                className={slide == 1 ? styles.slidesButtonActive : styles.slidesButtonInactive}
                                onClick={() => setSlide(1) }
                            >
                            </div>
                            <div 
                                className={slide == 2 ? styles.slidesButtonActive : styles.slidesButtonInactive}
                                onClick={() => setSlide(2) }
                            >
                            </div>
                        </div>
                    </div>
                    <div className={styles.textDiv}>
                        <Fade right>
                            <h2 className={styles.h2}>
                                {globalContent[props.lang].aboutUsTradingContent.heading2}
                            </h2>
                            <p className={styles.subheading}>
                                {globalContent[props.lang].aboutUsTradingContent.subheading}
                            </p>
                            <div className={styles.statsWrapper}>
                                <div className={styles.stat}>
                                    <span className={styles.statNumber}>
                                        {globalContent[props.lang].aboutUsTradingContent.stat1.number}
                                    </span>
                                    <span className={styles.statText}>
                                        {globalContent[props.lang].aboutUsTradingContent.stat1.text}
                                    </span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.statNumber}>
                                        {globalContent[props.lang].aboutUsTradingContent.stat2.number}
                                    </span>
                                    <span className={styles.statText}>
                                        {globalContent[props.lang].aboutUsTradingContent.stat2.text}
                                    </span>
                                </div>
                                <div className={styles.stat}>
                                    <span className={styles.statNumber}>
                                        {globalContent[props.lang].aboutUsTradingContent.stat3.number}
                                    </span>
                                    <span className={styles.statText}>
                                        {globalContent[props.lang].aboutUsTradingContent.stat3.text}
                                    </span>
                                </div>
                            </div>
                        </Fade>
                    </div>
                </div>
            </div>
        </div>
    )
}