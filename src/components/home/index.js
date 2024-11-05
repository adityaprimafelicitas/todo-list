import React, { useEffect, useState } from 'react'
import './style.css'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { db } from '../../firebase';
import moment from 'moment';

const Home = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState("");
    const [date, setDate] = useState("8");
  
    const handleAddTask = async () => {
      try {
        await addDoc(collection(db, "task"), {
          task: task,
          date: moment().format('DD-MM-YYYY'),
          completed: false
        });
        console.log("Task added successfully!");
        setTask('')
        fetchTasks();
      } catch (e) {
        console.error("Error adding task: ", e);
      }
    };

    useEffect(() => {
     
  
      fetchTasks();
    }, []);

    const handleDeleteTask = async (id) => {
        try {
          await deleteDoc(doc(db, "task", id)); // Delete the task by its document ID
          console.log("Task deleted successfully!");
          fetchTasks(); // Refresh the task list
        } catch (e) {
          console.error("Error deleting task: ", e);
        }
      };
      const handleCompleteTask = async (id) => {
        try {
          const taskRef = doc(db, "task", id); // Get a reference to the task document
          await updateDoc(taskRef, { completed: true }); // Update the completed status to true
          console.log("Task marked as completed successfully!");
          fetchTasks(); // Refresh the task list
        } catch (e) {
          console.error("Error updating task: ", e);
        }
    };
    const fetchTasks = async () => {
        const taskCollection = collection(db, "task");
        const taskSnapshot = await getDocs(taskCollection);
        const taskList = taskSnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setTasks(taskList);
      };
  
    console.log(tasks,'taskstasks');
  return (
    <div>
        <div className='home-cont'>
        <input type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)} className='home-input' placeholder='Add task' />
        <div onClick={handleAddTask} className='home-button'>
            Add
        </div>
    </div>
    <div className='maincontainer'>{tasks?.map((item, index)=>(
        <div className='list' style={{ backgroundColor: item.completed ? 'lightgreen' : 'lightcoral' }}>
            <div>{item?.task}</div>
            <div className='buttonContainer'>
                <div className="click" onClick={() => handleCompleteTask(item.id)}>{item.completed ? 'Completed' : 'Complete'}</div>
                <div className="click"onClick={() => handleDeleteTask(item.id)}>delete</div>
            </div>
           
        </div>
    ))}</div>
    </div>
  )
}

export default Home