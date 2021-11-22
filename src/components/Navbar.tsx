import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import IconButton from "@mui/material/IconButton";
import WarningIcon from "@mui/icons-material/Warning";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import HelpIcon from "@mui/icons-material/Help";
import Tooltip from "@mui/material/Tooltip";
import ColorLensIcon from "@mui/icons-material/ColorLens";

export default function Navbar() {
    return (
        <Box sx={{ flexGrow: 1 }} style={{ margin: 0 }}>
            <AppBar position="static">
                <Toolbar>
                    <Tooltip title="Open Project on GitHub" arrow>
                        <IconButton
                            onClick={() => {
                                window.location.href =
                                    "https://github.com/AviralCoder/dicto";
                            }}
                        >
                            <GitHubIcon style={{ color: "#fff" }} />
                        </IconButton>
                    </Tooltip>

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

                    <Tooltip title="FAQ" arrow>
                        <IconButton>
                            <QuestionAnswerIcon style={{ color: "#fff" }} />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Report Error" arrow>
                        <IconButton>
                            <WarningIcon style={{ color: "#fff" }} />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Help" arrow>
                        <IconButton>
                            <HelpIcon style={{ color: "#fff" }} />
                        </IconButton>
                    </Tooltip>

                    <Tooltip title="Change Theme" arrow>
                        <IconButton>
                            <ColorLensIcon style={{ color: "#fff" }} />
                        </IconButton>
                    </Tooltip>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
