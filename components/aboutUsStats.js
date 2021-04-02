import styles from "../styles/aboutUsStats.module.css"
import Layout from "../components/layout"
import React, { useState } from 'react';
import {globalContent} from "./content"
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade';
// import video from '../public/TelegramVideo.mp4'


export function AboutUsStats(props){

    const [hoveredButton, setHoveredButton] = useState(false);
    const [showStat, setShowStat] = useState(false)

    const scrollPosition = () => {
        setShowStat(window.scrollY > 700)
        // console.log(showStat)
        // console.log(window.scrollY)
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", scrollPosition);
    }

    return(
        <div className={styles.wrapper}>
            <div name="stats" className={styles.container}>
                <div className={styles.textDivWrapper}>
                    <Fade left>
                        <h1 className={styles.h1}>
                            {globalContent[props.lang].aboutUsStatsContent.heading}
                        </h1>
                        <p className={styles.subheading}>
                            {globalContent[props.lang].aboutUsStatsContent.subheading}
                        </p>
                        <div className={styles.statsWrapper}>
                            <div className={styles.statsContainer}>
                                <p className={styles.pWhite}>
                                    {globalContent[props.lang].aboutUsStatsContent.stat1.number}
                                </p>
                                <p className={styles.pBlue}>
                                    {globalContent[props.lang].aboutUsStatsContent.stat1.text}
                                </p>
                            </div>
                            <div className={styles.statsContainer}>
                                <p className={styles.pWhite}>

                                    {
                                        showStat?
                                        <CountUp
                                            end={50}
                                            duration={10}
                                            start={10}
                                        />
                                        :
                                        <span>
                                            50
                                        </span>
                                    }

                                    +
                                </p>

                                <p className={styles.pBlue}>
                                    {globalContent[props.lang].aboutUsStatsContent.stat2.text}
                                </p>
                            </div>
                            <div className={styles.statsContainer}>
                                <p className={styles.pWhite}>
                                    {globalContent[props.lang].aboutUsStatsContent.stat3.number}
                                </p>
                                <p className={styles.pBlue}>
                                    {globalContent[props.lang].aboutUsStatsContent.stat3.text}
                                </p>
                            </div>
                        </div>
                        <a
                            href="https://t.me/joinchat/AAAAAEgPEa1HRUVe6vN8Gw"
                            className={styles.link}
                        >
                            <div 
                                className={styles.button}
                                onMouseEnter={() => setHoveredButton(true)}
                                onMouseLeave={() => setHoveredButton(false)}
                                style={{color: hoveredButton? "#AFDF9D" : "white"}}
                            >
                                {globalContent[props.lang].aboutUsStatsContent.button}
                            </div>
                        </a>
                    </Fade>
                </div>
                <div className={styles.imgWrapper}>
                    <img className={styles.img} src="/samsung.png"></img>
                    <video autoPlay muted loop className={styles.video}>
                        <source src="/TelegramVideoCompressed.mp4" type="video/mp4"/>
                    </video>
                    {/* <video src={video}></video> */}
                </div>
            </div>
        </div>
    )
}
