import React from "react";
import TaskForm from "./TaskForm";
import "../Stylesheets/TaskList.css";
import { useState } from "react";


function TaskList(){
    const [tasks, setTasks] = useState([]);
    return(
        <>
            <TaskForm></TaskForm>
            <div className="task-list-container">
                Task List
            </div>
        </>
    );
}

export default TaskList;