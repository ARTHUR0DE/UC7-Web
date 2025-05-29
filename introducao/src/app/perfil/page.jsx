import React from 'react'

const PerfilPage = () => {
  return (
    <div>
      <h1 className='text-amber-300 text-center text-4xl mt-7'>Página do perfil do usuário</h1>

      <div className='bg-white border-amber-300 rounded-2xl p-8 w-80 text-black '>
        <h2>Dados do Usuário</h2>
        <ul>
            <li>Nome: Arthur</li>
            <li>Idade: 18 anos</li>
            <li>Profissão: Auxiliar Administrativo</li>
        </ul>
      </div>
    </div>
  )
}

export default PerfilPage
