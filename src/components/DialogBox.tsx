import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DialogBoxProps } from "../types/types";

export default function DialogBox(props: DialogBoxProps) {
    return (
        <div>
            <Dialog
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {props.heading}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        {props.body}
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    {props.buttons.map((elem) => (
                        <Button variant="text" onClick={elem.onClick}>
                            {elem.text}
                        </Button>
                    ))}
                </DialogActions>
            </Dialog>
        </div>
    );
}
