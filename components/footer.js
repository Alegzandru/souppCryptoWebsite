import Link from "next/link"
import styles from "../styles/footer.module.css"
import {globalContent} from "../components/content"
import {LanguageContext} from "./context"
import {useContext} from "react"

export function Footer(props){

    const { language, setLanguage} = useContext(LanguageContext)

    return(
        <div className={styles.wrapper}>
            <div className={styles.container}>
                <div className={styles.upperFooter}>
                    <Link href="/">
                        <a
                            style={{
                                textDecoration: "none",
                                color: "#E5E5E5"
                            }}
                        >
                            <div className={styles.logoContainer}>
                                <img
                                    src="/SOUPPlogoSquare2.svg"
                                    className={styles.logo}
                                >
                                </img>
                                <div>
                                    SOUPP crypto
                                </div>
                            </div>
                        </a>
                    </Link>

                    <Link href="/disclaimer">
                        <a style={{
                            textDecoration : "none",
                            color: "#E5E5E5"
                        }}>
                            <div>
                                {globalContent[language].footer.disclaimer}
                            </div>
                        </a>
                    </Link>
                </div>
                <div className={styles.line}></div>
                <div className={styles.lowerFooter}>
                    {globalContent[language].footer.copyright}
                </div>
            </div>
        </div>
    )
}