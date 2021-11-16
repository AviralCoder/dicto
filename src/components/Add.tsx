import SpeedDial from "@mui/material/SpeedDial";
import SpeedDialIcon from "@mui/material/SpeedDialIcon";
import SpeedDialAction from "@mui/material/SpeedDialAction";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import ImportContactsIcon from "@mui/icons-material/ImportContacts";
import AssignmentIcon from "@mui/icons-material/Assignment";
import { AddProps } from "../types/types";

export default function Add(props: AddProps) {
    const options = [
        {
            icon: <AssignmentIcon />,
            tooltip: "New Assignment",
            click: props.onAssignmentClick,
        },
        {
            icon: <ImportContactsIcon />,
            tooltip: "New Subject",
            click: props.onSubjectClick,
        },
        {
            icon: <TaskAltIcon />,
            tooltip: "New Task",
            click: props.onTaskClick,
        },
    ];

    return (
        <SpeedDial
            ariaLabel="Add"
            sx={{ position: "absolute", bottom: 16, right: 16 }}
            icon={<SpeedDialIcon />}
        >
            {options.map((opt) => (
                <SpeedDialAction
                    key={opt.tooltip}
                    icon={opt.icon}
                    tooltipTitle={opt.tooltip}
                    onClick={opt.click}
                />
            ))}
        </SpeedDial>
    );
}
