import { useState } from 'react';
import './App.css';
import { Card } from './components/Card';

interface IEmoji {
  emoji: string;
  title: string;
  keywords: string;
}

function App() {
  const [emojis, setEmojis] = useState<IEmoji[]>([
    {
      emoji: '💯',
      title: '100',
      keywords: 'Hundred, points, symbol, wow, win, perfect, parties',
    },
    {
      emoji: '😡',
      title: 'angry',
      keywords: 'angry, red',
    },
    {
      emoji: '🐷',
      title: 'pig',
      keywords: 'pink, animal',
    }
  ]);

  return (
    <div className="app-container">
      <header className="header">
        <h1 className="header-title">Emoji Finder</h1>
        <p className="header-subtitle">Find emoji by keywords</p>
      </header>

      <div className="search-container">
        <input 
          type="text" 
          className="search-input" 
          placeholder="Placeholder" 
        />
      </div>

      <main className="emoji-grid">
        {emojis.map((item, index) => (
          <Card 
            key={index}
            symbol={item.emoji} 
            id={item.title} 
            description={item.keywords}
          />
        ))}
      </main>
    </div>
  );
}

export default App;