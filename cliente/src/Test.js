import React from "react";
import { Route, Routes } from "react-router-dom";
import DynamicForm from "./Componentes/dynamicForm";

export default function Test() {
    return (
        <div >
            <Routes>
                <Route path="/form/:collection" element={<DynamicForm />} />
            </Routes>
        </div>
    );
}