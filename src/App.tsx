import { ThemeProvider } from "./components/theme-provider";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/layout";
import WeatherDashboard from "./pages/dashboard";
import City from "./pages/city";
import { Toaster } from "sonner";
const App = () => {
  return (
    <BrowserRouter>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <Layout>
          <Routes>
            <Route path="/" element={<WeatherDashboard />} />
            <Route path="/city/:cityName" element={<City />} />
          </Routes>
        </Layout>
        <Toaster richColors />
      </ThemeProvider>
    </BrowserRouter>
  );
};
export default App;
