import { useEffect, useState } from "react";
import Add from "../components/Add";
import Assignment from "../components/Assignment";
import Navbar from "../components/Navbar";
import New from "../components/New";
import useLocalStorage from "../hooks/useLocalStorage";
import Typography from "@mui/material/Typography";
import { new_ } from "../types/types";

export default function Home() {
    const [data, setData] = useLocalStorage("DICTO-DATA", {
        assignments: [
            {
                title: "Get Started!",
                description: "Learn Algebra!",
                due: "29/11/21",
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
                    },
                ],
            });
            setModalOpen(false);
            setValues({ title: "", description: "", due: "" });
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

            <Typography variant="h5" style={{ marginLeft: 20, marginTop: 20 }}>
                Assignments
            </Typography>

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
                        <Assignment
                            title={elem.title}
                            description={elem.description}
                            due={elem.due}
                            onDeleteClick={() => {
                                deleteAssignment(elem);
                            }}
                        />
                    ))}
                </div>
            )}
        </section>
    );
}
