import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div>
      <header>
        <nav className='flex bg-blue-950 text-white gap-4 p-5'>
            <Link href='/'>Início</Link>
            <Link href='/tasks'>Tarefas</Link>
            <Link href='/addTasks'>Nova Tarefa</Link>
            
        </nav>
      </header>
    </div>
  )
}

export default Header