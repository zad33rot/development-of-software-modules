import { useState } from 'react';
import { Header } from './components/Header.tsx';
import { Filters } from './components/Filters';
import { CharacterCard } from './components/CharacterCard';
import type { Character } from './types';
import hermioneImg from './assets/germiona.jpg';
import dracoImg from './assets/draco.jpg';
import './App.css';

const MOCK_DATA: Character[] = [
  {
    id: 1,
    name: 'Hermione Granger',
    actor: 'Emma Watson',
    gender: 'female',
    house: 'Gryffindor',
    wandCore: 'dragon heartstring',
    alive: true,
    image: hermioneImg
  },
  {
    id: 2,
    name: 'Draco Malfoy',
    actor: 'Tom Felton',
    gender: 'male',
    house: 'Slytherin',
    wandCore: 'unicorn tail-hair',
    alive: true,
    image: dracoImg
  }
];

function App() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSchool, setSelectedSchool] = useState('');

  const filteredCharacters = MOCK_DATA.filter(char => {
    const matchesName = char.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesSchool = selectedSchool ? char.house === selectedSchool : true;
    return matchesName && matchesSchool;
  });

  return (
    <div className="app-container">
      <Header />
      <Filters 
        searchTerm={searchTerm} 
        setSearchTerm={setSearchTerm}
        selectedSchool={selectedSchool}
        setSelectedSchool={setSelectedSchool}
      />
      <main className="grid-container">
        {filteredCharacters.map(char => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </main>
    </div>
  );
}

export default App;