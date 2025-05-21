import React from 'react'
import Link from 'next/link'
const config = () => {
  return (
    <div>
      <h1>Config</h1>
      <Link href="Sobre"> <mark>Sobre</mark></Link>
      <Link href="/"><mark>Pagina home</mark></Link>
      
    </div>
  )
}

export default config
