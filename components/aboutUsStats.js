import styles from "../styles/aboutUsStats.module.css"
import Layout from "../components/layout"
import React, { useState } from 'react';
import {globalContent} from "./content"
import CountUp from 'react-countup';
import Fade from 'react-reveal/Fade';
import {sliderVideos} from "./sliderContent"
import Image from 'next/image'
// import video from '../public/TelegramVideo.mp4'


export function AboutUsStats(props){

    const [hoveredButton, setHoveredButton] = useState(false);
    const [showStat, setShowStat] = useState(false)
    const [currentVideo, setCurrentVideo] = useState(0)
    const [hovered1, setHovered1] = useState(false)
    const [hovered2, setHovered2] = useState(false)

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
                            {sliderVideos[currentVideo].text[props.lang].text1}
                        </p>
                        <p className={styles.subheading}>
                            {sliderVideos[currentVideo].text[props.lang].text2}
                        </p>
                        {/* <div className={styles.statsWrapper}>
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
                        </div> */}
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
                <div>
                    {
                        sliderVideos.map((video, index)=>
                        <div 
                            className={styles.imgWrapper}
                            style={{
                                display : index == currentVideo ? "block" : "none"
                            }}
                            key={index*21}
                        >
                            <img className={styles.img} src="/samsung.png"></img>
                            <video autoPlay muted loop className={styles.video}>
                                <source src={video.src} type="video/mp4"/>
                            </video>
                        </div>
                        )
                    }

                            <div className={styles.changeSlideButtonsWrapper}>
                                <div   
                                    className={styles.changeSlideButton}
                                    onMouseEnter={() => setHovered1(true)}
                                    onMouseLeave={() => setHovered1(false)}
                                    style={{
                                        backgroundColor: hovered1? "transparent" : "#AFDF9D"
                                    }}
                                    onClick={() => {
                                        if(currentVideo == 0){
                                            setCurrentVideo(sliderVideos.length-1)
                                        }
                                        else{
                                            setCurrentVideo(currentVideo-1)
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
                                        if(currentVideo == sliderVideos.length-1){
                                            setCurrentVideo(0)
                                        }
                                        else{
                                            setCurrentVideo(currentVideo+1)
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

                    <div className={styles.buttonsWrapper}>
                    {
                        sliderVideos.map((video, index)=>
                        <div 
                            className={styles.buttonVideo}
                            style={{
                                backgroundColor : index == currentVideo ? "#AFDF9D" : "#E5E5E5"
                            }}
                            onClick={()=> setCurrentVideo(index)}
                            key={index*11}
                        />)
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}
