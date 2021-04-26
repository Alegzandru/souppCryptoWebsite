import React from "react";

export const LanguageContext = React.createContext({
  language: 0,
  setLanguage: () => {}
});


export const WidthContext = React.createContext({
  width: 0,
  setWidth: () => {}
})


// import React, {createContext, useState} from "react"

// export const LangContext = createContext();

// const LangContextProvider = (props) => {
//     const [lang, setLang] = useState (0)

//     return(
//         <LangContext.Provider value={{lang}}>
//             {props.children}
//         </LangContext.Provider>
//     )
// }

// export default LangContextProvider