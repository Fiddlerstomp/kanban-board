import React from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from "uuid";

export type FilterValueType = "all" | "active" | "completed"

function App() {
    const initTasks: Array<TaskType> = [
        { id: v1(), title: "HTML&CSS", isDone: true },
        { id: v1(), title: "JS", isDone: true },
        { id: v1(), title: "React", isDone: false },
        { id: v1(), title: "NodeJS", isDone: false },
    ];

    const [tasks, setTasks] = React.useState<Array<TaskType>>(initTasks);
    const [filter, setFilter] = React.useState<FilterValueType>("all");

    function removeTask(id: string) {
        const newTaskList: Array<TaskType> = tasks.filter(task => task.id !== id);
        setTasks(newTaskList);
    }

    function addTask(title: string) {
        const newTask: TaskType = { id: v1(), title: title, isDone: false};
        setTasks([newTask, ...tasks]);
    }

    function changeFilter(filter: FilterValueType) {
        setFilter(filter);
    }

    let filteredTasks = tasks;
    switch (filter) {
        case "active":
            filteredTasks = tasks.filter(task => task.isDone);
            break;
        case "completed":
            filteredTasks = tasks.filter(task => !task.isDone);
            break;
        case "all":
            filteredTasks = tasks;
    }

    return (
        <div className='App'>
            <Todolist title='What to learn' tasks={filteredTasks} removeTask={removeTask} changeFilter={changeFilter} addTask={addTask}/>
        </div>
    )
}

export default App;
