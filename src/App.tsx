import React from 'react';
import './App.css';
import { Todolist } from './Todolist';

function App() {
    const learnTasks = [
        { id: 0, title: "HTML&CSS", isDone: true },
        { id: 1, title: "JS", isDone: true },
        { id: 2, title: "React", isDone: false },
        { id: 3, title: "NodeJS", isDone: false },
    ];
    const buyTasks = [
        { id: 0, title: "Bread", isDone: true },
        { id: 1, title: "Milk", isDone: false },
        { id: 2, title: "Sugar", isDone: false },
        { id: 3, title: "Meat", isDone: false },
        { id: 4, title: "Corn", isDone: false },
    ];

    return (
        <div className='App'>
            <Todolist title='What to learn' tasks={learnTasks} />
            <Todolist title='What to buy' tasks={buyTasks} />
        </div>
    )
}

export default App;
