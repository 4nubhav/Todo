import React from "react";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import DoneRoundedIcon from '@material-ui/icons/DoneRounded';

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
                            <DoneRoundedIcon color="primary"/>
                        </IconButton>
                    </Box>
                </Box>
            </div>
        </li>
    );
}

export default TodoListItem;
