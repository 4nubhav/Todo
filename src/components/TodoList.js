import React, { useState } from 'react';
import './css/TodoList.css'
import 'typeface-roboto';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import AddTodo from "./AddTodo";

function TodoListItem(props) {
    return (
        <li style={{ overflow: "auto" }}>
            <Typography variant="body1" display="inline" style={{ float: "left", paddingTop: "12px" }}>
                {props.task}
            </Typography>
            <IconButton onClick={props.handleDelete} value={props.task} style={{ float: "right" }}>
                <ClearIcon/>
            </IconButton>
        </li>
    );
}

function TodoList() {
    const [tasks, setTasks] = useState(() => {
        const localTasks = localStorage.getItem('tasks');
        return localTasks ? JSON.parse(localTasks) : []
    });

    const addToTasks = (newTask) => {
        setTasks([...tasks, newTask]);
        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
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
    if (taskList.length === 0) {
        return (
            <div id="container">
                <Grid container>
                    <Grid item xs={12}>
                        <Grid container justify="center">
                            <Paper id="list-paper">
                                <Typography variant="h6" align="center">
                                    Yay! Nothing to do for now!
                                </Typography>
                            </Paper>
                            <AddTodo addToTasks={addToTasks}/>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        );
    }
    return(
        <div id="container">
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Paper id="list-paper">
                            <ul>
                                {taskList}
                            </ul>
                        </Paper>
                        <AddTodo addToTasks={addToTasks}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default TodoList;
