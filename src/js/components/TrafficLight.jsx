import React, { useState } from "react";
import "../../styles/index.css";

const TrafficLight= () => {
    const [color, setColor]= useState("red");
    const [morado, setMorado] =useState(false);



    const cambiar = () =>{
        const colores =morado ? ["red", "green", "yellow", "purple"] : ["red", "green", "yellow"];
        const indice =colores.indexOf(color);
        const siguiente=(indice + 1) % colores.length;
        setColor(colores[siguiente]);
    };



    const toggleMorado=()=> {
        setMorado(!morado);
        if (morado && color=== "purple") {
            setColor("red");
        }
    };



    return (
        <div className="traffic-container">
            <div id="trafficTop"></div>
            <div id="container" className="traffic-light">
                <div 
                    onClick={()=> setColor("red")} 
                    className={`light red ${color=== "red" ? "selected" : ""}`}
                ></div>
                <div 
                    onClick={()=> setColor("yellow")} 
                    className={`light yellow ${color=== "yellow" ? "selected" : ""}`}
                ></div>
                <div 
                    onClick={()=>setColor("green")} 
                    className={`light green ${color=== "green" ? "selected" : ""}`}
                ></div>
                {morado && (
                    <div 
                        onClick={() => setColor("purple")} 
                        className={`light purple ${color === "purple" ? "selected" : ""}`}
                    ></div>
                )}
            </div>
            <div className="controls">
                <button onClick={cambiar} className="control-btn">
                    Cambiar Color
                </button>
                <button onClick={toggleMorado} className="control-btn">
                    {morado ? "Quitar Morado" : "Añadir Morado"}
                </button>
            </div>
        </div>
    );
};

export default TrafficLight;