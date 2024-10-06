import React from "react";
import { createRoot } from "react-dom/client";

import MainContent from "./js/MainContent";
import "./styles/Index.css";

// ------------------------------------- Render Elements on browser -------------------------------------
const rootElement = document.querySelector("#root"); // Selecting the root element in the HTML to mount the React app

if (!rootElement) throw new Error("Failed to find the root h1"); // Error handling if the root element is not found

const root = createRoot(rootElement); // Initializing the root for rendering the application

root.render(<MainContent />); // Rendering the MainContent component into the root element
