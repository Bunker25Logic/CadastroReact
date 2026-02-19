import "./App.css";
import { useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [age, setIdade] = useState("");
  const [users, setUsers] = useState([]);
  const [mensagem, setMensagem] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    
    // Verificar se o email já existe
    const usuarioExistente = users.some((user) => user.email === email);
    
    if (usuarioExistente) {
      setMensagem("⚠️ Usuário já cadastrado!");
      setTimeout(() => setMensagem(""), 3000); // Remove mensagem após 3 segundos
      return;
    }
    
    const newUser = {
      id: Date.now(),
      nome,
      email,
      age,
    };
    setUsers([...users, newUser]);
    setMensagem("✅ Usuário cadastrado com sucesso!");
    setTimeout(() => setMensagem(""), 3000);
    
    // Limpar formulário
    setNome("");
    setEmail("");
    setIdade("");
  }

  return (
    <div className="app">
      <h1>Cadastro de Usuarios</h1>
      {mensagem && <p className="mensagem">{mensagem}</p>}
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Nome"
          type="text"
          value={nome}
          onChange={(event) => setNome(event.target.value)}
        />

        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />

        <input
          placeholder="Idade"
          type="number"
          value={age}
          onChange={(event) => setIdade(event.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      <div className="user-list">
        {users.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
}

export default App;
