import React from "react";
import { Route, Routes } from "react-router-dom";
import DynamicForm from "./Componentes/dynamicForm";
import DynamicTable from "./Componentes/dynamicTable";

export default function Test() {
    return (
        <div >
            <Routes>
                <Route path="/form/:collection" element={<DynamicForm />} />
                <Route path="/table/:collection" element={<DynamicTable />} />
            </Routes>
        </div>
    );
}