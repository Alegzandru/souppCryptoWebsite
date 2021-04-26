import styles from "../styles/aboutUsStats2.module.css"
import Layout from "./layout"
import React, { useState, useContext } from 'react';
import {globalContent} from "./content"
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade';
import {WidthContext} from "./context"
// import video from '../public/TelegramVideo.mp4'


export function AboutUsStats(props){

    const [videoClicked, setVideoClicked] = useState(1)
    const {width, setWidth} = useContext(WidthContext)

    return(
        <div className={styles.wrapper}>
            <h2 className={styles.h1}>
                {globalContent[props.lang].aboutUsStatsContent.heading2}
            </h2>
            <div name="stats" className={styles.container}>

                <div 
                    className={styles.imgWrapper}
                    style={{
                        display : width < 940 ? videoClicked != 1 ? "none" : "" : ""
                    }}
                >
                    <img className={styles.img} src="/samsung.png"></img>
                    <video autoPlay muted loop className={styles.video}>
                        <source src="/IMG_2326.mp4" type="video/mp4"/>
                    </video>
                </div>

                <div 
                    className={styles.imgWrapper2}
                    style={{
                        display : width < 940 ? videoClicked != 2 ? "none" : "" : ""
                    }}
                >
                    <img className={styles.img} src="/samsung.png"></img>
                    <video autoPlay muted loop className={styles.video}>
                        <source src="/TelegramVideoCompressed.mp4" type="video/mp4"/>
                    </video>
                </div>

                <div 
                    className={styles.imgWrapper3}
                    style={{
                        display : width < 940 ? videoClicked != 3 ? "none" : "" : ""
                    }}
                >
                    <img className={styles.img} src="/samsung.png"></img>
                    <video autoPlay muted loop className={styles.video}>
                        <source src="/IMG_2327.mp4" type="video/mp4"/>
                    </video>
                </div>

                <div className={styles.buttonsWrapper}>
                    <div 
                        className={videoClicked == 1 ? styles.buttonActive : styles.buttonInactive}
                        onClick={ ()=> {
                            setVideoClicked(1)
                        }}
                    ></div>
                    <div 
                        className={videoClicked == 2 ? styles.buttonActive : styles.buttonInactive}
                        onClick={ ()=> {
                            setVideoClicked(2)
                        }}
                    ></div>
                    <div 
                        className={videoClicked == 3 ? styles.buttonActive : styles.buttonInactive}
                        onClick={ ()=> {
                            setVideoClicked(3)
                        }}
                    ></div>
                </div>
            </div>
        </div>
    )
}
