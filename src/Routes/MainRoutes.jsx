import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import Signup from "../Components/Signup";
import { Main } from "../Components/Styles";
import TodoInput from "../Components/TodoInput";
import Navbar from "../Page/Navbar";
import Register from "../Page/Register";
import Summary from "../Page/Summary";

const MainRoutes = () => {
    return (
        <>
            <Main>
                <Navbar />
                <Routes>
                    <Route path="/" element={<TodoInput />} />
                    <Route path="/summary" element={<Summary />} />
                    <Route path="/register" element={<Register />} />
                    <Route path="/signup" element={<Signup />} />
                </Routes>
            </Main>
        </>
    );
};

export default MainRoutes;
