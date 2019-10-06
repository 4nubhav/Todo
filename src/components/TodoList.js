import React, { useState } from 'react';
import './css/TodoList.css'
import 'typeface-roboto';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ClearIcon from '@material-ui/icons/Clear';
import AddTodo from "./AddTodo";
import Box from "@material-ui/core/Box";

function TodoListItem(props) {
    return (
        <li>
            <div style={{ width: '100%' }}>
                <Box display="flex">
                    <Box flexGrow={1}>
                        <Typography variant="body1" style={{ paddingTop: 12 }}>
                            {props.task}
                        </Typography>
                    </Box>
                    <Box>
                        <IconButton onClick={props.handleDelete} value={props.task}>
                            <ClearIcon/>
                        </IconButton>
                    </Box>
                </Box>
            </div>
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
    const RenderTaskList = () => {
        if (taskList.length === 0)
            return <Typography variant="h6" align="center">Yay! Nothing to do for now!</Typography>;
        else
            return <ul>{taskList}</ul>;
    };

    return(
        <div style={{ paddingBottom: 80 }}>
            <Grid container>
                <Grid item xs={12}>
                    <Grid container justify="center">
                        <Paper id="list-paper">
                            <RenderTaskList/>
                        </Paper>
                        <AddTodo addToTasks={addToTasks}/>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
}

export default TodoList;
