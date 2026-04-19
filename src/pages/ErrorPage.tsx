import { Smile } from "lucide-react"
import { Link } from "react-router-dom"
import Button from "../components/Button"

function ErrorPage() {
    return (
        <div className="h-full flex flex-col gap-5 items-center justify-center">
            <h1 className="text-5xl text-slate-500">Página não encontrada :(</h1>
            <div className="flex flex-col items-start">
                <p>Poxa, essa página não foi encontrada!</p>
                <p className="flex gap-2 items-center inline-block">Mas eu posso ser encontrado no <Link to="https://www.linkedin.com/in/pedro-henrique-salazar/" className="text-amber-500">LinkedIn.</Link></p><Smile size={19} />

                <div className="flex items-center justify-center mt-5">
                    <Link to="/projects">
                        <Button type="button">
                            Ver Projetos
                        </Button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage