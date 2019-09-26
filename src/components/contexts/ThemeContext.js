import React, { createContext, useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { cyan } from "@material-ui/core/colors";

export const ThemeContext = createContext();

const themeColors = {
    primary: cyan
};

const themeType = () => {
    const theme = localStorage.getItem('theme');
    return theme ? theme : 'light';
};

const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState(createMuiTheme({
        palette: {
            ...themeColors,
            type: themeType()
        }
    }));

    const toggleTheme = () => {
        if (theme.palette.type === 'light') {
            setTheme(createMuiTheme({
                palette: {
                    ...themeColors,
                    type: 'dark'
                }
            }));
            localStorage.setItem('theme', 'dark')
        } else {
            setTheme(createMuiTheme({
                palette: {
                    ...themeColors,
                    type: 'light'
                }
            }));
            localStorage.setItem('theme', 'light')
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
