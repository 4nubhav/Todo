import React, { createContext, useState } from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import cyan from '@material-ui/core/colors/cyan';

export const ThemeContext = createContext();

const themeColors = {
    primary: cyan,
};

const lightTheme = createMuiTheme({
    palette: {
        ...themeColors,
        type: 'light',
        background: {
            paper: '#f5f5f5',
            default: "#fff",
        }
    }
});

const darkTheme = createMuiTheme({
    palette: {
        ...themeColors,
        type: 'dark',
        background: {
            paper: '#333',
            default: "#212121",
        }
    }
});

const themeType = () => {
    const theme = localStorage.getItem('theme');
    return theme ? theme : 'dark';
};

const ThemeContextProvider = (props) => {

    const [theme, setTheme] = useState(themeType() === 'light' ? lightTheme : darkTheme);

    const toggleTheme = () => {
        if (theme.palette.type === 'light') {
            setTheme(darkTheme);
            localStorage.setItem('theme', 'dark');
        } else {
            setTheme(lightTheme);
            localStorage.setItem('theme', 'light');
        }
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
