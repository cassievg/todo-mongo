import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Todo } from './Todo.jsx';
import { TodoForm } from './TodoForm.jsx';
import { v4 as uuidv4 } from 'uuid';
import { EditTodoForm } from './EditTodoForm.jsx';

uuidv4();

// axios instance
const instance = axios.create({
    baseURL: 'http://localhost:5000/api/todos',
    timeout: 60000,
});

async function getTodos() {
    return await instance.get('/')
}

async function postTodo() {
    return await instance.post('/')
}

async function deleteTodo() {
    return await instance.delete('/:id')
}

async function putTodo() {
    return await instance.put('/:id')
}

export const TodoWrapper = () => {
    const [toDos, setToDos] = useState([])
    const [showCompleted, setShowCompleted] = useState(false);
    const navigate = useNavigate();
    
    useEffect(() => {
        const initTodos = async () => {
            const todoRes = await getTodos();
            const todoData = [...todoRes.data];
            const mappedTodo = todoData.map((item) => {
                return {
                    id: item._id,
                    task: item.task,
                    completed: item.completed,
                    isEditing: false
                }
            });
            
            setToDos(mappedTodo);
        }

        initTodos();
    }, []);

    const addToDo = toDo => {
        setToDos([...toDos, {
            id: uuidv4(),
            task: toDo,
            completed: false,
            isEditing: false
        }]);

        console.log(toDos);
    }

    const toggleComplete = id => {
        setToDos(toDos.map(todo => todo.id === id ? {...
        todo, completed: !todo.completed} : todo ))
    }

    const deleteToDo = id => {
        setToDos(toDos.filter(todo => todo.id !== id))
    }

    const editToDo = id => {
        setToDos(toDos.map((todo) => todo.id === id ? {...
            todo, isEditing: !todo.isEditing} : todo));
    }

    const editTask = (updatedTask, id) => {
        setToDos(toDos.map(todo => todo.id === id ? { ...
            todo, task: updatedTask, isEditing: false } : todo));
    };

    const toggleCompletedFilter = () => {
        setShowCompleted(!showCompleted);
    };

    const filteredTasks = showCompleted
        ? toDos.filter((todo) => todo.completed)
        : toDos;

    const handleToggle = (todoId) => {
        setToDos((prevToDos) =>
            prevToDos.map((todo) =>
                todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
            )
        );
    };

    return (
        <div className="TodoWrapper">
            <h1>to do list</h1>
            <button onClick={toggleCompletedFilter}>
                {showCompleted ? 'Show All' : 'Show Completed'}
            </button>

            <TodoForm addToDo={addToDo} />
            {filteredTasks.map((todo) => (
                todo.isEditing ? (
                    <EditTodoForm
                        editToDo={editTask}
                        task={todo}
                    />
                ) : (
                    <Todo
                        task={todo}
                        toggleComplete={toggleComplete}
                        deleteToDo={deleteToDo}
                        editToDo={editToDo}
                        onToggle={handleToggle}
                    />
                )
            ))}
        </div>
    )
}