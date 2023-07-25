import "./App.css";
import { ThemeProvider } from "@mui/material/styles";
import MainRoutes from "./pages/MainRoutes";
import { theme } from "./config/theme.config.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <MainRoutes />
      </div>
    </ThemeProvider>
  );
}

export default App;
