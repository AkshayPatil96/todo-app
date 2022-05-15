import React from "react";
import { Link } from "react-router-dom";
import { TodoContainer } from "./Styles";



const TodosType = () => {
    return (
        <>
            <TodoContainer>
                <Link
                    to={`#`}
                    className="todo-type"
                    style={{
                        background: "#0d6dfd36",
                        border: "2px solid #0d6dfd",
                    }}
                >
                    <p>All</p>
                    <p>5</p>
                </Link>
                <Link
                    to={`#`}
                    className="todo-type"
                    style={{
                        background: "#79ae3936",
                        border: "2px solid #7aae39",
                    }}
                >
                    <p>Personal</p>
                    <p>5</p>
                </Link>
                <Link
                    to={`#`}
                    className="todo-type"
                    style={{
                        background: "#54508b36",
                        border: "2px solid #54508b",
                    }}
                >
                    <p>Official</p>
                    <p>5</p>
                </Link>
                <Link
                    to={`#`}
                    className="todo-type"
                    style={{
                        background: "#ffa50036",
                        border: "2px solid #ffa500",
                    }}
                >
                    <p>Others</p>
                    <p>5</p>
                </Link>
            </TodoContainer>
        </>
    );
};

export default TodosType;
