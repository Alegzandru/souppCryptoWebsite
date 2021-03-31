import styles from "../styles/testimonials.module.css"
import React, { useState } from 'react';
import {testimonialContentRu, testimonialContentEn} from "./sliderContent"
import {globalContent} from "./content"


export function Testimonials(props){


    const [hovered1, setHovered1] = useState(false);
    const [hovered2, setHovered2] = useState(false);
    const [slide, setSlide] = useState(0)


    return(
        <div className={styles.wrapper}>
            <section name="testimonials" className={styles.section}>
                <div className={styles.container}>
                    <h1 className={styles.h1}>
                        {globalContent[props.lang].testimonialsContent.heading}
                    </h1>
                    <div className={styles.testimonialsBox}>

                        <div className={styles.testimonialContainer}>
                            <div className={styles.testimonialPhoto}></div>
                            <div className={styles.testimonialContentWrapper}>
                                <div className={styles.testimonialPhotoMobile}></div>
                                <div className={styles.testimonialName}>
                                    {
                                        props.lang == 0 ? 
                                        testimonialContentRu[slide].name :
                                        testimonialContentEn[slide].name
                                    }
                                </div>
                                <div className={styles.testimonialContent}>
                                    {
                                        props.lang == 0 ? 
                                        testimonialContentRu[slide].text :
                                        testimonialContentEn[slide].text
                                    }
                                </div>
                                <div className={styles.starsWrapper}>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                </div>
                            </div>
                        </div>

                        <div className={styles.testimonialContainer}>
                            <div className={styles.testimonialPhoto}></div>
                            <div className={styles.testimonialContentWrapper}>
                                <div className={styles.testimonialPhotoMobile}></div>
                                <div className={styles.testimonialName}>
                                    {
                                        props.lang == 0 ? 
                                        testimonialContentRu[slide+1].name :
                                        testimonialContentEn[slide+1].name
                                    }
                                </div>
                                <div className={styles.testimonialContent}>
                                    {
                                        props.lang == 0 ? 
                                        testimonialContentRu[slide+1].text :
                                        testimonialContentEn[slide+1].text
                                    }
                                </div>
                                <div className={styles.starsWrapper}>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                </div>
                            </div>
                        </div>

                        <div className={styles.testimonialContainer}>
                            <div className={styles.testimonialPhoto}></div>
                            <div className={styles.testimonialContentWrapper}>
                                <div className={styles.testimonialPhotoMobile}></div>
                                <div className={styles.testimonialName}>
                                    {
                                        props.lang == 0 ? 
                                        testimonialContentRu[slide+2].name :
                                        testimonialContentEn[slide+2].name
                                    }
                                </div>
                                <div className={styles.testimonialContent}>
                                    {
                                        props.lang == 0 ? 
                                        testimonialContentRu[slide+2].text :
                                        testimonialContentEn[slide+2].text
                                    }
                                </div>
                                <div className={styles.starsWrapper}>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                    <img src="/greenStar.svg" className={styles.starImg}></img>
                                </div>
                            </div>
                        </div>

                    </div>

                    <div className={styles.buttonsWrapper}>
                        <div 
                            className={styles.buttonLeft}
                            onMouseEnter={() => setHovered1(true)}
                            onMouseLeave={() => setHovered1(false)}
                            style={{backgroundColor: hovered1? "#2D3E50" : "#AFDF9D"}}
                            onClick={()=>setSlide(slide == 0 ? 3 : 0)}
                        >
                            <img src={hovered1 ? "/greenArrow.svg" :"/leftArrow3.svg"} className={styles.leftArrow}></img>
                        </div>

                        <div 
                            className={styles.buttonRight}
                            onMouseEnter={() => setHovered2(true)}
                            onMouseLeave={() => setHovered2(false)}
                            style={{backgroundColor: hovered2? "#2D3E50" : "#AFDF9D"}}
                            onClick={()=>setSlide(slide == 0 ? 3 : 0)}
                        >
                            <img src={hovered2 ? "/greenArrow.svg" :"/leftArrow3.svg"} className={styles.rightArrow}></img>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}