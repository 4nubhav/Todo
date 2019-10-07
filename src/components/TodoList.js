import React, { useState } from 'react';
import './css/TodoList.css'
import 'typeface-roboto';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import TodoListItem from "../TodoListItem";
import AddTodo from "./AddTodo";

function TodoList() {
    const [tasks, setTasks] = useState(() => {
        const localTasks = localStorage.getItem('tasks');
        return localTasks ? JSON.parse(localTasks) : []
    });
    // const [tasks, setTasks] = useState(['Get up', 'Have coffee', 'Start coding']);

    const addToTasks = (newTask) => {
        setTasks([...tasks, newTask]);
        localStorage.setItem('tasks', JSON.stringify([...tasks, newTask]));
    };

    const deleteTask = (e) => {
        let updatedTasks = tasks.filter(n => e.currentTarget.value !== n);
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
