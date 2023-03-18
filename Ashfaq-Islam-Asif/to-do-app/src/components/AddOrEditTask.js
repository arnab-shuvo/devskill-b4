import React, { useEffect, useState } from "react";
import {
    Box,
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    IconButton,
    TextField,
    Typography,
} from "@mui/material";
import { Clear } from "@mui/icons-material";

const AddOrEditTask = ({ dataForEdit, dialogOpen, onClose, buttonAction }) => {
    const [title, setTitle] = useState("");
    const [details, setDetails] = useState("");
    const [showTitleError, setShowTitleError] = useState(false);
    const [showDetailsError, setShowDetailsError] = useState(false);

    useEffect(() => {
        if (dataForEdit) {
            setTitle(dataForEdit.title);
            setDetails(dataForEdit.details);
        }
    }, [dataForEdit]);

    const onCloseDialog = () => {
        onClose();
        setTitle("");
        setDetails("");
        setShowTitleError(false);
        setShowDetailsError(false);
    };

    return (
        <Dialog open={dialogOpen}>
            <DialogTitle
                display={"flex"}
                justifyContent={"space-between"}
                alignItems={"center"}
            >
                <Typography>{dataForEdit ? "Edit " : "Add "} Task</Typography>
                <IconButton onClick={onCloseDialog}>
                    <Clear />
                </IconButton>
            </DialogTitle>
            <DialogContent sx={{ width: { xs: 270, sm: 400, md: 400 } }}>
                <Box mb={2}>
                    <Typography fontSize={13}>Title</Typography>
                    <TextField
                        size="small"
                        fullWidth
                        variant="outlined"
                        placeholder="Title goes here..."
                        sx={{ fontSize: 14 }}
                        value={title}
                        onChange={(e) => {
                            setTitle(e.target.value);
                            setShowTitleError(false);
                        }}
                    />
                    {showTitleError && (
                        <Typography fontSize={13} color={"red"}>
                            Title can't be empty
                        </Typography>
                    )}
                </Box>
                <Box mb={2}>
                    <Typography fontSize={13}>Details</Typography>
                    <TextField
                        size="small"
                        fullWidth
                        multiline
                        minRows={3}
                        maxRows={5}
                        variant="outlined"
                        placeholder="Details goes here..."
                        sx={{ fontSize: 14 }}
                        value={details}
                        onChange={(e) => {
                            setDetails(e.target.value);
                            setShowDetailsError(false);
                        }}
                    />
                    {showDetailsError && (
                        <Typography fontSize={13} color={"red"}>
                            Details can't be empty
                        </Typography>
                    )}
                </Box>
            </DialogContent>
            <DialogActions sx={{ mr: 2, mb: 2 }}>
                <Button variant={"outlined"} onClick={onCloseDialog}>
                    Cancel
                </Button>
                <Button
                    variant={"contained"}
                    onClick={() => {
                        if (title.trim() == "" || details.trim() == "") {
                            if (title.trim() == "") setShowTitleError(true);
                            if (details.trimI() == "")
                                setShowDetailsError(true);
                            return;
                        }
                        buttonAction({
                            id: dataForEdit ? dataForEdit.id : 0,
                            title: title,
                            details: details,
                            done: false,
                            time: dataForEdit
                                ? dataForEdit.time
                                : new Date().toLocaleString(),
                        });
                        onCloseDialog();
                    }}
                >
                    {dataForEdit ? "Edit" : "Add"}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

export default AddOrEditTask;
