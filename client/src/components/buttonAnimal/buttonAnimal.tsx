import * as React from 'react';

interface ButtonAnimalProps {
  onNext: () => void;
}

const ButtonAnimal: React.FC<ButtonAnimalProps> = ({ onNext }) => {
  return (
    <div style={{ marginTop: '10px', display: 'flex', gap: '10px' }}>
      <button onClick={onNext}>👍</button>
      <button onClick={onNext}>😐</button>
      <button onClick={onNext}>👎</button>
    </div>
  );
};

export default ButtonAnimal;