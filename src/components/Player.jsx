import { useState } from 'react';

export default function Player({ initialName, symbol, isActive }) {

    const [isEditing, setIsEditing] = useState(false);
    const [playerName, setPlayerName] = useState(initialName);

    function handleEditClick() {
        setIsEditing(editing => !editing); // schedules a state update to the opposite of the current value of isEditing
    }

    function handleChange(event) { // event object is passed to the event handler function automatically
        setPlayerName(event.target.value);
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {isEditing
                    ? <input type='text'
                        required
                        value={playerName}
                        onChange={handleChange}></input>
                    : <span className="player-name">{playerName}</span>}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{
                isEditing ? 'Save' : 'Edit'
            }</button>
        </li>
    )
}