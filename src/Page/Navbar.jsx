import React from "react";
import { SideBar } from "../Components/Styles";
import TodosType from "../Components/TodosType";
import ToggleAuth from "../Components/ToggleAuth";
import UserDetails from "../Components/UserDetails";



const Navbar = () => {
    return (
        <>
            <SideBar>
                <UserDetails />
                <TodosType />
                <ToggleAuth />
            </SideBar>
        </>
    );
};

export default Navbar;
