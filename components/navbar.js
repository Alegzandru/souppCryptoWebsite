import styles from "../styles/navbar.module.css"
import React, { useState, useEffect, useContext } from 'react';
import Link from 'next/link'
import {LanguageContext, WidthContext} from "./context";
import {globalContent} from "./content"
import { Squash as Hamburger } from 'hamburger-react'


function useWindowSize() {

    const [windowSize, setWindowSize] = useState({
      width: undefined,
      height: undefined,
    });
  
    useEffect(() => {
      if (typeof window !== 'undefined') {
        function handleResize() {
          setWindowSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        }
      
        window.addEventListener("resize", handleResize);
       
        handleResize();
      
        return () => window.removeEventListener("resize", handleResize);
      }
    }, []); // Empty array ensures that effect is only run on mount
    return windowSize;
}

export function Navbar(props){

    const[activeLink, setActiveLink] = useState(0);
    const[navbarOpen, setNavbarOpen] = useState(false);
    const[mobileLinkClicked1, setMobileLinkClicked1] = useState(false);
    const[mobileLinkClicked2, setMobileLinkClicked2] = useState(false);
    const[mobileLinkClicked3, setMobileLinkClicked3] = useState(false);
    const[mobileLinkClicked4, setMobileLinkClicked4] = useState(false);
    const[mobileLinkClicked5, setMobileLinkClicked5] = useState(false);
    const[translateHover, setTranslateHover] = useState(false)
    const[hoveredOnce, setHoveredOnce] = useState(false)

    const {width, setWidth} = useContext(WidthContext)

    const scrollPosition = () => {
        setActiveLink(Math.round(window.scrollY / 900))
        // console.log(window.scrollY)
    }

    if (typeof window !== "undefined") {
        window.addEventListener("scroll", scrollPosition);
    }

    const size = useWindowSize();
    const { language, setLanguage } = useContext(LanguageContext);

    useEffect(
        () => {
            setWidth(size.width)
        }
    )
      

    return(
        <div 
            id={styles.navbarWrapper} 
            style={{height : navbarOpen ? "auto" : "48px"}}
        >
            <div 
                id={styles.navbarContainer}
                style={{marginBottom : navbarOpen ? "10px" : "0px"}}
            >
                <Link href="/#mainPage">
                    <a className={styles.desktopLink}>
                        <div id={styles.logoNavbarWrapper}>
                            <img src="/SOUPPlogo.svg" id={styles.logoImgNavbar}></img>
                            <div id={styles.logoTextNavbar}>SOUPP</div>
                        </div>
                    </a>
                </Link>
                <div id={styles.navItemsWrapper}>
                    <Link href="/#mainPage">
                        <a className={`${styles.desktopLink } ${activeLink == 0 ? styles.active : ""}`}>
                            <div className={`${styles.navItem} ${activeLink == 0 ? styles.active : ""}`}>
                                {globalContent[language].navbarContent.link1}
                            </div>
                        </a>
                    </Link>
                    <Link href="/#stats">
                        <a className={`${styles.desktopLink } ${activeLink == 1 || activeLink == 2? styles.active : ""}`}>
                            <div className={`${styles.navItem} ${activeLink == 1 || activeLink == 2? styles.active : ""}`}>
                                {globalContent[language].navbarContent.link2}
                            </div>
                        </a>
                    </Link>
                    <Link href="/#services">
                        <a className={`${styles.desktopLink } ${activeLink == 3 ? styles.active : ""}`}>
                            <div className={`${styles.navItem} ${activeLink == 3 ? styles.active : ""}`}>
                                {globalContent[language].navbarContent.link3}
                            </div>
                        </a>
                    </Link>
                    <Link href="/#testimonials">
                        <a className={`${styles.desktopLink } ${activeLink == 4 ? styles.active : ""}`}>
                            <div className={`${styles.navItem} ${activeLink == 4 ? styles.active : ""}`}>
                                {globalContent[language].navbarContent.link4}
                            </div>
                        </a>
                    </Link>
                    <Link href="/#contacts">
                        <a className={`${styles.desktopLink } ${activeLink == 5 ? styles.active : ""}`}>
                            <div className={`${styles.navItem} ${activeLink == 5 ? styles.active : ""}`}>
                                {globalContent[language].navbarContent.link5}
                            </div>
                        </a>
                    </Link>
                </div>
                <div id={styles.navbarButtonWrapper}>
                    <a
                        id={styles.navbarButton}
                        href="https://t.me/joinchat/AAAAAEgPEa1HRUVe6vN8Gw"
                    >
                        <img src="/telegramIcon2.svg" id={styles.telegramIcon}></img>
                            {globalContent[language].navbarContent.button}
                    </a>
                </div>

                {/* <img 
                    src={navbarOpen? "closeIcon.svg" : "hamburgerIcon.svg"}
                    className={styles.mobileIcon}
                    onClick = {() => setNavbarOpen(!navbarOpen)}
                ></img> */}

                <div className={styles.mobileIcon}>
                    <Hamburger 
                        toggled={navbarOpen} toggle={setNavbarOpen} size={36} color="#2D3E50" duration={0.5}
                    />
                </div>

            </div>
            <div 
                className={styles.mobileMenu}   
                style={{display : navbarOpen ? "block" : "none"}}
            >
                <Link href="/#mainPage">
                    <a className={styles.mobileLink}>
                        <div 
                            className={styles.mobileLinkWrapper}
                            style={{borderLeftWidth: mobileLinkClicked1 ? "16px" : "0px", width: mobileLinkClicked1 ? "calc(100% - 16px)" : "100%"}}
                            onClick={() => {
                                setMobileLinkClicked1(true)
                                setTimeout(() => setMobileLinkClicked1(false), 300)
                                setNavbarOpen(false)
                            }}
                        >
                            Главная
                        </div>
                    </a>
                </Link>
                <Link href="/#stats">
                    <a className={styles.mobileLink}>
                        <div 
                            className={styles.mobileLinkWrapper}
                            style={{borderLeftWidth: mobileLinkClicked2 ? "16px" : "0px", width: mobileLinkClicked2 ? "calc(100% - 16px)" : "100%"}}
                            onClick={() => {
                                setMobileLinkClicked2(true)
                                setTimeout(() => setMobileLinkClicked2(false), 300)
                                setNavbarOpen(false)
                            }}
                        >
                            Про нас
                        </div>
                    </a>
                </Link>
                <Link href="/#services">
                    <a className={styles.mobileLink}>
                        <div 
                            className={styles.mobileLinkWrapper}
                            style={{borderLeftWidth: mobileLinkClicked3 ? "16px" : "0px", width: mobileLinkClicked3 ? "calc(100% - 16px)" : "100%"}}
                            onClick={() => {
                                setMobileLinkClicked3(true)
                                setTimeout(() => setMobileLinkClicked3(false), 300)
                                setNavbarOpen(false)
                            }}
                        >
                            Услуги
                        </div>
                    </a>
                </Link>
                <Link href="/#testimonials">
                    <a className={styles.mobileLink}>
                        <div 
                            className={styles.mobileLinkWrapper}
                            style={{borderLeftWidth: mobileLinkClicked4 ? "16px" : "0px", width: mobileLinkClicked4 ? "calc(100% - 16px)" : "100%"}}
                            onClick={() => {
                                setMobileLinkClicked4(true)
                                setTimeout(() => setMobileLinkClicked4(false), 300)
                                setNavbarOpen(false)
                            }}
                        >
                            Рекомендации
                        </div>
                    </a>
                </Link>
                <Link href="/#contacts">
                    <a className={styles.mobileLink}>
                        <div 
                            className={styles.mobileLinkWrapper}
                            style={{borderLeftWidth: mobileLinkClicked5 ? "16px" : "0px", width: mobileLinkClicked5 ? "calc(100% - 16px)" : "100%"}}
                            onClick={() => {
                                setMobileLinkClicked5(true)
                                setTimeout(() => setMobileLinkClicked5(false), 300)
                                setNavbarOpen(false)
                            }}
                        >
                            Контакты
                        </div>
                    </a>
                </Link>
                <div 
                    className={styles.mobileLinkWrapper}
                    onClick={ () => {
                        setLanguage(0)
                        setNavbarOpen(false)
                    }}
                >
                    <img
                        src="/ruFlag.png"
                        className={styles.flag}
                    ></img>
                    RU
                </div>
                <div 
                    className={styles.mobileLinkWrapper}
                    onClick={ () => {
                        setLanguage(1)
                        setNavbarOpen(false)
                    }}
                >
                    <img
                        src="/enFlag.png"
                        className={styles.flag}
                    ></img>
                    EN
                </div>
            </div>

            <div 
                className={styles.languageButton}
                onMouseEnter={() => {
                    setTranslateHover(true)
                    setHoveredOnce(true)
                }}
                onMouseLeave={() => setTranslateHover(false)}
                style={{
                    width: translateHover ? "120px" : "90px",
                    height: translateHover ? "110px" : "50px",
                    left: translateHover ? "-10px" : hoveredOnce ? "-60px" : "-10px"
                }}
            >
                <div className={styles.imgWrapper}>
                    <img
                        src="/translator.svg"
                    ></img>
                    <img
                        className={styles.arrow}
                        src="/translateArrow.svg"
                    ></img>
                </div>
                <div 
                    className={styles.langWrapper}
                    style={{
                        display : translateHover ? "flex" : "none"
                    }}
                >
                    <div 
                        className={styles.lang}
                        onClick={ () => setLanguage(0)}
                    >
                        RU
                    </div>
                    <div 
                        className={styles.lang}
                        onClick={ () => setLanguage(1)}
                    >
                        EN
                    </div>
                </div>
            </div>
        </div>
    )
}