'use client';
import react, {useEffect, useState} from "react";
import { IoTrash } from "react-icons/io5";

//função ou metedo para exibir ou realizar o get do beckend

export default function TasksPage() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch("http://localhost:3000/tasks")
            .then((res) => res.json())
            .then((data) => {
                setTasks(data);
                setLoading(false);
            })
            .catch(() => setLoading((false)))
    }, []);

    //função deletar
    const handleDelete = async (id) => {
        if(!confirm("Deseja excluir essa tarefa?")) return;
        await fetch(`http://localhost:3000/tasks/${id}`, {method: 'DELETE'});
        setTasks(tasks.filter((task) => task.id !== id));
    }



    if (loading) return <div className= "text-center"> Carregando Tarefas...</div>

    return(
    <div>
    <h1>Lista de Tarefas</h1>    
    

    {tasks.length === 0 ?(
        <div>Nenhuma tarefa encontrada.</div>
    ) : (
        <ul> 
            {tasks.map((task) => 
                <li key={task.id}>

                    <div>{task.title}</div>
                    <div>{task.description}</div>
                    <div>
                        <button className="text-red-600 cursor-pointer" onClick={() => handleDelete(task.id)}>
                        <IoTrash />
                        </button>
                    </div>
                </li>
            )}
        </ul>
    )}
    </div>
    )
}


