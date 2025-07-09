import Weather from "./components/Weather";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Head from "next/head";
export default function Home() {
  return (
    <>
      <Head>
        <title>Weather App</title>
      </Head>
      <div className="flex justify-center items-center h-[100vh] bg-cyan-700">
        <Weather />
      </div>
      ;
    </>
  );
}
