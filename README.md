# Cadastro React 📝

Um projeto de aplicação web moderna desenvolvido com **React** e **Vite**, focado em gerenciamento de cadastro de usuários com uma interface limpa e intuitiva.

## 🎯 Sobre o Projeto

Este projeto foi criado como resultado de uma aula produtiva onde aprendi os conceitos fundamentais de **React**, incluindo:

- ✅ Componentes funcionais com hooks (`useState`)
- ✅ Gerenciamento de estado
- ✅ Manipulação de eventos e formulários
- ✅ Renderização condicional de listas
- ✅ Estilização com CSS
- ✅ Deploy em GitHub Pages

## 🚀 Tecnologias Utilizadas

- **React 19.2** - Biblioteca para construção de interfaces
- **Vite 7.3** - Ferramenta de build rápida e moderna
- **CSS3** - Estilização com gradientes e design responsivo
- **JavaScript ES6+** - Sintaxe moderna
- **ESLint** - Linting e qualidade de código
- **GitHub Pages** - Deploy gratuito

## 📋 Funcionalidades

- 📝 Cadastro de usuários (nome, email, idade)
- 📂 Armazenamento em estado local
- 🎨 Componente `UserCard` para exibição de usuários
- 🌈 Interface com gradiente visual
- 📱 Design responsivo

## 🛠️ Como Instalar

### Pré-requisitos
- Node.js 16+ instalado
- npm ou yarn

### Passos

```bash
# Clone o repositório
git clone https://github.com/Bunker25Logic/CadastroReact.git

# Entre na pasta
cd CadastroReact/devclub

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

A aplicação estará disponível em `http://localhost:5173`

## 🔨 Scripts Disponíveis

```bash
# Desenvolvimento (com Hot Module Replacement)
npm run dev

# Build para produção
npm run build

# Preview da build
npm run preview

# Linting
npm run lint
```

## 📁 Estrutura do Projeto

```
devclub/
├── src/
│   ├── components/
│   │   ├── UserCard.jsx      # Componente de exibição de usuário
│   │   └── UserCard.css      # Estilos do componente
│   ├── App.jsx               # Componente principal
│   ├── App.css               # Estilos da aplicação
│   ├── main.jsx              # Entrada da aplicação
│   └── index.css             # Estilos globais
├── docs/                     # Pasta de build para GitHub Pages
├── public/                   # Arquivos estáticos
├── vite.config.js            # Configuração do Vite
└── package.json              # Dependências do projeto
```

## 🌐 Deploy

O projeto está hospedado em GitHub Pages e pode ser acessado em:

🔗 **[https://bunker25logic.github.io/CadastroReact/](https://bunker25logic.github.io/CadastroReact/)**

### Como fazer deploy

```bash
# Build para produção
npm run build

# Commit e push para GitHub
git add .
git commit -m "update: alterações do projeto"
git push
```

## 📚 Aprendizados da Aula

Durante esta aula produtiva, consolidei conhecimentos sobre:

1. **React Hooks** - Uso de `useState` para gerenciamento de estado
2. **Componentes Reutilizáveis** - Criação de componentes como `UserCard`
3. **Manipulação de Formulários** - Controlled components com React
4. **Renderização Dinâmica** - `map()` para listar usuários
5. **Estilização Global** - CSS global vs escopo de componentes
6. **Deployment** - Publicação em GitHub Pages com Vite

## 🎓 Próximos Passos

- [ ] Adicionar validação de formulário
- [ ] Integrar com backend/API
- [ ] Implementar persistência com localStorage
- [ ] Adicionar funcionalidade de editar/deletar usuários
- [ ] Melhorar design com biblioteca de componentes

## 📄 Licença

MIT - Sinta-se livre para usar este projeto!

## 👤 Autor

Desenvolvido por **Wellinton Oliveira** como resultado de aprendizado em React.

---

**Feito com ❤️ durante a aula de React**
