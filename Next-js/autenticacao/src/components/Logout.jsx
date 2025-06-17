'use client'
import { signOut } from "next-auth/react"

export default function logout_button(){
    return(
        <button onClick={() => signOut({callbackUrl:"/"})}  className="bg-red-500 text-white p-3 rounded-2xl hover:bg-red-900">Logout</button>
    )
}