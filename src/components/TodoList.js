import React, { useState } from 'react';
import './css/TodoList.css'
import 'typeface-roboto';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import DeleteIcon from '@material-ui/icons/Delete';

function TodoListItem(props) {
    return (
        <li style={{ overflow: "auto" }}>
            <Typography variant="body1" display="inline" style={{ float: "left", paddingTop: "12px" }}>
                {props.task}
            </Typography>
            <IconButton onClick={props.handleDelete} value={props.task} style={{ float: "right" }}>
                <DeleteIcon />
            </IconButton>
        </li>
    );
}

function TodoList() {
    const [newTask, setNewTask] = useState("");
    const [tasks, setTasks] = useState(() => {
        const localTasks = localStorage.getItem('tasks');
        return localTasks ? JSON.parse(localTasks) : []
    });

    const addTask = (e) => {
        e.preventDefault();
        setTasks([...tasks, newTask]);
        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
        setNewTask("");
    };

    const deleteTask = (task) => {
        let updatedTasks = tasks.filter(n => task.currentTarget.value !== n);
        setTasks(updatedTasks);
        localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    };

    const taskList = tasks.map((task, index) => <TodoListItem key={index}
                                                              task={task}
                                                              index={index}
                                                              handleDelete={deleteTask} />);

    return(
        <>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Paper id="form-paper">
                            <ul>
                                <form onSubmit={addTask}>
                                    <TextField
                                        id="new-task-tf"
                                        type="text"
                                        required={true}
                                        value={newTask}
                                        onChange={(e) => setNewTask(e.target.value)}
                                        placeholder="What to do...?"
                                        fullWidth
                                        margin="normal"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        autoComplete='off'
                                    />
                                    <Button id="add-btn" type="submit" variant="contained" color="primary">Add</Button>
                                </form>
                                {taskList}
                            </ul>
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default TodoList;

