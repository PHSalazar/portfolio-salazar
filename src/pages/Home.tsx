
import { GraduationCap, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import imageProfile from '../assets/foto.png';
import Button from '../components/Button';

function Home() {
    return (
        <div className='flex flex-col-reverse sm:grid sm:grid-cols-2 h-full gap-2.5 items-center flex-1'>
            <div className='text-justify'>
                <h1 className='text-2xl font-extrabold'>Pedro Henrique Salazar</h1>
                <h2 className='flex flex-wrap sm:gap-5 mb-3'>
                    <span className='flex items-center text-sm text-slate-400 gap-1'><MapPin size={14} />Rio de Janeiro, Brasil.</span>
                    <span className='flex items-center text-sm text-slate-400 gap-1'><GraduationCap size={14} />Ciência da Computação.</span>
                </h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates laudantium distinctio odio debitis dolorem sit.</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, omnis dolorum.</p>

                <div className='flex flex-row gap-2 justify-around sm:justify-center sm:gap-7 p-4'>
                    <div id="socials" className='flex gap-2 items-center'>
                        <Link to="https://github.com/PHSalazar" target='_blank' title='Ir para o meu Gihub'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-400 hover:text-[#fe9a00] transition-colors duration-300 cursor-pointer">
                                <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                                <path d="M9 18c-4.51 2-5-2-7-2" />
                            </svg>
                        </Link>

                        <Link to="https://br.linkedin.com/in/pedro-henrique-salazar" target='_blank' title='Me acompanhe no LinkedIn'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke='currentColor' className='text-gray-400 hover:text-amber-500 cursor-pointer'>
                                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                            </svg>
                        </Link>
                    </div>

                    <Link to="projects">
                        <Button type="button">
                            Ver Projetos
                        </Button>
                    </Link>
                </div>
            </div>
            <div><img src={imageProfile} alt="Foto Perfil Pedro Henrique Salazar" /></div>
        </div>
    )
}

export default Home