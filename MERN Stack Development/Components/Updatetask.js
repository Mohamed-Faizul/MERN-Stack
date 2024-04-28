import './Updatetask.css';
import React, { useState } from 'react';
import axios from 'axios';

function Updatetask(props){
    const [task,setTask] = useState(props.task.todo)
    const updateTask = () => {
        if (task.trim() === '' || props.task.todo === task){
            props.removePopup()
        } else {
            axios.put(`http://localhost:8000/api/tasks/${props.task._id}`,{
                _id : props.task._id,
                todo : task,
                isComplete : props.task.isComplete
            }).then(res => {
                props.removePopup()
                props.updateTask(res.data)
            }).catch(err => console.log(err))
        }
    }
    return(
        <div className='popup'>
           <div className='popup-content'>
            <input type='text' placeholder='Update task ...'  value ={task} 
            onChange={event => setTask(event.target.value)} />
            <button onClick={() => updateTask()}>update</button>
           </div>

        </div>
    )
}

export default Updatetask;