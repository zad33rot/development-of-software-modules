import { useState, useEffect } from 'react';
import './App.css';
import { Card } from './components/Card';
import { getEmojis } from './api/apiEmoji';

interface IEmoji {
  emoji: string;
  title: string;
  keywords: string;
}

function App() {
  const [emojis, setEmojis] = useState<IEmoji[]>([]);
  const [input, setInput] = useState("")

  useEffect(() => {
    fetchData();
  }, [input])


  async function fetchData() {
    const data = await getEmojis(input);

    setEmojis(data)
  }

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
          placeholder="Enter here..." 
          value={input}
          onInput={(e) => setInput(e.currentTarget.value)}
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