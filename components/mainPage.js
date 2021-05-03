import styles from "../styles/mainPage.module.css"
import Layout from "../components/layout"
import { useContext, useEffect, useState } from "react"
import {globalContent} from "./content"
import Fade from 'react-reveal/Fade';
import { PopupContext } from "./context";


export function MainPage(props){

    const [hoveredLogo, setHoveredLogo] = useState(false)
    const [hoveredLogo2, setHoveredLogo2] = useState(false)
    const [showLogo, setShowLogo] = useState(true)
    const [scrolledBy, setScrolledBy] = useState(false)
    const [clickedMobile, setClickedMobile] = useState(false)
    const [content, setContent] = useState(0)
    const {popupOpen, setPopupOpen} = useContext(PopupContext)

    const [active1, setActive1] = useState(0)
    const [active2, setActive2] = useState(0)
    const [active3, setActive3] = useState(0)
    const [active4, setActive4] = useState(0)


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

    function repeatOpening1(){
        setTimeout(()=> setActive1(1), 20000)
        setTimeout(()=> setActive1(0), 37000)
        setTimeout(()=> repeatOpening1(), 48000)
    }

    function repeatOpening2(){
        setTimeout(()=> setActive2(1), 30000)
        setTimeout(()=> setActive2(0), 44000)
        setTimeout(()=> repeatOpening2(), 48000)
    }

    function repeatOpening3(){
        setTimeout(()=> setActive3(1), 6000)
        setTimeout(()=> setActive3(0), 24000)
        setTimeout(()=> repeatOpening3(), 48000)
    }

    function repeatOpening4(){
        setTimeout(()=> setActive4(1), 2000)
        setTimeout(()=> setActive4(0), 14000)
        setTimeout(()=> repeatOpening4(), 48000)
    }

    useEffect(()=>{
        
        repeatOpening1()

        repeatOpening2()

        repeatOpening3()

        repeatOpening4()
    },[])

    return(
        // <Layout>
        <div>
            {/* <div 
                className={styles.popupWrapper}
                style={{
                    display : popupOpen ? "block" : "none",
                    filter : "brightness(100%)"
                }}
            ></div> */}
            <div className={styles.mainPageWrapper}>
                <div 
                    name="mainPage" 
                    className={styles.mainPageContainer}
                    style={{
                        display : hoveredLogo2 ? "block" : "flex",
                        paddingTop : hoveredLogo2 ? "60px" : "120px"
                    }}
                >
                    <div 
                        className={styles.mainLogoWrapper}
                        onClick = { () => {
                            setHoveredLogo(true)
                            setTimeout(() => setHoveredLogo2(true), 1200)
                        }}
                        // onMouseLeave = { () => {
                        //     setHoveredLogo(false)
                        //     setContent(0)
                        // }}
                        style={{
                            display : hoveredLogo2? "none" : ""
                        }}
                    >
                        <img 
                            className={scrolledBy ? styles.mainLogo : hoveredLogo ? styles.mainLogoHover : styles.mainLogo} 
                            src="/SOUPPlogoSquare2.svg"
                            // style={{display : scrolledBy ? "none" : "block"}}
                        />

                        <img
                            src="/clockFinal.svg"
                            className={styles.clockImg}
                            style={{
                                display : hoveredLogo? "none" : ""
                            }}
                        />

                        <div className={`${active1 == 1 ? styles.locationWrapperActive : styles.locationWrapper} ${styles.location1}`}>
                            <img 
                                className={styles.locationImg}
                                src="/europe1.svg"
                            />

                            {globalContent[props.lang].mainPageContent[0].london}

                            <div>
                                (<span className={active1 ? styles.open : styles.closed}>
                                    {active1 ? 
                                        globalContent[props.lang].mainPageContent[0].open
                                        : 
                                        globalContent[props.lang].mainPageContent[0].closed
                                    }
                                </span>
                                )
                            </div>
                        </div>

                        <div className={`${active2 == 1 ? styles.locationWrapperActive : styles.locationWrapper} ${styles.location2}`}>
                            <img 
                                className={styles.locationImg}
                                src="/america1.svg"
                            />

                            {globalContent[props.lang].mainPageContent[0].newYork}

                            <div>
                                (<span className={active2 ? styles.open : styles.closed}>
                                    {active2 ? 
                                        globalContent[props.lang].mainPageContent[0].open
                                        : 
                                        globalContent[props.lang].mainPageContent[0].open
                                    }
                                </span>
                                )
                            </div>
                        </div>

                        <div className={`${active3 == 1 ? styles.locationWrapperActive : styles.locationWrapper} ${styles.location3}`}>
                            <img 
                                className={styles.locationImg}
                                src="/asia1.svg"
                            />

                            {globalContent[props.lang].mainPageContent[0].tokyo}

                            <div>
                                (<span className={active3 ? styles.open : styles.closed}>
                                    {active3 ? 
                                        globalContent[props.lang].mainPageContent[0].open
                                        : 
                                        globalContent[props.lang].mainPageContent[0].open
                                    }
                                </span>
                                )
                            </div>
                        </div>

                        <div className={`${active4 == 1 ? styles.locationWrapperActive : styles.locationWrapper} ${styles.location4}`}>
                            <img 
                                className={styles.locationImg}
                                src="/australia1.svg"
                            />

                            {globalContent[props.lang].mainPageContent[0].sydney}

                            <div>
                                (<span className={active4 ? styles.open : styles.closed}>
                                    {active4 ? 
                                        globalContent[props.lang].mainPageContent[0].open
                                        : 
                                        globalContent[props.lang].mainPageContent[0].open
                                    }
                                </span>
                                )
                            </div>
                        </div>

                        <div
                            className={styles.scrollLogo}
                            style={{display : hoveredLogo ? "none" : "block"}}
                        >
                            <img
                                src="clickIcon.svg"
                                className={styles.scrollImg}
                            />
                        </div>

                    </div>
                    <div 
                        className={styles.textDivWrapper}
                        style={{
                            display : hoveredLogo2? "none" : "flex"
                        }}
                    >
                        <h1 className={styles.h1}>
                            {globalContent[props.lang].mainPageContent[content].heading} 
                            <a 
                                className={styles.souppLink}
                                href="https://telegra.ph/SOUPP-crypto-Capital-04-27"
                                target="blank"
                                style={{
                                    textDecoration: "underline",
                                    color: "#E5E5E5"
                                }}
                            >
                                SOUPP
                            </a>
                            ?
                            {/* {mainPageContent[content].heading} */}
                        </h1>
                        <div 
                            className={styles.mobile}
                        >
                            <img 
                                className={clickedMobile ? styles.mainLogoMobileClicked : styles.mainLogoMobile} 
                                src="/SOUPPlogoSquare2.svg"
                                onClick={ () => {
                                    setClickedMobile(true)
                                    setContent(0)
                                    setTimeout(() => setHoveredLogo2(true), 1500)
                                }}
                            ></img>
                            <div
                                className={styles.scrollLogoMobile}
                                style={{display : clickedMobile ? "none" : "block"}}
                                onClick={ () => {
                                    setClickedMobile(true)
                                    setContent(0)
                                    setTimeout(() => setHoveredLogo2(true), 1500)
                                }}
                            >
                                <img
                                    src="clickIcon.svg"
                                    className={styles.scrollImgMobile}
                                />
                            </div>

                        </div>
                        <h2 
                            // className={clickedMobile? styles.h2Clicked : styles.h2}
                            className={styles.h2}
                            style={{
                                display : clickedMobile ? "none" : "block"
                            }}
                        >
                            {/* {globalContent[props.lang].mainPageContent[content].subheading} */}
                            <div>
                                {
                                content == 0 ? globalContent[props.lang].mainPageContent[content].subheading
                                :
                                globalContent[props.lang].mainPageContent[content].chat1
                                }
                            </div>
                            {/* <div
                                style={{
                                    textDecoration : "underline",
                                    marginTop : "10px",
                                    cursor : "pointer"
                                }}
                                onClick={()=> setPopupOpen(true)}
                            >
                                Подробнее...
                            </div> */}
                            <div>
                                {globalContent[props.lang].mainPageContent[content].chat2}
                            </div>
                            <div>
                                {globalContent[props.lang].mainPageContent[content].chat3}
                            </div>
                        </h2>
                        <div 
                            className={styles.smallIconsContainer}
                            style={{
                                display: "none"
                            }}
                        >
                        </div>
                    </div>

                    <h1 
                        className={styles.hiddenH1}
                        style={{
                            display : hoveredLogo2? "block" : "none"
                        }}
                    >
                        {globalContent[props.lang].newMainPageContent.heading}
                    </h1>
                    <div 
                        className={styles.advantagesContainer}
                        style={{
                            display : hoveredLogo2? "flex" : "none"
                        }}
                    >
                        <div className={styles.advantagesColumn}>
                            <Fade bottom>
                                <div className={styles.advantage}>
                                    <img className={styles.advantageImg} src="/mainPageIcon1.svg"></img>
                                    <div className={styles.advantageTextContainer}>
                                        <h2 className={styles.advantageHeader}>
                                            {globalContent[props.lang].newMainPageContent.advantages[0].heading}
                                        </h2>
                                        <div className={styles.advantageDescription}>
                                            {globalContent[props.lang].newMainPageContent.advantages[0].subheading}
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className={styles.advantage}>
                                    <img className={styles.advantageImg} src="/mainPageIcon3.svg"></img>
                                    <div className={styles.advantageTextContainer}>
                                        <h2 className={styles.advantageHeader}>
                                            {globalContent[props.lang].newMainPageContent.advantages[1].heading}
                                        </h2>
                                        <div className={styles.advantageDescription}>
                                            {globalContent[props.lang].newMainPageContent.advantages[1].subheading}
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className={styles.advantage}>
                                    <img className={styles.advantageImg} src="/mainPageIcon5.svg"></img>
                                    <div className={styles.advantageTextContainer}>
                                        <h2 className={styles.advantageHeader}>
                                            {globalContent[props.lang].newMainPageContent.advantages[2].heading}
                                        </h2>
                                        <div className={styles.advantageDescription}>
                                            {globalContent[props.lang].newMainPageContent.advantages[2].subheading}
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>

                        <div className={styles.advantagesColumn}>
                            <Fade bottom>
                                <div className={styles.advantage}>
                                    <img className={styles.advantageImg} src="/mainPageIcon2.svg"></img>
                                    <div className={styles.advantageTextContainer}>
                                        <h2 className={styles.advantageHeader}>
                                            {globalContent[props.lang].newMainPageContent.advantages[3].heading}
                                        </h2>
                                        <div className={styles.advantageDescription}>
                                            {globalContent[props.lang].newMainPageContent.advantages[3].subheading}
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom>
                                <div className={styles.advantage}>
                                    <img className={styles.advantageImg} src="/mainPageIcon4.svg"></img>
                                    <div className={styles.advantageTextContainer}>
                                        <h2 className={styles.advantageHeader}>
                                            {globalContent[props.lang].newMainPageContent.advantages[4].heading}
                                        </h2>
                                        <div className={styles.advantageDescription}>
                                            {globalContent[props.lang].newMainPageContent.advantages[4].subheading}
                                        </div>
                                    </div>
                                </div>
                            </Fade>

                            <Fade bottom> 
                                <div className={styles.advantage}>
                                    <img className={styles.advantageImg} src="/mainPageIcon6.svg"></img>
                                    <div className={styles.advantageTextContainer}>
                                        <h2 className={styles.advantageHeader}>
                                            {globalContent[props.lang].newMainPageContent.advantages[5].heading}
                                        </h2>
                                        <div className={styles.advantageDescription}>
                                            {globalContent[props.lang].newMainPageContent.advantages[5].subheading}
                                        </div>
                                    </div>
                                </div>
                            </Fade>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </Layout>
    )
}