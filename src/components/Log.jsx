export default function Log({ turns }) {

    console.log(turns);

    return <ol id="log">
        {turns.map(turn => <li key={`${turn.square.row}${turn.square.col}`}>
            Player {turn.player} selected row {turn.square.row} and col {turn.square.col}
        </li>)
        }
    </ol>
}