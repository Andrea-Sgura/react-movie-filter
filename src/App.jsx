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
