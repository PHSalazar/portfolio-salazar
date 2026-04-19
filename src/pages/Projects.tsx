import { FolderDot, LaptopMinimalCheck } from "lucide-react"
import { Link } from "react-router-dom"
import Container from "../components/Projects/Container"

function Projects() {
    return (
        <div className="">
            <h1 className="text-4xl flex flex-nowrap items-center gap-4 text-slate-400 font-extralight"> <FolderDot className="text-slate-400" />Projetos</h1>

            <p className="font-light">Estes são apenas os destaques. Confira meu histórico completo de commits e repositórios no <Link to="https://github.com/PHSalazar" target="_blank" className="text-amber-500 underline">GitHub</Link>!</p>

            <div className="mt-5 flex flex-nowrap items-center gap-2">
                <div className="h-px flex-1 bg-slate-600"></div>
                <LaptopMinimalCheck className="text-slate-600" />
                <div className="h-px flex-1 bg-slate-600"></div>
            </div>

            <div id="wrapper-projects" className="pt-5">
                <Container />
            </div>
        </div>
    )
}

export default Projects