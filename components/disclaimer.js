import styles from "../styles/disclaimer.module.css"
import {globalContent} from "./content"
import {LanguageContext} from "./context"
import {useContext} from "react"


export function Disclaimer (props) {

    const { language, setLanguage} = useContext(LanguageContext)

    return (
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <h1 className={styles.h1}>
                    {globalContent[language].disclaimer.heading}
                </h1>
                    {globalContent[language].disclaimer.text}
            </div>
        </div>
    )
}