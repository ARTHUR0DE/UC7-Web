import Link from "next/link"

const PageLayout = ({children}) => {
  return (
    <div>
    <div>
        {children}
    </div>

    <Link className="text-red-600" href="/perfil/configuracao"> Atualizar Dados </Link>
    </div>
  )
}

export default PageLayout
