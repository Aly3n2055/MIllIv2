import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { injectStyles } from "./lib/utils";

// Inject custom styles for animations
injectStyles();

createRoot(document.getElementById("root")!).render(<App />);
