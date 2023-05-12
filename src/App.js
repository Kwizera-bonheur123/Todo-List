import './App.css';
import { useState } from 'react';
import uuid from 'react-uuid';
import Overview from './Overview';
function App() {
  const [task, setTask] = useState();
  const [tasks, setTasks] = useState([]);
  const [edit, setEdit] = useState(-1);
  const handleSubmit = (e) => {
    e.preventDefault();
    setTasks([...tasks, { id: uuid(), title: task }]);
    setTask("")
  }
  return (
    <div className='todo'>
      <div className='sub'>
        <h2>Todo-list</h2>
        <form onSubmit={handleSubmit}>
          < input type='text' id='text' value={task} onChange={(e) => setTask(e.target.value)} placeholder='Task to do...'></input>
          <input type='submit' id='send' value='SEND'></input>
        </form>
        <Overview tasks={tasks} setTasks={setTasks} edit={edit} setEdit={setEdit} />
      </div>
    </div>
  );
}

export default App;
