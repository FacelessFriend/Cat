import * as React from 'react';

interface IButtonProps {
  onClick: () => void
}

const ReactionButtons: React.FC<IButtonProps> = ({onClick}) => {
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={onClick}>👍</button>
            <button onClick={onClick}>😐</button>
            <button onClick={onClick}>👎</button>
        </div>
    )
}

export default ReactionButtons;