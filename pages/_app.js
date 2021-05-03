import '../styles/global.css'
import {useState} from "react"
import {WidthContext, LanguageContext, PopupContext} from "../components/context"
import { CookiesProvider } from "react-cookie";


// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {

  const [language, setLanguage] = useState(0);
  const value = { language, setLanguage };

  const [width, setWidth] = useState(0)
  const valueWidth = {width, setWidth}

  const [popupOpen, setPopupOpen] = useState(0)
  const valuePopup = {popupOpen, setPopupOpen}

  return (
    <CookiesProvider>
      <PopupContext.Provider value={valuePopup}>
        <LanguageContext.Provider value={value}>
          <WidthContext.Provider value ={valueWidth}>
            <Component {...pageProps} />
          </WidthContext.Provider>
        </LanguageContext.Provider>
      </PopupContext.Provider>
    </CookiesProvider>
  )
}