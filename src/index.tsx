import "react-app-polyfill/ie9";
import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./Routes/App";
import "./index.css";

ReactDOM.render(<App />, document.getElementById("root") as HTMLElement);
