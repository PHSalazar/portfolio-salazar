import { Newspaper, Rss } from "lucide-react"
import Container from "../components/Blog/Container"

function Blog() {
    return (
        <div className="">
            <h1 className="text-4xl flex flex-nowrap items-center gap-4 text-slate-400 font-extralight"> <Newspaper className="text-slate-400" />Blog</h1>

            <p className="font-light">Meu <i>log</i> pessoal sobre tecnologia, código e desafios técnicos.</p>

            <div className="mt-5 flex flex-nowrap items-center gap-2">
                <div className="h-px flex-1 bg-slate-600"></div>
                <Rss className="text-slate-600" />
                <div className="h-px flex-1 bg-slate-600"></div>
            </div>

            <div id="wrapper-news" className="pt-5">
                <Container />
            </div>
        </div>
    )
}

export default Blog