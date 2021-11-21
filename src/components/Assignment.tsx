import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import { AssignmentProps } from "../types/types";
import Chip from "@mui/material/Chip";
import IconButton from "@mui/material/IconButton";
import CheckIcon from "@mui/icons-material/Check";
import { getNumberOfDays } from "../utils/utils";
import { useEffect } from "react";

export default function Assignment(props: AssignmentProps) {
    useEffect(() => {
        console.log(
            `${props.title} - ${props.due} - ${getNumberOfDays(
                new Date().toString(),
                props.due
            )}`
        );
    });

    function renderChip(): JSX.Element {
        const days_left: number = getNumberOfDays(
            new Date().toString(),
            props.due
        );
        if (days_left <= 7 && days_left > 1) {
            return (
                <Chip
                    label={`Due Soon! : ${props.due}`}
                    style={{ backgroundColor: "#f00", color: "#fff" }}
                />
            );
        } else if (days_left === 1) {
            return (
                <Chip
                    label={`Due Tomorrow! : ${props.due}`}
                    style={{ backgroundColor: "#f00", color: "#fff" }}
                />
            );
        } else if (days_left === 0) {
            return (
                <Chip
                    label={`Due Today! : ${props.due}`}
                    style={{ backgroundColor: "#f00", color: "#fff" }}
                />
            );
        } else if (days_left <= -1) {
            return (
                <Chip
                    label={`Duedate crossed! : ${props.due}`}
                    style={{ backgroundColor: "#656565", color: "#fff" }}
                />
            );
        } else {
            return <Chip label={`Due : ${props.due}`} />;
        }
    }

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

            {renderChip()}

            <IconButton
                onClick={props.onDeleteClick}
                style={{ position: "absolute", right: 5, bottom: 5 }}
            >
                <CheckIcon />
            </IconButton>
        </Paper>
    );
}
