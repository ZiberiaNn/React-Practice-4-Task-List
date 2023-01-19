import React from "react";
import "../Stylesheets/Task.css";
import { AiOutlineCloseCircle } from "react-icons/ai";

function Task({ text, completed }){
    return(
        <div className={completed ? "task-container completed" : "task-container"}>
            <div className="task-text">
                {text}
            </div>
            <div className="task-icon"> 
                <AiOutlineCloseCircle className="task-icon"></AiOutlineCloseCircle>
            </div>
        </div>
    );
}

export default Task;