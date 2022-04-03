
import Fuse from 'fuse.js'
import { useState } from 'react';
import characters from './characters.json';

export const App = () => {
  const [query, setQuery] = useState('')

  const fuse = new Fuse(characters, {
    keys: [
      'name',
      'company',
      'species'
    ],
    includeScore: true
  });

  const results = fuse.search(query);
  const characterResults = query ? results.map(character => character.item) : characters

  console.log(results)

  return (
    <div className="App">
      <header className="App-header">
        <div className="container">
          <h1>Futurama Characters</h1>
        </div>
      </header>

      <main className="container">
        <form className="search">
          <label>Search</label>
          <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
        </form>
        <ul className="characters">
          {characterResults.map(character => {
            const { name, company, species } = character;
            return (
              <li key={name} className="character" >
                <ul className="character-meta">
                  <li>
                    <strong>Name:</strong> {name}
                  </li>
                  <li>
                    <strong>Company:</strong> {company}
                  </li>
                  <li>
                    <strong>Species:</strong> {species}
                  </li>
                </ul>
              </li>
            )
          })}
        </ul>
      </main>
    </div>
  );
}
