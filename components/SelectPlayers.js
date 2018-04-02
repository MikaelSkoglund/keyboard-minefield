import Player from './Player';
import { PlayerConsumer } from './PlayerContext';

const SelectPlayers = () => {
    return (
        <PlayerConsumer>
            {context => {
                const { incrementPlayers, decrementPlayers, toggleReady } = context.actions;
                const { players, readyGame } = context.state;
                return (
                    <div className={readyGame ? 'wrapper dissapear' : 'wrapper'}>
                        <div className="inner-wrapper">
                            <div className="player-wrapper">
                                <div className="player-inner-wrapper">
                                    {players.map((player, i) => (
                                        <Player key={i} name={players[i].player} color={players[i].color} />
                                    ))}
                                </div>
                            </div>
                            <div className="options-wrapper">
                                <div className="btn-row">
                                    <button
                                        className={
                                            players.length > 1
                                                ? 'btn row-btn row-btn'
                                                : 'btn btn-inactive row-btn row-btn'
                                        }
                                        onClick={decrementPlayers}
                                    >
                                        -
                                    </button>
                                    <button
                                        className={
                                            players.length < 6
                                                ? 'btn row-btn row-btn'
                                                : 'btn btn-inactive row-btn row-btn'
                                        }
                                        onClick={incrementPlayers}
                                    >
                                        +
                                    </button>
                                </div>
                                <button className="btn" onClick={toggleReady}>
                                    Start game
                                </button>
                            </div>
                        </div>
                        <style jsx>{`
                            .dissapear {
                                margin-left: 100vw;
                            }
                            .wrapper {
                                width: 100%;
                                height: 100vh;
                                transform: translate(-50%, -50%);
                                top: 50%;
                                left: 50%;
                                position: absolute;
                                background: rgba(0, 0, 0, 0.5);
                                transition: all 0.2s ease;
                            }
                            .inner-wrapper {
                                width: 450px;
                                height: 600px;
                                display: flex;
                                transform: translate(-50%, -50%);
                                top: 50%;
                                left: 50%;
                                position: absolute;
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: center;
                                background: #fbfbfb;
                                border-radius: 10px;
                                box-shadow: rgba(0, 0, 0, 0.33) 0px 6px 15px 0px;
                            }
                            .player-wrapper {
                                display: flex;
                                width: 100%;
                                height: 50%;
                                aling-items: flex-start;
                            }
                            .player-inner-wrapper {
                                display: flex;
                                flex-wrap: wrap;
                                justify-content: center;
                                margin: auto;
                            }
                            .options-wrapper {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                            }
                            .btn {
                                outline: none;
                                border: none;
                                border-radius: 5px;
                                padding: 15px 20px;
                                font-size: 16px;
                                font-weight: bold;
                                background: #2196f3;
                                color: #fbfbfb;
                            }
                            .btn-row {
                                width: 100%;
                                display: flex;
                                justify-content: center;
                                margin: 10px 0;
                            }
                            .row-btn {
                                padding: 15px 25px;
                                font-size: 24px;
                                line-height: 10px;
                                background: #e7e7e7;
                                box-shadow: rgba(0, 0, 0, 0.33) 0px 4px 10px 0px;
                                margin: 5px;
                                border-radius: 5px;
                                transition: all 0.2s ease;
                            }
                            .row-btn:hover {
                                box-shadow: rgba(0, 0, 0, 0.33) 0px 3px 6px 0px;
                                cursor: pointer;
                            }
                            .btn-inactive {
                                box-shadow: none;
                                background: #bdbdbd;
                                transition: all 0.2s ease;
                            }
                            .btn-inactive:hover {
                                box-shadow: none;
                                cursor: not-allowed;
                            }
                        `}</style>
                    </div>
                );
            }}
        </PlayerConsumer>
    );
};

export default SelectPlayers;
