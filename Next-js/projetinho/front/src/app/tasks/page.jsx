'use client';

import react, { useEffect, useState } from "react";
import { BsTrash2 } from "react-icons/bs";

// Função ou método para exibir ou realizar o get do backend

export default function TasksPage() {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
    fetch("http://localhost:3000/tasks")
        .then((res) => res.json())
        .then((data) => {
            setTasks(data);
            setLoading(false);
        })
        .catch(() => setLoading(false));
    }, []); // jogar isso no chatgpt pra explicar

        const handleDelete = async (id) => {
            if (!confirm("Deseja excluir essa tarefa?")) return;
            await fetch(`http://localhost:3000/tasks/${id}`, {method: 'DELETE'});
            setTasks(tasks.filter((task) => task.id !== id))
        } // ver sobre fetch e axios

    if (loading) return <div className="text-center">Carregando Tarefas...</div>

    // Exibindo a Lista de Tarefas do banco
    return(
        <div className="mt-25 flex flex-col items-center min-h-screen font-mono">
            <h1 className=" m-2 text-cyan-950 text-5xl">Lista de Tarefas</h1>

            {tasks.length === 0 ?(
            <div className="text-red-400 mt-9">Nenhuma tarefa encontrada.</div>
             ) : (
            <ul className="mt-8 flex">
                {tasks.map((task) => // ver sobre map
                    <li className="border rounded border-gray mx-2 mb-3 p-9" key={task.id}>
                        <div>{task.title}</div>
                        <div>{task.description}</div>
                        <div>
                            <button className="text-red-600 cursor-pointer" onClick={() => handleDelete(task.id)}>
                            <BsTrash2 />
                            </button>
                        </div>
                    </li>
                )}
            </ul>
        )}

        </div>
    )
}
