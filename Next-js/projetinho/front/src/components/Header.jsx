import Link from "next/link";
    

import React from 'react'

const Header = () => {
  return (
    <div>
        <header>
            <nav className="flex bg-blue-950 text-amber">
                <Link href='/'>Inicio</Link>
                <Link href='/tasks'>Tarefas</Link>
            </nav>
        </header>
    </div>
  )
}

export default Header
