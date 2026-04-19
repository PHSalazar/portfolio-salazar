# 🚀 Portfolio 2026 - Salazar

Projeto de portfólio pessoal focado em exibir minhas competências em automação, desenvolvimento de chatbots e engenharia de software.

## 📁 Estrutura de Arquivos

Abaixo, uma breve explicação da organização deste projeto:

### 📂 `.github/workflows`
* **`deploy.yml`**: O "motor" da automação. Este arquivo configura o **GitHub Actions** para realizar o build do projeto (Node 24) e o deploy automático para o GitHub Pages a cada push na branch `main`.

### 📂 `public`
* **`404.html`**: Arquivo essencial para o funcionamento do `BrowserRouter` no GitHub Pages. Ele captura rotas inexistentes no servidor e as redireciona de volta para o sistema de rotas do React.
* **`favicon.svg`**: Ícone da página, estilizado com a cor de destaque do projeto (`amber-500`).

### 📂 `src`
* **`components/`**: Contém os blocos de construção da interface.
    * `Blog/` e `Projects/`: Componentes específicos para listagem e containers dessas seções.
    * `Button.tsx` e `Navbar.tsx`: Componentes globais tipados com TypeScript.
* **`layout/`**:
    * **`Rootlayout.tsx`**: Define a estrutura mestre da aplicação, garantindo que a `Navbar` seja persistente em todas as páginas, inclusive na de erro.
* **`pages/`**: Cada arquivo representa uma rota da aplicação (`Home`, `About`, `Projects`, `Blog`).
    * **`ErrorPage.tsx`**: Página personalizada exibida quando o usuário acessa uma rota inválida.
* **`App.tsx`**: Configuração central do `createBrowserRouter` e definição da hierarquia de rotas.
* **`main.tsx`**: Ponto de entrada do React que renderiza o `App` no DOM.

### ⚙️ Arquivos de Configuração
* **`vite.config.ts`**: Configura o `base` path como `/portfolio-salazar/` para que os assets sejam carregados corretamente no subdiretório do GitHub.
* **`tsconfig.json`**: Define as regras de tipagem estrita do TypeScript que garantem a segurança do código durante o build.
* **`package.json`**: Gerencia as dependências e scripts do projeto (dev, build, lint).

## 🛠️ Tecnologias
* **React + Vite**
* **TypeScript** (Tipagem Estrita)
* **Tailwind CSS**
* **React Router Dom** (BrowserRouter)
* **GitHub Actions** (CI/CD)

## 🚀 Como Executar
1. Clone o repositório.
2. Rode `npm install`.
3. Rode `npm run dev` para desenvolvimento ou `npm run build` para gerar a versão de produção.

---
Desenvolvido com foco em automação e performance por **Pedro Henrique Salazar**.