import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: "#f00",
        },
    },
});

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </ThemeProvider>
    );
}
