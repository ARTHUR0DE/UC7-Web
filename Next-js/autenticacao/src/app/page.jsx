"use client"
import {signIn} from "next-auth"

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main>
       
        <h1>Trabalhando com autenticação</h1>

          <div className="mt-3.5">
            <button type="submit" className="bg-blue-600 rounded-2xl text-white p-3 hover:bg-blue-950 cursor-pointer" onClick={() => signIn("github", {callbackUrl: "/dashboard"})}>Entra com GitHub</button>
          </div>
      </main>
    </div>
  );
}
