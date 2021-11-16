import { useEffect, useState } from "react";
import Add from "../components/Add";
import Navbar from "../components/Navbar";
import New from "../components/New";
import useLocalStorage from "../hooks/useLocalStorage";
import { new_ } from "../types/types";

export default function Home() {
    const [data] = useLocalStorage("DICTO-DATA", {
        assignments: [
            {
                title: "Wow!",
                description: "Nice!",
                due: "29/11/21",
                subject: "bruh",
            },
        ],
    });
    const [modalOpen, setModalOpen] = useState(false);
    const [newType] = useState<new_>("assignment");
    const [dateValue, setDateValue] = useState("");

    useEffect(() => {
        console.log(data);
    }, [data]);

    function newAssignment() {
        setModalOpen(true);
        /* setData({
            ...data,
            assignments: [
                {
                    title: "Wow!",
                    description: "Nice!",
                    due: "29/11/21",
                    subject: "bruh",
                },
                ...data.assignments,
            ],
        }); */
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
                dateValue={dateValue}
                onDateValueChange={(e) => {
                    setDateValue(e.target.value);
                }}
            />

            <Add
                onAssignmentClick={() => {
                    newAssignment();
                }}
                onSubjectClick={() => {}}
                onTaskClick={() => {}}
            />
        </section>
    );
}
