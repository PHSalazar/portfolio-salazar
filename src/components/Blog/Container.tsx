import { Calendar } from "lucide-react";

function Container() {
    const blogPosts = [
        {
            title: "Destaque na Digitalbot: Recebendo o prêmio DEV Chatbot",
            thumb: "https://picsum.photos/400/250?random=11",
            date: "15/03/2026",
            description: "Um resumo da experiência e dos desafios que me levaram ao reconhecimento como destaque na empresa."
        },
        {
            title: "Dominando Sistemas Digitais: Flip-Flops e Portas Lógicas",
            thumb: "https://picsum.photos/400/250?random=12",
            date: "02/04/2026",
            description: "Como venci a prova de Sistemas Digitais e o que aprendi sobre a base do processamento de dados."
        },
        {
            title: "Linux Mint vs Ubuntu: Qual a melhor escolha para Devs?",
            thumb: "https://picsum.photos/400/250?random=13",
            date: "28/03/2026",
            description: "Minha análise após formatar o computador e configurar um ambiente produtivo focado em automação."
        },
        {
            title: "Integrando Gemini AI em Planilhas do Google",
            thumb: "https://picsum.photos/400/250?random=14",
            date: "10/04/2026",
            description: "Bastidores da criação do Organizador-Financas-Salazar e o uso de IA para categorização de gastos."
        },
        {
            title: "Slow EnglishAI: Criando ferramentas para o meu aprendizado",
            thumb: "https://picsum.photos/400/250?random=15",
            date: "05/04/2026",
            description: "Como usei React e APIs de voz para acelerar minha fluência no inglês de forma personalizada."
        },
        {
            title: "Automação com Puppeteer: O robô de votação",
            thumb: "https://picsum.photos/400/250?random=16",
            date: "20/02/2026",
            description: "Desafios técnicos para contornar captchas e automatizar interações em larga escala na web."
        },
        {
            title: "Kubernetes no Desktop: Testando containers localmente",
            thumb: "https://picsum.photos/400/250?random=17",
            date: "18/04/2026",
            description: "Minhas primeiras impressões e dificuldades ao subir um cluster para estudo de sistemas distribuídos."
        },
        {
            title: "Configurando Systemd para Scripts de Brilho",
            thumb: "https://picsum.photos/400/250?random=18",
            date: "12/03/2026",
            description: "Um guia rápido de como criar serviços no Linux para automatizar tarefas repetitivas de hardware."
        }
    ];

    return (
        <div className="flex flex-col items-center justify-center gap-5">
            {blogPosts.map(({ title, thumb, date, description }) => (
                <div className="flex flex-col sm:flex-row flex-nowrap gap-2 pb-5 border-0 border-b-1 border-b-slate-400">
                    <div>
                        <img src={thumb} />
                    </div>
                    <div>
                        <h1 className="font-extrabold text-xl">{title}</h1>
                        <p className="text-xs flex flex-row items-center gap-1 text-slate-400"><Calendar size={13} /> {date}</p>
                        <p className="text-md mt-2">{description}</p>
                    </div>
                </div>
            ))}
            <p className="text-center mt-5 text-slate-400">Fim do Blog</p>
        </div>
    )
}

export default Container