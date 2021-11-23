export interface AddProps {
    onAssignmentClick: () => void;
    onTaskClick: () => void;
}

export type new_ = "assignment" | "task";

export interface NewProps {
    open: boolean;
    onClose: () => void;
    newType: new_;
    dateValue: string;
    onDateValueChange: (e: any) => void;
    onAddClick: () => void;
    titleValue: string;
    onTitleChange: (e: any) => void;
    descriptionValue: string;
    onDescriptionChange: (e: any) => void;
}

export interface AssignmentProps {
    title: string;
    due: string;
    description: string;
    onDeleteClick: () => void;
}

type Buttons = {
    text: string;
    onClick: () => void;
};

export interface DialogBoxProps {
    heading: string;
    body: string;
    buttons: Buttons[];
    open: boolean;
    onClose: () => void;
}
