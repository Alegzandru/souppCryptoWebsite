import Layout from "../components/layout"
import {useContext} from "react"
import {Disclaimer} from "../components/disclaimer"
import {LanguageContext} from "../components/context"
import {globalContent} from "../components/content"


function DisclaimerPage () {

    const {language, setLanguage} = useContext(LanguageContext)

    return (
        <Layout
            title={globalContent[language].layout.titleDisclaimer}
            description={globalContent[language].layout.meta}
        >
            <Disclaimer></Disclaimer>
        </Layout>
    )
}

export default DisclaimerPage