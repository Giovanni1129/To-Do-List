import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
import ToDo from './components/ToDo';

function App() {
  const [todos, setTodos] = useState([]);
  const [form,setForm] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let todo = {
      task: form,
      isClicked: false
    }
    setTodos(oldTodos => [...oldTodos, todo]);
    setForm("");
  }

  const handleCheck = (idx) => {
    let todo = todos[idx];
    todo.isClicked = !todo.isClicked;
    setTodos(oldTodos => [...oldTodos]);
  }

  const handleDestroy = (e,idx) => {
    e.preventDefault();
    setTodos([...todos.slice(0,idx),...todos.slice(idx+1)]);
  }

  return (
    <div className="App">
      <div>
        {
          todos.map((todo,idx) => {
            return <ToDo key={idx} todo={todo} idx={idx} handleCheck={handleCheck} handleDestroy={handleDestroy}/>
          })
        }
      </div>
      <form className="col-5 mx-auto" onSubmit={(e) => handleSubmit(e)}>
        <div className="form-group">
          <label>To Do List</label>
          <input className="form-control" type="text" value={form} onChange={(e) => setForm(e.target.value)}/>
        </div>
        <input type="submit" value="Add ToDo" className="btn btn-danger"></input>
      </form>
    </div>
  );
}

export default App;
