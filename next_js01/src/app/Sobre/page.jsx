import React from 'react'
import Link from 'next/link'
const SobrePage = () => {
  return (
    <div>
      <h1>Página sobre</h1>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint at minima officia aliquam quisquam deleniti quasi suscipit quam doloremque eaque.</p>

        <Link href="config">Config</Link>
      <Link href="/"><mark>Pagina home</mark></Link>
    </div>
  )
}

export default SobrePage
