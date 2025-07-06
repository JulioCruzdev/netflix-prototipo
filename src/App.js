import React, { useState } from 'react';
import './App.css';

const mockMovies = [
  {
    title: 'Stranger Things',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/pi8WsJtGKxuJHdp0m1W2wq7IvxW.jpg',
    description: 'Um grupo de crianças enfrenta eventos sobrenaturais em sua pequena cidade nos anos 80.'
  },
  {
    title: 'La Casa de Papel',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/kIjuNTP6qYKsw0uRKc7EoBqFYbU.jpg',
    description: 'Um grupo de assaltantes realiza o maior roubo da história na Casa da Moeda da Espanha.'
  },
  {
    title: 'The Witcher',
    image: 'https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg',
    description: 'Geralt de Rívia, um caçador de monstros, luta para encontrar seu lugar em um mundo cheio de feras e magia.'
  },
  {
    title: 'Breaking Bad',
    image: 'https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg',
    description: 'Um professor de química do ensino médio começa a fabricar metanfetamina após ser diagnosticado com câncer.'
  },
  {
    title: 'Bridgerton',
    image: 'https://www.themoviedb.org/t/p/w500/9zcbqSxdsRMZWHYtyCd1nXPr2xq.jpg',
    description: 'Uma família aristocrática navega pelos altos e baixos da sociedade londrina durante o período Regencial.'
  }
];

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [search, setSearch] = useState('');
  const [results, setResults] = useState(mockMovies);
  const [selectedMovie, setSelectedMovie] = useState(null);

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
            <div
              key={idx}
              className="result-item"
              onClick={() => setSelectedMovie(movie)}
              style={{ cursor: 'pointer' }}
            >
              <img src={movie.image} alt={movie.title} />
              <span>{movie.title}</span>
            </div>
          ))
        ) : (
          <div>Nenhum resultado encontrado.</div>
        )}
      </div>

      {selectedMovie && (
        <div className="modal-overlay" onClick={() => setSelectedMovie(null)}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <img src={selectedMovie.image} alt={selectedMovie.title} style={{ width: '120px', borderRadius: '8px' }} />
            <h3>{selectedMovie.title}</h3>
            <p>{selectedMovie.description}</p>
            <button onClick={() => setSelectedMovie(null)}>Fechar</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;