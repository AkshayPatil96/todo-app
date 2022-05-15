import styled from "styled-components";

export const SideBar = styled.div`
    border: 2px solid #aaaaaa;
    height: 100vh;
    width: 20%;
    display: grid;
    grid-template-rows: 15% 75% 10%;
    padding: 0.5em;
    /* position: sticky; */
    /* top: 0; */
`;

export const User = styled.div`
    /* border: 1px solid red; */
    display: flex;
    align-items: center;
    cursor: pointer;
    padding: 0.5rem;
    border-bottom: 2px solid #cecece;
    color: #454546;

    .user-img {
        width: 50px;
        border-radius: 100%;
        margin-right: 5%;
    }

    .user-details {
        /* border: 1px solid; */
        position: relative;
        margin-bottom: 8px;
    }

    .user-name {
        /* padding: 0.25rem; */
        font-weight: bold;
        font-size: 25px;
        /* margin-top: 5%; */
    }

    .user-email {
        font-size: 10px;
        letter-spacing: 1px;
        position: absolute;
        top: 65%;
        color: #555555;
    }
`;

export const TodoContainer = styled.div`
    margin: 5% 3%;

    .todo-type {
        border: 1px solid;
        padding: 1rem 0 0 1rem;
        margin: 1rem 0.5rem;
        display: grid;
        grid-template-columns: 80% 20%;
        gap: 0.75rem;
        cursor: pointer;
        text-decoration: none;
    }

    .todo-type > p:first-child {
        color: #000;
        font-weight: 500;
    }

    .todo-type > p:last-child {
        color: #000;
        font-weight: 700;
    }
`;

export const Auth = styled.div`
    border-top: 2px solid #cecece;
    display: flex;
    justify-content: center;
    align-items: center;

    .btn {
        /* border: 1px solid; */
        font-size: 20px;
        text-decoration: none;
        color: #454546;
        font-weight: bold;

        &:hover {
            text-decoration: underline;
            color: #000000;
        }
    }
`;

export const Main = styled.div`
    display: flex;
`;

export const MainDiv = styled.div`
    /* border: 2px solid red; */
    margin: 1rem 1.5rem;
    width: 80%;
`;

export const LoginDiv = styled.div`
    margin: 1rem 8%;
    width: 60%;
    display: flex;
    /* justify-content: center; */
    align-items: center;
`;

export const FORM = styled.form`
    /* border: 2px solid red; */
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 2rem;
    justify-content: space-between;
    align-items: center;
    margin-top: 3rem;

    > div {
        /* border: 2px solid red; */
        /* width: 100%; */
    }
`;
