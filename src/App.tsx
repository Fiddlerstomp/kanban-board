import React from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';

function App() {
    const initTasks: Array<TaskType> = [
        { id: 0, title: "HTML&CSS", isDone: true },
        { id: 1, title: "JS", isDone: true },
        { id: 2, title: "React", isDone: false },
        { id: 3, title: "NodeJS", isDone: false },
    ];

    const [tasks, setTasks] = React.useState(initTasks);

    function removeTask(id: number) {
        const newTaskList: Array<TaskType> = tasks.filter(task => task.id !== id);
        setTasks(newTaskList);
    }

    return (
        <div className='App'>
            <Todolist title='What to learn' tasks={tasks} removeTask={removeTask}/>
        </div>
    )
}

export default App;
