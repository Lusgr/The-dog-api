import {React, useState } from "react";

const ToDos = () =>{
    const [toDos, setToDos] = useState([])
    const [text, setText] = useState("")

    const addToDo = (e) => {
        e.preventDefault();
        setToDos([
            ...toDos, 
            {
                id:Math.random(),
                name:text,
                isDone:false,
            }
        ])
    }
    return(
        <div>
            <form type="submit" onClick={addToDo}>
                <input value={text} onChange={(e) => setText(e.target.value)} />
                <button type="submit">add</button>
                <ul>
                {toDos.map(
                    toDo => 
                    <li key={toDo.id}>
                    <input value={toDo.isDone} type="checkbox"/>
                    <span>{toDo.name}</span>
                    </li>
                )}
                </ul>

            </form>
        </div>
    )
}
export default ToDos