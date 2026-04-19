import { MousePointer2 } from "lucide-react";
import { NavLink } from "react-router-dom";

function Navbar() {

    const baseStyles = "relative pl-3 before:left-0 before:content-[''] before:absolute  before:rounded-full before:top-1/3 after:transition-all";

    const activeClass = ({ isActive }: { isActive: boolean }) => `${baseStyles} after:content-[''] after:absolute
        ${isActive ?
            "before:bg-amber-500 text-amber-500 before:w-1 before:h-1 after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-amber-500" :
            "hover:text-white before:bg-transparent text-gray-400 before:w-0 before:h-0 hover:text-gray-200 after:w-0"}
        after:transition-all after:duration-400`;

    return (
        <nav
            className="fixed bg-slate-900 text-gray-200 p-2 px-5 top-3 left-4 right-4 rounded-full shadow-sm shadow-slate-900 flex flex-nowrap items-center justify-between z-50"
        >
            <ul className="flex flex-nowrap gap-5 text-sm">
                <li>
                    <NavLink to="/" className={activeClass}>Início</NavLink>
                </li>
                <li>
                    <NavLink to="projects" className={activeClass}>Projetos</NavLink>
                </li>
                <li>
                    <NavLink to="blog" className={activeClass}>Blog</NavLink>
                </li>

                {/*<li>
                    <NavLink to="about" className={activeClass}>Sobre</NavLink>
                </li>*/}

            </ul>

            <div className="bg-amber-500 p-2 rounded-full">
                <MousePointer2 size={16} className="text-white" />
            </div>

        </nav>
    )
}

export default Navbar