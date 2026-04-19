
function Container() {
    const projects = [
        {
            title: "Organizador de Finanças Salazar",
            description: "Sistema de gestão financeira pessoal com integração ao Google Sheets e IA.",
            thumb: "https://picsum.photos/180/80?random=1",
            skills: ["ReactJS", "Google Sheets API", "Gemini AI"]
        },
        {
            title: "Slow EnglishAI",
            description: "Plataforma para estudantes de inglês com geração de áudio lento e transcrições.",
            thumb: "https://picsum.photos/180/80?random=2",
            skills: ["Vite", "Python", "Web Audio API"]
        },
        {
            title: "Bot de Automação Digitalbot",
            description: "Fluxos de atendimento inteligente para chatbots escaláveis.",
            thumb: "https://picsum.photos/180/80?random=3",
            skills: ["Node.js", "WhatsApp API", "JavaScript"]
        },
        {
            title: "Linux Customizer Script",
            description: "Scripts em Bash para automação de UI e serviços systemd no Linux Mint.",
            thumb: "https://picsum.photos/180/80?random=4",
            skills: ["Bash", "Shell Script", "Systemd"]
        },
        {
            title: "Tinder de Screenshots",
            description: "Aplicativo mobile em Kotlin para organizar capturas de tela com gestos.",
            thumb: "https://picsum.photos/180/80?random=5",
            skills: ["Kotlin", "Android SDK", "Room Database"]
        },
        {
            title: "Dashboard de Faturamento",
            description: "Interface para controle de notas e pagamentos de serviços prestados.",
            thumb: "https://picsum.photos/180/80?random=6",
            skills: ["React", "Tailwind CSS", "TypeScript"]
        },
        {
            title: "Simulador de Portas Lógicas",
            description: "Ferramenta educacional para visualização de sistemas digitais e flip-flops.",
            thumb: "https://picsum.photos/180/80?random=7",
            skills: ["HTML5 Canvas", "JavaScript", "Logic Gates"]
        },
        {
            title: "Bot de Votação Automatizado",
            description: "Script de automação para participação em votações de reality shows.",
            thumb: "https://picsum.photos/180/80?random=8",
            skills: ["Puppeteer", "Node.js", "Python"]
        }
    ];

    const tagProject = (title) => <span className="text-xs bg-amber-500 text-white p-0.5 px-2 rounded-full whitespace-nowrap">{title}</span>

    return (
        <>
            <div className="flex flex-wrap gap-5 justify-center sm:justify-start">
                {
                    projects.map(({ title, description, thumb, skills }) => (
                        <div className="w-[200px] bg-slate-600 flex flex-col items-center rounded-lg shadow-gray-800 shadow-sm hover:scale-105 transition-all duration-200">
                            <img src={thumb} width="100%" className="bg-gray-100" />
                            <div className="p-2">
                                <p className="font-extrabold">{title}</p>
                                <p className="flex flex-wrap gap-2">{skills.map(title => tagProject(title))}</p>
                                <p className="mt-2 text-sm">{description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <p className="text-center mt-5 text-slate-400">Fim dos projetos</p>
        </>
    )
}

export default Container