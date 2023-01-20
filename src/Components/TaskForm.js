import React, { useState } from "react";
import "../Stylesheets/TaskForm.css";
import { v4 as uuidv4 } from "uuid";

function TaskForm(props) {

    const [input, setInput] = useState('');

    const handleInput = e =>{
        setInput(e.target.value);
        console.log(input);
    }
    const handleSubmit = e => {
        e.preventDefault();
        const newTask = {
            id: uuidv4(),
            text: input,
            completed: false
        }

        props.onSubmit(newTask);
    }

    return(
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                className="task-input"
                type="text"
                placeholder="Write a task."
                name="text"
                onChange={handleInput}
            />
            <button className="task-button">Add Task</button>
        </form>
    );
}

export default TaskForm;