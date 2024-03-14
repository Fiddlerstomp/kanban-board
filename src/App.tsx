import React from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

export type FilterValueType = "all" | "active" | "completed"

function App() {
    const initTasks: Array<TaskType> = [
        { id: 0, title: "HTML&CSS", isDone: true },
        { id: 1, title: "JS", isDone: true },
        { id: 2, title: "React", isDone: false },
        { id: 3, title: "NodeJS", isDone: false },
    ];

    const [tasks, setTasks] = React.useState<Array<TaskType>>(initTasks);
    const [filter, setFilter] = React.useState<FilterValueType>("all");

    function removeTask(id: number) {
        const newTaskList: Array<TaskType> = tasks.filter(task => task.id !== id);
        setTasks(newTaskList);
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
            <Todolist title='What to learn' tasks={filteredTasks} removeTask={removeTask} changeFilter={changeFilter}/>
        </div>
    )
}

export default App;
