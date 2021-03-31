import styles from "../styles/ourServices.module.css"
import Layout from "../components/layout"
import Image from 'next/image'
import React, { useState } from 'react';
import {globalContent} from "./content"
import Bounce from 'react-reveal/Bounce';



export function OurServices(props){

    
    const [hoveredButton1, setHoveredButton1] = useState(false);
    const [hoveredButton2, setHoveredButton2] = useState(false);


    return(
    <div className={styles.wrapper}>
        <div name="services" className={styles.container}>
            <h1 className={styles.h1}>
                {globalContent[props.lang].ourServicesContent.heading}
            </h1>
            <div className={styles.servicesContainer}>
                <div className={styles.serviceWrapper}>
                    <img
                        src="/greenBrain.svg"
                        className={styles.leftImg}
                    >
                    </img>
                    <div className={styles.serviceBox1}>
                        <h2 className={styles.h2}>
                            {globalContent[props.lang].ourServicesContent.coursesHeading}
                        </h2>
                        <div className={styles.serviceTextImgWrapper}>
                            <img
                                src="/video.svg"
                                className={styles.serviceImg}
                            />
                            <p className={styles.serviceText}>
                                {globalContent[props.lang].ourServicesContent.coursesInfo}
                            </p>
                        </div>
                    </div>
                    <a
                        href="https://t.me/joinchat/AAAAAEgPEa1HRUVe6vN8Gw"
                        className={styles.link}
                    >
                        <Bounce left>
                            <div
                                className={styles.button1}
                                onMouseEnter={() => setHoveredButton1(true)}
                                onMouseLeave={() => setHoveredButton1(false)}
                                style={{color: hoveredButton1? "#AFDF9D" : "white"}}
                            >
                                {globalContent[props.lang].ourServicesContent.button}
                            </div>
                        </Bounce>
                    </a>
                </div>
                <div className={styles.serviceWrapper}>
                    <img
                        src="/greenStocks.svg"
                        className={styles.rightImg}
                    >
                    </img>
                    <div className={styles.serviceBox2}>
                        <h2 className={styles.h2}>
                            {globalContent[props.lang].ourServicesContent.signalsHeading}
                        </h2>
                        <div className={styles.serviceTextImgWrapper}>
                            <img
                                src="/graphic.svg"
                                className={styles.serviceImg}
                            />
                            <p className={styles.serviceText}>
                                {globalContent[props.lang].ourServicesContent.signalsInfo}
                            </p>
                        </div>
                    </div>
                    <a
                        href="https://t.me/joinchat/AAAAAEgPEa1HRUVe6vN8Gw"
                        className={styles.link}
                    >
                        <Bounce left>
                            <div 
                                className={styles.button2}
                                onMouseEnter={() => setHoveredButton2(true)}
                                onMouseLeave={() => setHoveredButton2(false)}
                                style={{color: hoveredButton2? "#AFDF9D" : "white"}}
                            >
                                {globalContent[props.lang].ourServicesContent.button}
                            </div>
                        </Bounce>
                    </a>
                </div>
            </div>
        </div>
    </div>
    )
}