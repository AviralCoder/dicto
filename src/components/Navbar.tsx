import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import WarningIcon from "@mui/icons-material/Warning";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ margin: 0 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton
                        onClick={() => {
                            window.location.href =
                                "https://github.com/AviralCoder/dicto";
                        }}
                    >
                        <GitHubIcon style={{ color: "#fff" }} />
                    </IconButton>

                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{
                            flexGrow: 1,
                            display: { xs: "none", sm: "block" },
                        }}
                    >
                        Dicto
                    </Typography>

                    <IconButton>
                        <QuestionAnswerIcon style={{ color: "#fff" }} />
                    </IconButton>

                    <IconButton>
                        <WarningIcon style={{ color: "#fff" }} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
