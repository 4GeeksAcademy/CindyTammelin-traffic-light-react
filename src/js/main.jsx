import React from "react";
import ReactDOM from "react-dom/client";
import TrafficLight from "./components/TrafficLight";
import "../styles/index.css";

const App = () => {

    return (
        <div className="app">
            <h1>Semaforo con React</h1>
            <TrafficLight />
        </div>
    );
    
};

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);