import type { Character } from '../types';

interface Props {
  character: Character;
}

export const CharacterCard = ({ character }: Props) => {
  return (
    <div className="card">
      <img src={character.image} alt={character.name} className="card-image" />
      <div className="card-content">
        <h3 className="card-title">{character.name}</h3>
        <p className="card-text"><strong>Actor:</strong> {character.actor}</p>
        <p className="card-text"><strong>Gender:</strong> {character.gender}</p>
        <p className="card-text"><strong>House:</strong> {character.house}</p>
        <p className="card-text"><strong>Wand core:</strong> {character.wandCore}</p>
        <p className="card-text"><strong>Alive:</strong> {character.alive ? 'yes' : 'no'}</p>
      </div>
    </div>
  );
};