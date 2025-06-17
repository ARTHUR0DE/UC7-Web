import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route"
import Logout from "@/components/Logout"


export default async function dashboard() {
    const session = await getServerSession(authOptions)

    if(!session) {
        return(
            <div>
                VOCÊ NÃO ESTÁ LOGADO
            </div>
        )
    }

    return(
        <div>
            <div>
                Olá, {session?.user?.name}
            </div>
            <p>Esta página do dashboard</p>

            <div>
                <Logout/>
            </div>
        </div>
    )

}