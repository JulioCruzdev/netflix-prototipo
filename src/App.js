import React, { useState } from 'react';
import './App.css';

const mockMovies = [
  { title: 'Stranger Things' },
  { title: 'La Casa de Papel' },
  { title: 'The Witcher' },
  { title: 'Breaking Bad' },
  { title: 'Bridgerton' },
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(mockMovies);

  const handleLogin = (e) => {
    e.preventDefault();
    if (email) setLoggedIn(true);
  };

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    setResults(
      mockMovies.filter((movie) =>
        movie.title.toLowerCase().includes(value.toLowerCase())
      )
    );
  };

  if (!loggedIn) {
    return (
      <div className="login-container">
        <h2>Login</h2>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Digite seu e-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    );
  }

  return (
    <div className="app-container">
      <h2>Bem-vindo, {email}!</h2>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Buscar filmes ou séries..."
          value={search}
          onChange={handleSearch}
        />
      </div>
      <div className="results">
        {results.length > 0 ? (
          results.map((movie, idx) => <div key={idx}>{movie.title}</div>)
        ) : (
          <div>Nenhum resultado encontrado.</div>
        )}
      </div>
    </div>
  );
}

export default App;