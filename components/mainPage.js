import styles from "../styles/mainPage.module.css"
import Layout from "../components/layout"
import { useState } from "react"
import {globalContent} from "./content"

export function MainPage(props){

    const [hoveredLogo, setHoveredLogo] = useState(false)
    const [showLogo, setShowLogo] = useState(true)
    const [scrolledBy, setScrolledBy] = useState(false)
    const [clickedMobile, setClickedMobile] = useState(false)
    const [content, setContent] = useState(0)

    const scrollPosition = () => {
        if(window.scrollY > 400){
            setScrolledBy(true)
        }
        if(window.scrollY < 400){
            setScrolledBy(false)
        }
        
        // console.log(props.lang)
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", scrollPosition);
    }

    return(
        // <Layout>
            <div className={styles.mainPageWrapper}>
                <div name="mainPage" className={styles.mainPageContainer}>
                    <div 
                        className={styles.mainLogoWrapper}
                        onMouseEnter = { () => {
                            setHoveredLogo(true)
                            // setTimeout( () => hoveredLogo ? setShowLogo(false) : undefined, 2000)
                        }}
                        onMouseLeave = { () => {
                            setHoveredLogo(false)
                            setContent(0)
                            // setShowLogo(true)
                        }}
                    >
                        <img 
                            className={scrolledBy ? styles.mainLogo : hoveredLogo ? styles.mainLogoHover : styles.mainLogo} 
                            src="/SOUPPlogoSquare2.svg"
                            // style={{display : scrolledBy ? "none" : "block"}}
                        />

                        <div
                            className={styles.scrollLogo}
                            style={{display : hoveredLogo ? "none" : "block"}}
                        >
                            <img
                                src="clickIcon.svg"
                                className={styles.scrollImg}
                            />
                        </div>

                        <div 
                            className={styles.smallerLogosWrapper}
                            style={{
                                display : hoveredLogo ? "flex" : "none"
                            }}
                        >

                            <div className={styles.smallerLogoRow}>
                                <div 
                                    className={styles.smallLogoBox}
                                    onMouseEnter = { () => setContent(1)}
                                >
                                    <img 
                                        src="/souppIcons/prediction.png" className={styles.smallLogo}
                                    ></img>
                                    <img 
                                        src="/souppIcons/futures.png" className={styles.smallLogo}
                                    ></img>
                                    <img 
                                        src="/souppIcons/signals.png" className={styles.smallLogo}
                                        style={{
                                            marginLeft: "40px",
                                            marginTop: "-40px"
                                        }}
                                    ></img>

                                    <div 
                                        className={styles.appearingLine}
                                        style={{
                                            display : content == 1? "block" : "none"
                                        }}
                                    ></div>
                                </div>

                                <div 
                                    className={styles.smallLogoBox}
                                    onMouseEnter = { () => setContent(2)}
                                >
                                    <img 
                                        src="/souppIcons/papers.png" className={styles.smallLogo}
                                    ></img>
                                    <img 
                                        src="/souppIcons/commodities.png" className={styles.smallLogo}
                                    ></img>
                                    <img 
                                        src="/souppIcons/fundamental.png" className={styles.smallLogo}
                                        style={{
                                            marginLeft: "40px",
                                            marginTop: "-40px"
                                        }}
                                    ></img>

                                    <div 
                                        className={styles.appearingLine}
                                        style={{
                                            display : content == 2? "block" : "none"
                                        }}
                                    ></div>
                                </div>
                            </div>
                            <div className={styles.smallerLogoRow}>
                            <div 
                                    className={styles.smallLogoBox}
                                    onMouseEnter = { () => setContent(3)}
                                >
                                    <img 
                                        src="/souppIcons/market.png" className={styles.smallLogo}
                                    ></img>
                                    <img 
                                        src="/souppIcons/digest.png" className={styles.smallLogo}
                                    ></img>
                                    <img 
                                        src="/souppIcons/news.png" className={styles.smallLogo}
                                        style={{
                                            marginLeft: "40px",
                                            marginTop: "-40px"
                                        }}
                                    ></img>

                                    <div 
                                        className={styles.appearingLine}
                                        style={{
                                            display : content == 3? "block" : "none"
                                        }}
                                    ></div>
                                </div>

                                <div 
                                    className={styles.smallLogoBox}
                                    onMouseEnter = { () => setContent(4)}
                                >
                                    <img 
                                        src="/souppIcons/library.png" className={styles.smallLogo}
                                    ></img>
                                    <img 
                                        src="/souppIcons/videos.png" className={styles.smallLogo}
                                    ></img>
                                    <img 
                                        src="/souppIcons/tools.png" className={styles.smallLogo}
                                        style={{
                                            marginLeft: "40px",
                                            marginTop: "-40px"
                                        }}
                                    ></img>

                                    <div 
                                        className={styles.appearingLine}
                                        style={{
                                            display : content == 4? "block" : "none"
                                        }}
                                    ></div>
                                </div>
                            </div>

                        </div>

                    </div>
                    <div className={styles.textDivWrapper}>
                        <h1 className={styles.h1}>
                            {globalContent[props.lang].mainPageContent[content].heading}
                            {/* {mainPageContent[content].heading} */}
                        </h1>
                        <div 
                            className={styles.mobile}
                        >
                            <img 
                                className={clickedMobile ? styles.mainLogoMobileClicked : styles.mainLogoMobile} 
                                src="/SOUPPlogoSquare2.svg"
                                onClick={ () => {
                                    setClickedMobile(!clickedMobile)
                                    setContent(0)
                                }}
                            ></img>
                            <div
                                className={styles.scrollLogoMobile}
                                style={{display : clickedMobile ? "none" : "block"}}
                                onClick={ () => {
                                    setClickedMobile(!clickedMobile)
                                    setContent(0)
                                }}
                            >
                                <img
                                    src="clickIcon.svg"
                                    className={styles.scrollImgMobile}
                                />
                            </div>

                            <div 
                                className={styles.smallerLogosWrapperMobile}
                                style={{
                                    display : clickedMobile ? "flex" : "none"
                                }}
                            >

                                <div className={styles.smallerLogoRow}>
                                    <div 
                                        className={styles.smallLogoBox}
                                        onMouseEnter = { () => setContent(1)}
                                    >
                                        <img 
                                            src="/souppIcons/prediction.png" className={styles.smallLogo}
                                        ></img>
                                        <img 
                                            src="/souppIcons/futures.png" className={styles.smallLogo}
                                        ></img>
                                        <img 
                                            src="/souppIcons/signals.png" className={styles.smallLogo}
                                            style={{
                                                marginLeft: "40px",
                                                marginTop: "-40px"
                                            }}
                                        ></img>

                                        <div 
                                            className={styles.appearingLine}
                                            style={{
                                                display : content == 1? "block" : "none"
                                            }}
                                        ></div>
                                    </div>

                                    <div 
                                        className={styles.smallLogoBox}
                                        onMouseEnter = { () => setContent(2)}
                                    >
                                        <img 
                                            src="/souppIcons/papers.png" className={styles.smallLogo}
                                        ></img>
                                        <img 
                                            src="/souppIcons/commodities.png" className={styles.smallLogo}
                                        ></img>
                                        <img 
                                            src="/souppIcons/fundamental.png" className={styles.smallLogo}
                                            style={{
                                                marginLeft: "40px",
                                                marginTop: "-40px"
                                            }}
                                        ></img>

                                        <div 
                                            className={styles.appearingLine}
                                            style={{
                                                display : content == 2? "block" : "none"
                                            }}
                                        ></div>
                                    </div>
                                </div>
                                <div className={styles.smallerLogoRow}>
                                <div 
                                        className={styles.smallLogoBox}
                                        onMouseEnter = { () => setContent(3)}
                                    >
                                        <img 
                                            src="/souppIcons/market.png" className={styles.smallLogo}
                                        ></img>
                                        <img 
                                            src="/souppIcons/digest.png" className={styles.smallLogo}
                                        ></img>
                                        <img 
                                            src="/souppIcons/news.png" className={styles.smallLogo}
                                            style={{
                                                marginLeft: "40px",
                                                marginTop: "-40px"
                                            }}
                                        ></img>

                                        <div 
                                            className={styles.appearingLine}
                                            style={{
                                                display : content == 3? "block" : "none"
                                            }}
                                        ></div>
                                    </div>

                                    <div 
                                        className={styles.smallLogoBox}
                                        onMouseEnter = { () => setContent(4)}
                                    >
                                        <img 
                                            src="/souppIcons/library.png" className={styles.smallLogo}
                                        ></img>
                                        <img 
                                            src="/souppIcons/videos.png" className={styles.smallLogo}
                                        ></img>
                                        <img 
                                            src="/souppIcons/tools.png" className={styles.smallLogo}
                                            style={{
                                                marginLeft: "40px",
                                                marginTop: "-40px"
                                            }}
                                        ></img>

                                        <div 
                                            className={styles.appearingLine}
                                            style={{
                                                display : content == 4? "block" : "none"
                                            }}
                                        ></div>
                                    </div>
                                </div>

                            </div>
                        </div>
                        <h2 className={clickedMobile? styles.h2Clicked : styles.h2}>
                            {/* {globalContent[props.lang].mainPageContent[content].subheading} */}
                            <div>
                                {
                                content == 0 ? globalContent[props.lang].mainPageContent[content].subheading
                                :
                                globalContent[props.lang].mainPageContent[content].chat1
                                }
                            </div>
                            <div>
                                {globalContent[props.lang].mainPageContent[content].chat2}
                            </div>
                            <div>
                                {globalContent[props.lang].mainPageContent[content].chat3}
                            </div>
                        </h2>
                        <div className={styles.smallIconsContainer}>
                            <div 
                                className={styles.smallIconsWrapper}
                                style={{
                                    display : clickedMobile ? "none" : hoveredLogo ? "none" : "flex"
                                }}
                            >
                                <img src="/souppIcons/commodities.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/digest.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/discuss.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/fundamental.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/futures.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/invest.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/library.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/liveTrade.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/market.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/news.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/papers.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/prediction.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/signals.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/videos.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/commodities.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/digest.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/discuss.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/fundamental.png" className={styles.smallIcon}></img>
                                <img src="/souppIcons/futures.png" className={styles.smallIcon}></img>
                                {/* <img src="/invest.svg" className={styles.smallIcon}></img> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        // </Layout>
    )
}