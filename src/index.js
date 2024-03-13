import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import SlideshowPage from "./pages/SlideshowPage";

const App = () => (
  <section>
    <SlideshowPage />
  </section>
);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(<App />);
