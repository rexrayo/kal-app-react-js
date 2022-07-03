import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import ThemeButton from "./components/ThemeButton";
import Auth from "./screens/Auth";
import Dashboard from './screens/Dashboard/index';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './themes';
import { Background } from "./components/Global";
import CreateProfile from "./screens/CreateProfile";

function App() {
    const defaultLight = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const [theme, setTheme] = useState(defaultLight ? 'light' : 'dark' );

    useEffect(() => {
        const currentTheme = localStorage.getItem("theme");
        if (currentTheme) {
            setTheme(currentTheme);
        }
      }, []);

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    }
  
    return (
        <ThemeProvider theme={(theme === 'light' ? lightTheme : darkTheme)}>
            <Background/>
            <ThemeButton changeTheme={changeTheme} />
            <Routes>
                <Route path="/" element={<Auth />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/create_profile" element={<CreateProfile />} />
            </Routes>
        </ThemeProvider>
    );
}

export default App;
