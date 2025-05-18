import { useState } from 'react'

const listMovies = [
  { title: 'Inception', genre: 'Fantascienza' },
  { title: 'Il Padrino', genre: 'Thriller' },
  { title: 'Titanic', genre: 'Romantico' },
  { title: 'Batman', genre: 'Azione' },
  { title: 'Interstellar', genre: 'Fantascienza' },
  { title: 'Pulp Fiction', genre: 'Thriller' },
]

function App() {

  return (
    <>
      <div className="container">
        <div className="row gy-4">
          <div className="col-12">Movies</div>
          <div className="col-12">
            <select className="form-control">
              <option value="">Tutti i generi</option>
              <option value="Fantascienza">Fantascienza</option>
              <option value="Thriller">Thriller</option>
              <option value="Romantico">Romantico</option>
              <option value="Azione">Azione</option>
            </select>
            <ul className="list-group">
              {listMovies.map((movie, index) => {
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
