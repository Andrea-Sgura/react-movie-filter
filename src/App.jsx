import { useState, useEffect } from 'react'

const listMovies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {
  const [filteredMovies, setFilteredMovies] = useState(listMovies);
  const [genre, setGenre] = useState("");

  useEffect(() => {
    if (genre !== ``) {
      const selectedMovies = listMovies.filter(movie => movie.genre === genre);
      setFilteredMovies(selectedMovies);
    }
    else {
      setFilteredMovies(listMovies);
    }
  }, [genre]);

  return (
    <>
      <div className="container">
        <div className="row gy-4">
          <div className="col-12">Movies</div>
          <div className="col-12">
            <select className="form-select" value={genre} onChange={(e) => setGenre(e.target.value)}>
              <option value="">Tutti i generi</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
            <ul className="list-group">
              {filteredMovies.map((movie, index) => {
                return (
                  <li key={index} className="list-group-item">
                    {movie.title} - <em>{movie.genre}</em>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
