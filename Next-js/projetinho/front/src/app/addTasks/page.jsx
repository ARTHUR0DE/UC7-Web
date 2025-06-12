'use client'

import { useState } from "react"
import { useRouter } from "next/navigation"
import axios from 'axios'


export default function AddTaskForm() {
        const [title, setTitle] = useState('');
        const [description, setDescription] = useState('');
        const router = useRouter('')

        //criação/metodo do post

        const handleSubmit = async (e) =>{
            e.preventDefault();
            try{
                await axios.post('http://localhost:3000/tasks', {
                    title,
                    description,
                })

                setTitle('')
                setDescription('')
                router.push('/tasks')
            } catch (error) {
                console.log('Erro ao adicionar tarefa: ', error)
                alert('Erro ao adicionar tarefa, servidor fora do ar.')
            }

        }

    return(
        <div>
            <h1>Adicionar tarefa</h1>

            <form onSubmit={handleSubmit}>
                <div className="">
                    <label htmlFor="title" className="">Título da tarefa: </label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} 
                    placeholder="Digite o Título da tarefa"
                    required
                    minLength={8}/>
                </div>
                <div>
                    <label htmlFor="description">Descrição da tarefa: </label>
                    <textarea type="text" value={description} onChange={(e) => setDescription(e.target.value)} 
                    placeholder="Digite a descrição da tarefa"
                    required
                    />
                </div>
                <button type="submit">
                    Adicionar
                </button>
            </form>
        </div>
    )
}