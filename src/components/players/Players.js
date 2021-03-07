import './Players.css'

const players = (props) => {
    const { data } = props;
    
    return (
        <div>
            {!data.players ? 
                <div>Loading...</div> : 
                <ul className="players">
                    <div className="player category">
                        <div className="name">Name</div>
                        <div>Team</div>
                        <div>G</div>
                        <div>PA</div>
                        <div>AB</div>
                        <div>RBI</div>
                    </div>
                    { data.players.map(player => (
                        <li key={player._id} className="player">
                            <div className="name">{ player.name }</div>
                            <div>{ player.Team }</div>
                            <div>{ player.G }</div>
                            <div>{ player.PA }</div>
                            <div>{ player.AB }</div>
                            <div>{ player.RBI }</div>
                        </li>
                    ))}
                </ul>
            }
        </div>
    );
};

export default players;