import React from 'react'
import Link from 'next/link'

const PostPage = ({params}) => {
  return (
    <div className='p-8'>
      <h1 className="text-center border border-red-900 text-red-600 bg-amber-950 rounded-b-xl text-xl p-5 m-10">PostPage</h1>
      <p className='text-red-600 text-2x1'>Post Id: {params.id}</p>
    </div>
  )
}

export default PostPage
