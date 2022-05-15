import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import {
    Button,
    FloatingLabel,
    Form,
    FormControl,
    InputGroup,
} from "react-bootstrap";
import { FORM, MainDiv } from "./Styles";
import styles from "./Style.module.css";
import { nanoid } from "nanoid";

const formDetails = {
    id: nanoid(),
    title: "",
    subTasks: "",
    date: "",
    description: "",
    type: "",
    status: "",
};

const TodoInput = () => {
    const [todoData, setTodoData] = useState(formDetails);
    const [taskType, setTaskType] = useState({
        type: [],
    });

    const { title, subTasks, date, description, type, status } = todoData;

    const typeChange = (e) => {
        const { value, checked } = e.target;
        const { type } = taskType;

        if (checked) {
            setTaskType({
                type: [...type, value],
            });
        } else {
            setTaskType({
                type: type.filter((e) => e !== value),
            });
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;

        setTodoData({
            ...todoData,
            [name]: value,
        });
    };

    const [subTk, setSubTk] = useState("");
    const [getSub, setGetSub] = useState([]);

    const handlesubTask = (e) => {
        setSubTk(e.target.value);
    };
    const addSubTask = () => {
        if (subTk) {
            const payload = {
                subTask: subTk,
                id: nanoid(),
                status: false,
            };
            setGetSub([...getSub, payload]);
            setSubTk("");
            // console.log(getSub);
        } else {
            alert("Add sub task");
        }
    };

    const handleDelete = (id) => {
        const updatedList = getSub.filter((ele) => ele.id !== id);
        setGetSub(updatedList);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        todoData.type = taskType;
        todoData.subTasks = getSub;
        setTodoData({
            title: "",
            subTasks: "",
            date: "",
            description: "",
            type: "",
            status: "",
        });
        setGetSub([]);
        console.log(todoData);
        // console.log(getSub);
    };

    return (
        <>
            <MainDiv>
                <h1 className="d-flex justify-content-center align-items-center my-3">
                    Add Todo Tasks
                </h1>
                <FORM onSubmit={handleSubmit}>
                    <div>
                        <FloatingLabel controlId="floatingInput" label="TITLE">
                            {/* Title */}

                            <Form.Control
                                type="text"
                                name="title"
                                value={title}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Todo Title"
                            />
                        </FloatingLabel>
                    </div>
                    <div>
                        <InputGroup className="p-2">
                            {/* Sub Tasks */}

                            <FormControl
                                placeholder="Sub Tasks"
                                type="text"
                                // name="subTasks"
                                value={subTk}
                                onChange={handlesubTask}
                                autoComplete="off"
                                aria-label="Add Sub Tasks"
                                aria-describedby="basic-addon2"
                            />
                            <Button
                                variant="outline-secondary"
                                id="button-addon2"
                                onClick={addSubTask}
                            >
                                ADD
                            </Button>
                        </InputGroup>
                    </div>
                    <div>
                        <FloatingLabel controlId="floatingInput" label="Date">
                            {/* Date */}

                            <Form.Control
                                type="date"
                                name="date"
                                value={date}
                                onChange={handleChange}
                                autoComplete="off"
                                placeholder="Todo Title"
                            />
                        </FloatingLabel>
                    </div>
                    <div>
                        <FloatingLabel
                            controlId="floatingTextarea2"
                            label="DESCRIPTION"
                        >
                            {/* Description */}

                            <Form.Control
                                as="textarea"
                                placeholder="DESCRIPTION"
                                name="description"
                                value={description}
                                onChange={handleChange}
                                style={{ height: "150px" }}
                            />
                        </FloatingLabel>
                    </div>
                    <div className={styles.scroll}>
                        {/* sub tasks */}

                        {getSub &&
                            getSub.map((element) => {
                                return (
                                    <InputGroup
                                        className="mb-3"
                                        key={element.id}
                                    >
                                        <InputGroup.Checkbox aria-label="Checkbox for following text input" />
                                        <FormControl
                                            aria-label="Text input with checkbox"
                                            value={element.subTask}
                                            onChange={(e) =>
                                                setSubTk(e.target.value)
                                            }
                                        />
                                        <Button
                                            variant="outline-secondary"
                                            id="button-addon2"
                                            onClick={() =>
                                                handleDelete(element.id)
                                            }
                                        >
                                            <FontAwesomeIcon
                                                icon={faTrashCan}
                                            />
                                        </Button>
                                    </InputGroup>
                                );
                            })}
                    </div>
                    <div>
                        {/* submit button */}

                        <Button
                            className="btn btn-secondary p-4 fs-5"
                            type="submit"
                        >
                            Create New Task
                        </Button>
                    </div>
                    <div>
                        {/* Statue */}

                        <Form.Check
                            type="radio"
                            name="status"
                            value="Todo"
                            onChange={handleChange}
                            id="default-radio-1"
                            label="Todo"
                        />
                        <Form.Check
                            type="radio"
                            name="status"
                            value="In Progress"
                            onChange={handleChange}
                            id="default-radio-2"
                            label="In Progress"
                        />
                        <Form.Check
                            type="radio"
                            name="status"
                            value="Done"
                            onChange={handleChange}
                            id="default-radio-3"
                            label="Done"
                        />
                    </div>
                    <div>
                        {/* type */}

                        <Form.Check
                            type="checkbox"
                            name="type"
                            value="Personal"
                            onChange={typeChange}
                            id="default-checkbox-1"
                            label="Personal"
                        />
                        <Form.Check
                            type="checkbox"
                            name="type"
                            value="Official"
                            onChange={typeChange}
                            id="default-checkbox-2"
                            label="Official"
                        />
                        <Form.Check
                            type="checkbox"
                            name="type"
                            value="Others"
                            onChange={typeChange}
                            id="default-checkbox-3"
                            label="Others"
                        />
                    </div>
                </FORM>
            </MainDiv>
        </>
    );
};

export default TodoInput;
