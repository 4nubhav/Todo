import React, {useContext} from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeContext } from "./components/contexts/ThemeContext";
import SimpleAppBar from "./components/AppBar";
import TodoList from "./components/TodoList";

function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <>
            <MuiThemeProvider theme={theme}>
                <SimpleAppBar/>
                <TodoList/>
            </MuiThemeProvider>
        </>
    );
}

export default App;
