import React, { useState } from 'react';
import './App.css';

const mockMovies = [
  { title: 'Stranger Things', image: 'https://upload.wikimedia.org/wikipedia/pt/3/38/Stranger_Things_3.jpg' },
  { title: 'La Casa de Papel', image: 'https://upload.wikimedia.org/wikipedia/pt/8/89/La_Casa_de_Papel.jpg' },
  { title: 'The Witcher', image: 'https://upload.wikimedia.org/wikipedia/pt/9/9a/The_Witcher_2019.jpg' },
  { title: 'Breaking Bad', image: 'https://upload.wikimedia.org/wikipedia/pt/6/61/Breaking_Bad_5%C2%AA_Temporada.jpg' },
  { title: 'Bridgerton', image: 'https://upload.wikimedia.org/wikipedia/pt/6/6e/Bridgerton_2020.jpg' },
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
        <div style={{ marginTop: '32px', fontSize: '14px', color: '#aaa' }}>
          DESENVOLVIDO POR: JULIO CRUZ - RU 4703089
        </div>
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
          results.map((movie, idx) => (
            <div key={idx} className="result-item">
              <img src={movie.image} alt={movie.title} />
              <span>{movie.title}</span>
            </div>
          ))
        ) : (
          <div>Nenhum resultado encontrado.</div>
        )}
      </div>
    </div>
  );
}

export default App;