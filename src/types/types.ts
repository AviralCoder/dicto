export interface AddProps {
    onAssignmentClick: () => void;
    onTaskClick: () => void;
    onSubjectClick: () => void;
}

export type new_ = "assignment" | "subject" | "task";

export interface NewProps {
    open: boolean;
    onClose: () => void;
    newType: new_;
    dateValue: string;
    onDateValueChange: (e: any) => void;
}
