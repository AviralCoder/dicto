import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { ThemeProvider, createTheme } from "@mui/material";
import React, { createContext } from "react";
import useLocalStorage from "./hooks/useLocalStorage";

const SetPrimaryColorContext = createContext<
    React.Dispatch<React.SetStateAction<string>>
>(() => {});

export default function App() {
    const [primaryColor, setPrimaryColor] = useLocalStorage(
        "DICTO-THEME",
        "#f00"
    );

    const theme = createTheme({
        palette: {
            primary: {
                main: primaryColor,
            },
        },
    });

    return (
        <SetPrimaryColorContext.Provider value={setPrimaryColor}>
            <ThemeProvider theme={theme}>
                <Router>
                    <Routes>
                        <Route path="/" element={<Home />} />
                    </Routes>
                </Router>
            </ThemeProvider>
        </SetPrimaryColorContext.Provider>
    );
}

export { SetPrimaryColorContext };
