import React from 'react'

const ToDo = ({todo,handleCheck,handleDestroy,idx}) => {
    const style = {
        textDecoration: "line-through"
    }
    return (
        <div>
            <p style={todo.isClicked ? style: null} > {todo.task}</p>
            <input type="checkbox" checked={todo.isClicked} onClick={(e) => handleCheck(idx)} readOnly/>
            <button className="btn btn-danger" onClick={(e) => handleDestroy(e,idx)} 
            disabled={todo.isClicked ? false : true}>Delete</button>
        </div>
    );
}
export default ToDo;