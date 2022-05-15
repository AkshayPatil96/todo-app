import React from "react";
import styled from "styled-components";
import { User } from "./Styles";
import maleAvi from "../Images/maleAvi.svg"
import { useDispatch, useSelector } from "react-redux";



const UserDetails = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.isAuth);
    // console.log("user: ", user);
    return (
        <>
            <User>
                <img
                    className="user-img"
                    src={maleAvi}
                    alt=""
                />
                <div className="user-details">
                    <p className="user-name">Akshay Patil</p>
                    <p className="user-email">akshayr.patil96@gmail.com</p>
                </div>
            </User>
        </>
    );
};

export default UserDetails;
