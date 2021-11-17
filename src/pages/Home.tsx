import React, { useEffect, useState } from "react";
import Add from "../components/Add";
import Assignment from "../components/Assignment";
import Navbar from "../components/Navbar";
import New from "../components/New";
import useLocalStorage from "../hooks/useLocalStorage";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { new_ } from "../types/types";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

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
        filter: "",
    });

    useEffect(() => {
        console.log(data);
    }, [data]);

    function newAssignment() {
        if (
            values.title !== "" &&
            values.description !== "" &&
            values.due !== ""
        ) {
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

    function deleteAssignment(elem: any) {
        const filtered = data.assignments.filter((element) => element !== elem);
        setData({ ...data, assignments: [...filtered] });
    }

    return (
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
                    setValues({ ...values, description: e.target.value });
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

            <Box
                sx={{ minWidth: 120, marginLeft: 2, marginTop: 3 }}
                className="select-box"
            >
                <FormControl style={{ width: 300 }}>
                    <InputLabel id="demo-simple-select-label">
                        Filter
                    </InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.filter}
                        label="Age"
                        onChange={(e: SelectChangeEvent) =>
                            setValues({
                                ...values,
                                filter: e.target.value as string,
                            })
                        }
                    >
                        <MenuItem value={1}>All</MenuItem>
                        <MenuItem value={2}>Due soon</MenuItem>
                    </Select>
                </FormControl>
            </Box>

            {data.assignments.length === 0 ? (
                <Typography
                    variant="h6"
                    style={{ marginLeft: 20, marginTop: 20, color: "gray" }}
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
            )}
        </section>
    );
}
