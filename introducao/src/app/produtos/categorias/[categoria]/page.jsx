import React from 'react'
import Link from 'next/link'

const CategoryPage = () => {
  return (
    <div>
      <h1 className="text-center border border-red-900 text-red-600 bg-amber-950 rounded-b-xl text-4xl p-5 m-10">Conheça nossos produtos!</h1>

      <div className="text-right border border-red-900 text-red-600 bg-amber-950 rounded-xl text-xl p-5">
        <Link href="/produtos/categorias/eletronicos/computador_acer_i7">Computadores</Link>
        </div>
    </div>
  )
}

export default CategoryPage
