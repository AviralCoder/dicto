import React, { createContext, useState } from "react";
import Add from "../components/Add";
import Assignment from "../components/Assignment";
import Navbar from "../components/Navbar";
import New from "../components/New";
import useLocalStorage from "../hooks/useLocalStorage";
import Typography from "@mui/material/Typography";
import { DialogBoxProps, new_ } from "../types/types";
import DialogBox from "../components/DialogBox";

const DialogBoxPropsContext = createContext<DialogBoxProps>({
    heading: "",
    body: "",
    buttons: [
        {
            text: "",
            onClick: () => {},
        },
    ],
    open: false,
    onClose: () => {},
});
const SetDialogBoxPropsContext = createContext<
    React.Dispatch<React.SetStateAction<DialogBoxProps>>
>(() => {});

export default function Home() {
    const [data, setData] = useLocalStorage("DICTO-DATA", {
        assignments: [
            {
                title: "Get Started!",
                description: "Learn Algebra!",
                due: "29/11/21",
                id: Date.now(),
            },
        ],
    });
    const [modalOpen, setModalOpen] = useState(false);
    const [newType] = useState<new_>("assignment");
    const [values, setValues] = useState({
        title: "",
        description: "",
        due: "",
    });
    const [dialogBoxProps, setDialogBoxProps] = useState<DialogBoxProps>({
        heading: "",
        body: "",
        buttons: [
            {
                text: "",
                onClick: () => {},
            },
        ],
        open: false,
        onClose: () => {},
    });

    function newAssignment() {
        if (
            values.title !== "" &&
            values.description !== "" &&
            values.due !== ""
        ) {
            if (values.title.length > 20) {
                alert(
                    "Only 20 alphabets accepted in the title. Please give detail in the description."
                );
            } else {
                setData({
                    assignments: [
                        ...data.assignments,
                        {
                            title: values.title,
                            description: values.description,
                            due: values.due,
                            id: Date.now(),
                        },
                    ],
                });
                setModalOpen(false);
                setValues({ ...values, title: "", description: "", due: "" });
            }
        }
    }

    function deleteAssignment(elem: any) {
        const filtered = data.assignments.filter((element) => element !== elem);
        setData({ ...data, assignments: [...filtered] });
    }

    return (
        <DialogBoxPropsContext.Provider value={dialogBoxProps}>
            <SetDialogBoxPropsContext.Provider value={setDialogBoxProps}>
                <section className="home">
                    <Navbar />

                    <New
                        open={modalOpen}
                        onClose={() => {
                            setModalOpen(false);
                        }}
                        newType={newType}
                        dateValue={values.due}
                        onDateValueChange={(e) => {
                            setValues({ ...values, due: e.target.value });
                        }}
                        onAddClick={newAssignment}
                        titleValue={values.title}
                        onTitleChange={(e) => {
                            setValues({ ...values, title: e.target.value });
                        }}
                        descriptionValue={values.description}
                        onDescriptionChange={(e) => {
                            setValues({
                                ...values,
                                description: e.target.value,
                            });
                        }}
                    />

                    <Add
                        onAssignmentClick={() => {
                            setModalOpen(true);
                        }}
                        onTaskClick={() => {}}
                    />

                    <Typography
                        variant="h5"
                        style={{ marginLeft: 20, marginTop: 20 }}
                        className="at"
                    >
                        Assignments
                    </Typography>

                    {data.assignments &&
                        (data.assignments.length === 0 ? (
                            <Typography
                                variant="h6"
                                style={{
                                    marginLeft: 20,
                                    marginTop: 20,
                                    color: "gray",
                                }}
                            >
                                No Assignments Found
                            </Typography>
                        ) : (
                            <div>
                                {data.assignments.map((elem) => (
                                    <React.Fragment key={elem.id}>
                                        <Assignment
                                            title={elem.title}
                                            description={elem.description}
                                            due={elem.due}
                                            onDeleteClick={() => {
                                                deleteAssignment(elem);
                                            }}
                                        />
                                    </React.Fragment>
                                ))}
                            </div>
                        ))}

                    <DialogBox
                        body={dialogBoxProps.body}
                        heading={dialogBoxProps.heading}
                        open={dialogBoxProps.open}
                        buttons={dialogBoxProps.buttons}
                        onClose={dialogBoxProps.onClose}
                    />
                </section>
            </SetDialogBoxPropsContext.Provider>
        </DialogBoxPropsContext.Provider>
    );
}

export { DialogBoxPropsContext, SetDialogBoxPropsContext };
