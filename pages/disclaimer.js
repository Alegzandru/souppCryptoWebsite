import Layout from "../components/layout"
import {useContext} from "react"
import {Disclaimer} from "../components/disclaimer"
import {LanguageContext} from "../components/context"


function DisclaimerPage () {

    const {language, setLanguage} = useContext(LanguageContext)

    return (
        <Layout>
            <Disclaimer></Disclaimer>
        </Layout>
    )
}

export default DisclaimerPage