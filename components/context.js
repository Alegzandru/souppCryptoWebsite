import React from "react";

const LanguageContext = React.createContext({
  language: 0,
  setLanguage: () => {}
});

export default LanguageContext;



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