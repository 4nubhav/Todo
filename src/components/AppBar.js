import React, {useContext} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CssBaseline from "@material-ui/core/CssBaseline/CssBaseline";
import Button from '@material-ui/core/Button';
import { ThemeContext } from "./contexts/ThemeContext";

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
    },
}));

const lightBulbIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M9 21c0 .55.45 1 1 1h4c.55 0 1-.45 1-1v-1H9v1zm3-19C8.14 2 5 5.14 5 9c0 2.38 1.19 4.47 3 5.74V17c0 .55.45 1 1 1h6c.55 0 1-.45 1-1v-2.26c1.81-1.27 3-3.36 3-5.74 0-3.86-3.14-7-7-7zm2.85 11.1l-.85.6V16h-4v-2.3l-.85-.6C7.8 12.16 7 10.63 7 9c0-2.76 2.24-5 5-5s5 2.24 5 5c0 1.63-.8 3.16-2.15 4.1z"/></svg>;
const darkBulbIcon = <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m9,21c0,0.55 0.45,1 1,1l4,0c0.55,0 1,-0.45 1,-1l0,-1l-6,0l0,1zm3,-19c-3.86,0 -7,3.14 -7,7c0,2.38 1.19,4.47 3,5.74l0,2.26c0,0.55 0.45,1 1,1l6,0c0.55,0 1,-0.45 1,-1l0,-2.26c1.81,-1.27 3,-3.36 3,-5.74c0,-3.86 -3.14,-7 -7,-7z"/></svg>;

function SimpleAppBar() {
    const classes = useStyles();
    const { theme, toggleTheme } = useContext(ThemeContext);

    const ThemeIndicator = () => {
        if (theme.palette.type === 'light')
            return lightBulbIcon;
        else
            return darkBulbIcon;
    };

    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        To Do List
                    </Typography>
                    <Button color="inherit" onClick={toggleTheme}>
                        <ThemeIndicator/>
                    </Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default SimpleAppBar;
