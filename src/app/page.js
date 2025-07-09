import Weather from "./components/Weather";
import { createTheme, ThemeProvider } from "@mui/material/styles";

export default function Home() {


  return (
    <>
        <div className="flex justify-center items-center h-[100vh] bg-cyan-700">
          <Weather />
        </div>

      ;
    </>
  );
}
