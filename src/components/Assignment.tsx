import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { AssignmentProps } from "../types/types";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";

export default function Assignment(props: AssignmentProps) {
    return (
        <Paper
            elevation={2}
            style={{
                display: "inline-block",
                padding: 20,
                width: 300,
                height: 170,
                overflow: "scroll",
                marginLeft: 20,
                marginTop: 20,
                position: "relative",
            }}
            className="card"
        >
            <Typography variant="h6" style={{ marginBottom: 10 }}>
                {props.title}
            </Typography>

            <Typography style={{ marginBottom: 10, fontSize: 15 }}>
                {props.description}
            </Typography>
            <Chip label={`Due: ${props.due}`} />

            <IconButton
                onClick={props.onDeleteClick}
                style={{ position: "absolute", right: 5, bottom: 5 }}
            >
                <CheckIcon />
            </IconButton>
        </Paper>
    );
}
