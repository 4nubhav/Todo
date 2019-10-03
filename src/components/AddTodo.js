import React, {useState} from "react";
import './css/AddTodo.css'
import TextField from "@material-ui/core/TextField";
import Fab from "@material-ui/core/Fab";
import AddIcon from '@material-ui/icons/Add';
import Paper from "@material-ui/core/Paper";

function AddTodo(props) {
    const [newTask, setNewTask] = useState("");

    const addTask = () => {
        if (newTask !== '') {
            props.addToTasks(newTask);
            setNewTask("");
        }
    };

    return (
        <Paper id="form-paper">
            <TextField
                className="new-task-tf"
                type="text"
                required={true}
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                placeholder="What to do...?"
                margin="normal"
                autoComplete='off'
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <div style={{ float: "right", padding: 10 }}>
                <Fab size="small" color="secondary">
                    <AddIcon onClick={addTask}/>
                </Fab>
            </div>
        </Paper>
    );
}

export default AddTodo;
