'use client'

import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { userAgent } from 'next/server';

export default function EditTaskPage() {
    const [tasks, setTasks] = useState([]);
    const [selectedTaskId, setSelectedTaskId] = useState('')
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [loading, setLoading] = useState(false)
    const router = useRouter();

    useEffect(() => {
        async function fetchTasks() {
            setLoading(true);

            try {
                const res = await fetch('http://localhost:3000/tasks');
                const data = await res.json();
                setTasks(data);

            } catch (erro) {
                alert.show('Erro ao buscar tarefa')
            }
            setLoading(false);
        }
        fetchTasks();
    }, []);

    useEffect(() => {
        if (selectedTaskId) {
            const task = tasks.find(t => t.id === selectedTaskId)
            if (task) {
                setTitle(task.title)
                setDescription(task.description)
            }
            else {
                setTitle('')
                setDescription('')
            }

        }
    }, [selectedTaskId, tasks])


    async function handleSubmit(e) {
        e.preventDefault();
        if (!selectedTaskId) return;
        try {
            await fetch(`http://localhost:3000/tasks/${selectedTaskId}`, {
                method: "PUT",
                headers: {
                    "content-Type": "application/json",
                    body: JSON.stringify({ title, description }),
                }
            });
            alert('Tarefa atualizada com sucesso!')
            router.push('/tasks')
        } catch {
            alert('Erro ao atualizar a tarefa')
        }
    }
    return (
        <div>
            <h1>Editando tarefa</h1>

            {loading ? (
                <div>Carregando Tarefas...</div>
            ) :
                <>
                    <div>
                        <label htmlFor="task">Selecione uma tarefa: </label>
                        <select value={selectedTaskId} onChange={e => setSelectedTaskId(e.target.value)}>
                            <option value="">selecione...</option>
                            {tasks.map(task => (
                                <option key={task.id} value={task.id}>
                                    {task.title}
                                </option>
                            ))}
                        </select>
                    </div>
                    <form onSubmit={handleSubmit} className='bg-gray-700'>
                        <div className='bg-gray-700'>
                            <label htmlFor="title">
                                Título
                            </label>
                            <input type="text" value={title} id='title' placeholder='Título' required onChange={e => setTitle(e.target.value)} disabled={!selectedTaskId} />
                        </div>
                        <div>
                            <label htmlFor="description">]
                                Descrição
                            </label>
                            <textarea value={description} id='description' onChange={e => setDescription(e.target.value)} disabled={!selectedTaskId} placeholder='Adicionar descrição' required cols='30' rows="2"></textarea>
                        </div>
                        <button type="submit" disabled={!selectedTaskId} className='bg-red-500 text-white'>
                            Salvar Alterações
                        </button>
                    </form>


                </>
            }
        </div>
    )
}