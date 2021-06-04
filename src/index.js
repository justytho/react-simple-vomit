//Import react and reactDOM
import React from "react";
import ReactDOM from "react-dom";

//Import the css file
import "./index.css";

//Import main component and registerServiceWorker
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";

// Render App
ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
