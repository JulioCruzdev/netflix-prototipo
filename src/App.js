import React, { useState } from 'react';
import './App.css';

const mockMovies = [
  { title: 'Stranger Things', image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/pi8WsJtGKxuJHdp0m1W2wq7IvxW.jpg' },
  { title: 'La Casa de Papel', image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/kIjuNTP6qYKsw0uRKc7EoBqFYbU.jpg' },
  { title: 'The Witcher', image: 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg' },
  { title: 'Breaking Bad', image: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg' },
  { title: 'Bridgerton', image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/olviL1bDh3UjK3Bao8Y7ypPqE7k.jpg' }
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