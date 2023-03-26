import { createContext, useState} from "react"; //4.3k (gzipped:1.9k)
export const Context = createContext();
const AppContext = ({ children }) => {
    return <Context.Provider>{children}</Context.Provider>
};
export default AppContext;