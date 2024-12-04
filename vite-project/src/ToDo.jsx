import { useState } from "react"

function ToDo() {
    const [toDos, setToDos] = useState(['todo1', 'todo2']);
    const [newToDo, setNewToDo] = useState('');

    const addNewToDo = (newToDo) => {
        setToDos([...toDos, newToDo]);
        setNewToDo('');
    };

    const deleteToDo = (index) => {
        setToDos(toDos.filter((_, i) => i !== index));
    }

    return (
        <>
            <ul>
                {
                    toDos.map((toDo, index) => {
                        return (
                            <>
                                <li key={index}>
                                    {toDo}
                                    <button onClick={() => deleteToDo(index)}>delete</button>
                                </li>
                            </>
                        )
                    })
                }
            </ul>
            <p>Typing: {newToDo}</p>
            <input type="text" onChange={(e) => setNewToDo(e.target.value)} value={newToDo} />
            <button onClick={() => addNewToDo(newToDo)}>add todo</button>
        </>
    )
}

export default ToDo