import React, {useState, useEffect} from "react";
import { v4 as uuidv4 } from 'uuid';

const TASKS_STORAGE_KEY = 'TASKS_STORAGE_KEY';

const storeTasks = (taskMap) => {
    localStorage.setItem(TASKS_STORAGE_KEY,JSON.stringify(taskMap))
}

const readStoredTasks = () => {
    const tasksMap = JSON.parse(localStorage.getItem(TASKS_STORAGE_KEY));
    return tasksMap ? tasksMap : {tasks: [], completedTasks: []};
}

function Tasks(){
    const [taskText, setTaskText] = useState('');
    const storedTasks = readStoredTasks();
    const [tasks, setTasks] = useState(storedTasks.tasks);
    const [completedTasks, setCompletedTasks] = useState(storedTasks.completedTasks);

    useEffect(() => {
        storeTasks({tasks, completedTasks});
    })
    const updateTaskText = event => {
        setTaskText(event.target.value);
    }

    const addTask = event => {
        setTasks([...tasks, {taskText, id: uuidv4()}]);
    }

    const completeTask = completedTask => () => {
        setCompletedTasks([...completedTasks, completedTask]);
        setTasks(tasks.filter(task => task.id !== completedTask.id));
    }
    const deleteTask = deleteTask => () => {
        setCompletedTasks(completedTasks.filter(task => task.id !== deleteTask.id));
    }

    return (
        <div>
            <h3>Tasks</h3>
            <div className='form'>
                <input value={taskText} onChange={updateTaskText} />
                <button onClick={addTask}>Add task</button>
            </div>
            <div className='task-list'>
                {
                    tasks.map(task => {
                        return (<div key={task.id} onClick={completeTask(task)}>
                            {task.taskText}
                        </div>)
                    })
                }
            </div>
            <div className='completed-list'>
                {
                    completedTasks.map(task => {
                        return (<div key={task.id}>
                            {task.taskText} 
                            <span onClick={deleteTask(task)} className='delete-task'> x</span>
                        </div>)
                    })
                }
            </div>
        </div>
    )
}

export default Tasks;