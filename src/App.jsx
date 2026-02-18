import "./App.css";
import { useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [age, setIdade] = useState("");
  const [users, setUsers] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();
    const newUser = {
      id: Date.now(),
      nome,
      email,
      age,
    };
    setUsers([...users, newUser]);
  }

  return (
    <div className="app">
      <h1>Cadastro de Usuarios</h1>
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
