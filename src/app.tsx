import "./global.css";

import { useScrollToTop } from "src/hooks/use-scroll-to-top";

import Router from "./routes/sections";
import ThemeProvider from "./theme";

// ----------------------------------------------------------------------

export default function App() {
  useScrollToTop();

  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
}
