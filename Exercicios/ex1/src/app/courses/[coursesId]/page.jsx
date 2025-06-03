'use client'

import Link from "next/link";
import { useParams } from "next/navigation";



export default function CourseDetails(){
    const params = useParams();
    const courseId = params.coursesId;

    return(
        <div>
            <h1> Curso: {courseId} </h1>
            <p> Detalhes sobre o curso {courseId} </p>
        
            <Link href={`/courses/${courseId}/modules}`}> 
            <div className=" mt-8 ">
           <Link href={`/courses/${courseId}/modules`}> <span className="bg-amber-50 p-3 text-blue-950 w-20 rounded-full hover:bg-yellow-300 hover:text-blue-950 transition-colors shadow-2xl">Ver módulos do curso</span> </Link>
            </div>
            </Link>
        </div>
    )
}