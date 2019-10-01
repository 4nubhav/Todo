import React, {useContext} from "react";
import { MuiThemeProvider } from '@material-ui/core/styles';
import { ThemeContext } from "./components/contexts/ThemeContext";
import SimpleAppBar from "./components/AppBar";
import TodoList from "./components/TodoList";

function App() {
    const { theme } = useContext(ThemeContext);

    return (
        <div style={{ paddingTop: 56 }}>
            <MuiThemeProvider theme={theme}>
                <SimpleAppBar style={{ position: 'fixed', top: 0 }} />
                <TodoList/>
            </MuiThemeProvider>
        </div>
    );
}

export default App;
