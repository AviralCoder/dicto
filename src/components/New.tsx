import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { NewProps } from "../types/types";
import AddIcon from "@mui/icons-material/Add";

const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 4,
};

export default function New(props: NewProps) {
    return (
        <div>
            <Modal
                open={props.open}
                onClose={props.onClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <TextField
                        label="Title"
                        variant="outlined"
                        sx={{
                            width: "100%",
                        }}
                        value={props.titleValue}
                        onChange={props.onTitleChange}
                    />

                    <TextField
                        label="Description"
                        variant="outlined"
                        sx={{
                            width: "100%",
                            marginTop: 3,
                        }}
                        multiline
                        rows={4}
                        value={props.descriptionValue}
                        onChange={props.onDescriptionChange}
                    />

                    <input
                        type="date"
                        style={{
                            marginTop: 20,
                            width: "100%",
                            border: "1px solid #acacad",
                            padding: 10,
                            borderRadius: 5,
                            fontFamily: "sans-serif",
                        }}
                        value={props.dateValue}
                        onChange={props.onDateValueChange}
                        className="date-"
                    />

                    <Button
                        startIcon={<AddIcon />}
                        variant="contained"
                        sx={{
                            width: "100%",
                            marginTop: 3,
                        }}
                        onClick={props.onAddClick}
                    >
                        Add
                    </Button>
                </Box>
            </Modal>
        </div>
    );
}
