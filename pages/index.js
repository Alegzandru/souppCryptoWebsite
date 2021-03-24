import {MainPage} from "../components/mainPage"
import {AboutUsStats} from "../components/aboutUsStats"
import {AboutUsTrading} from "../components/aboutUsTrading"
import {OurServices} from "../components/ourServices"
import {Testimonials} from "../components/testimonials"
import {Contacts} from "../components/contacts"
import Layout from "../components/layout"
import {useState} from "react"

import LanguageContext from "../components/context";


function HomePage() {

    const [language, setLanguage] = useState(0);
    const value = { language, setLanguage };

    return(
        <LanguageContext.Provider value={value}>
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
        </LanguageContext.Provider>
    )
}
  
export default HomePage
  