import React from "react";
import { Auth } from "./Styles";



const ToggleAuth = () => {
    return (
        <>
            <Auth>
                <button className="btn btn-link">LOGOUT</button>
            </Auth>
        </>
    );
};

export default ToggleAuth;
