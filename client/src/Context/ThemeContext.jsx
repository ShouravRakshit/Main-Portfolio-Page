/* eslint-disable react-refresh/only-export-components */
import { useState, createContext, useContext } from "react";
import PropTypes from 'prop-types';

const ThemeContext = createContext();

const ThemeProvider = ({children}) =>{
    const [theme, setTheme] = useState("#212935");
    return(
        <ThemeContext.Provider value={[theme, setTheme]}>
            {children}
        </ThemeContext.Provider>
    )
}

// custom hook

const useTheme = () => useContext(ThemeContext);

export {useTheme, ThemeProvider}

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired
};