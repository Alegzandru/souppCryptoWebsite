import '../styles/global.css'
import {useState} from "react"
import {WidthContext} from "../components/context"

// This default export is required in a new `pages/_app.js` file.
export default function App({ Component, pageProps }) {

  const [width, setWidth] = useState(0)
  const valueWidth = {width, setWidth}

  return (
      <WidthContext.Provider value ={valueWidth}>
        <Component {...pageProps} />
      </WidthContext.Provider>
  )
}