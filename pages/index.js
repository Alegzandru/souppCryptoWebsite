import {MainPage} from "../components/mainPage"
import {AboutUsStats} from "../components/aboutUsStats2"
import {AboutUsTrading} from "../components/aboutUsTrading"
import {OurServices} from "../components/ourServices"
import {Testimonials} from "../components/testimonials"
import {Contacts} from "../components/contacts"
import {Footer} from "../components/footer"
import Layout from "../components/layout"
import {useContext, useState} from "react"
import {LanguageContext} from "../components/context";


function HomePage() {

    const {language, setLanguage} = useContext(LanguageContext)

    return(
            <Layout>
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
            </Layout>
    )
}
  
export default HomePage
  