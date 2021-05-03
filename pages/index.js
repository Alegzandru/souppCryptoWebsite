import {MainPage} from "../components/mainPage"
import {AboutUsStats} from "../components/aboutUsStats"
import {AboutUsTrading} from "../components/aboutUsTrading"
import {OurServices} from "../components/ourServices"
import {Testimonials} from "../components/testimonials"
import {Contacts} from "../components/contacts"
import {Footer} from "../components/footer"
import Layout from "../components/layout"
import {useContext, useEffect, useState} from "react"
import {LanguageContext, PopupContext} from "../components/context";
import styles from "../styles/popup.module.css"
import {globalContent} from "../components/content"
import Fade from "react-reveal"
import Cookies from 'universal-cookie';



function HomePage() {

    const {language, setLanguage} = useContext(LanguageContext)
    const {popupOpen, setPopupOpen} = useContext(PopupContext)
    const [contor, setContor] = useState(1)
    const cookies = new Cookies();

    useEffect(() => {
        setPopupOpen(cookies.get("Closed"))
    })

    return(
            <Layout>
                <Fade bottom>
                    <div 
                        className={styles.popupWrapper}
                        style={{
                            display : popupOpen ? "none" : "block",
                        }}
                        onClick={() =>{
                            setContor(contor+1)
                        }}
                    >
                        <div className={styles.heading}>
                            {globalContent[language].disclaimer.heading}
                        </div>
                        <div className={styles.subheading}>
                            {globalContent[language].disclaimer.text}
                        </div>
                        <div
                            onClick={
                            ()=>{
                                cookies.set('Closed', 1, { path: '/' });
                            }}
                            className={styles.button}
                        >
                            {globalContent[language].disclaimer.button}
                        </div>
                    </div>
                </Fade>
                <div
                    style={{ 
                        filter : popupOpen ? "" : "brightness(30%)"
                    }}
                >
                    <MainPage
                        lang={language}
                    ></MainPage>
                    <AboutUsStats
                        lang={language}
                    ></AboutUsStats>
                    <AboutUsTrading
                        lang={language}
                    ></AboutUsTrading>
                    <OurServices
                        lang={language}
                    ></OurServices>
                    <Testimonials
                        lang={language}
                    ></Testimonials>
                    <Contacts
                        lang={language}
                    ></Contacts>
                </div>
            </Layout>
    )
}

export default HomePage

  