import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
ReactDOM.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <HashRouter>
                <App />
            </HashRouter>
        </QueryClientProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
