import Link from "next/link";

const courseList = ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express', 'Next.js', 'HTTP/HTTPS'];

export default function CoursesPage(){
    return (
        <div>
            <h1 className="mb-5">Lista de Cursos</h1>
            <ul>
                {courseList.map(course => (
                    <li key={course}>
                        <Link href={`/courses/${course}`}> {course} </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}