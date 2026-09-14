interface CardProps {
  id: string;
  symbol: string;
  description: string;
}

export const Card = ({ id, symbol, description }: CardProps) => {
  return (
    <div className="emoji-card">
      <div className="emoji-symbol">{symbol}</div>
      <div className="emoji-id">{id}</div>
      <p className="emoji-description">{description}</p>
    </div>
  );
};