import React, {useState} from "react";
import './css/AddTodo.css'
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Box from '@material-ui/core/Box';

function AddTodo(props) {
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask !== '') {
            props.addToTasks(newTask);
            setNewTask("");
        }
    };

    return (
        <div id="form-paper">
            <Box display="flex" p={1} bgcolor="background.paper">
                <Box p={1} flexGrow={1}>
                    <TextField
                        type="text"
                        required={true}
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="What to do...?"
                        margin="none"
                        fullWidth
                        autoComplete='off'
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            style: { fontSize: 18 }
                        }}
                        style={{ marginTop: 15 }}
                    />
                </Box>
                <Box p={1}>
                    <Fab size="medium" color="primary">
                        <AddIcon onClick={addTask}/>
                    </Fab>
                </Box>
            </Box>
        </div>
    );
}

export default AddTodo;
