

export default function CoursesLayout({children}){
    return (
        <section className="font-mono">

            <nav>
                <h1 className="bg-blue-950 text-amber-50 p-8">Meus Cursos</h1>
            </nav>
            <div className="bg-blue-900 p-10 text-amber-50 text-center"> {children} </div>
            
        </section>
    )
}