import {FilterValueType} from "./App";
import React from "react";

export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

export type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (id: string) => void
    changeFilter: (filter: FilterValueType) => void
    addTask: (title: string) => void
}

export function Todolist(props: PropsType) {
    const [inputTaskTitle, setInputTaskTitle] = React.useState<string>("");

    function inputTaskTitleChangeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const title = event.currentTarget.value;
        setInputTaskTitle(title);
    }
    function inputTaskTitleKeyHandler(event: React.KeyboardEvent<HTMLInputElement>) {
        if (event.key === "Enter") {
            props.addTask(inputTaskTitle);
            setInputTaskTitle("");
        }
    }
    function addTaskClickHandler() {
        props.addTask(inputTaskTitle);
        setInputTaskTitle("");
    }

    function onAllFilterClickHandler() {
        props.changeFilter("all");
    }
    function onActiveFilterClickHandler() {
        props.changeFilter("active");
    }
    function onCompletedFilterClickHandler() {
        props.changeFilter("completed");
    }

    return (
        <div className="App">
            <div>
                <h3>{props.title}</h3>
                <div>
                    <input value={inputTaskTitle}
                           onChange={inputTaskTitleChangeHandler}
                           onKeyUp={inputTaskTitleKeyHandler}
                    />
                    <button onClick={addTaskClickHandler}>+</button>
                </div>
                <ul>
                    {props.tasks.map((task: TaskType) => {
                        function onRemoveTaskClickHandler() {
                            props.removeTask(task.id);
                        }

                        return (
                            <li key={task.id}>
                                <input type="checkbox" checked={task.isDone}/>
                                <span>{task.title}</span>
                                <button onClick={onRemoveTaskClickHandler}>X</button>
                            </li>
                        )
                    })}
                </ul>
                <div>
                    <button onClick={onAllFilterClickHandler}>All</button>
                    <button onClick={onActiveFilterClickHandler}>Active</button>
                    <button onClick={onCompletedFilterClickHandler}>Completed</button>
                </div>
            </div>
        </div>
    );
}

