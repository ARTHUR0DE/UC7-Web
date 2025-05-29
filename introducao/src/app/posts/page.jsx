import React from 'react'
import Link from 'next/link';

const PostsPage = () => {

    const postsIds = [1, 2, 3];
    // Em caso real, esses dados viriam de uma API ou de um Banco de Dados;

  return (
    <div>

      <h1 className="text-center border border-red-900 text-red-600 bg-amber-950 rounded-b-xl text-4xl p-5 m-10">Página de Posts</h1>

      <ul >
        {postsIds.map((id) => (
            
            <li className="text-center border border-red-900 text-red-600 bg-amber-950 rounded-xl text-xl p-5 m-10" key={id}> {/* key ajuda o React a atualizar a lista de forma eficiente sempre a página é renderizada*/}
                
                <Link href={`/posts/${id}`}>Ver os posts {id} </Link>

            </li>
        ))}
      </ul>
    </div>
  )
}

export default PostsPage
