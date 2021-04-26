import '../styles/global.css'
import {useState} from "react"
import {WidthContext} from "../components/context"
import {LanguageContext} from "../components/context";

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {

  const [language, setLanguage] = useState(0);
  const value = { language, setLanguage };

  const [width, setWidth] = useState(0)
  const valueWidth = {width, setWidth}

  return (
    <LanguageContext.Provider value={value}>
      <WidthContext.Provider value ={valueWidth}>
        <Component {...pageProps} />
      </WidthContext.Provider>
    </LanguageContext.Provider>
  )
}