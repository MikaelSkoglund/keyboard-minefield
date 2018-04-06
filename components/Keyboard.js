import KeyboardRow from './KeyboardRow';
import Error from './Error';
import Defuse from './Defuse';
import Defuser from './DefuseWIP';
import { PlayerAvatar } from './Player';
import { keys, codes } from './keyCodes';
import { PlayersObj } from './PlayersObj';
import { PlayerConsumer } from './PlayerContext';

const Keyboard = () => {
    return (
        <PlayerConsumer>
            {context => {
                const {players, currentPlayer, keysPressed, defModeEng} = context.state;
                if (defModeEng) {
                    return <Defuse {...context} />
                }
                return (
                    <div className="wrapper">
                        <div className="players-wrapper">
                            {players.map((player, i) => (
                                <PlayerAvatar
                                    key={player.player}
                                    currentPlayer={currentPlayer}
                                    nr={player.nr}
                                    name={player.player}
                                    color={player.color}
                                />
                            ))}
                        </div>
                        <div className="keyboard">
                            {keys.map((row, i) => (
                                <KeyboardRow key={i} keyObj={keys[i]} keysPressed={keysPressed} />
                            ))}
                        </div>
                        <style jsx>{`
                .wrapper {
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    // animation: alarm ${alarmTrigger}s linear infinite alternate;
                    justify-content: center;
                }
                .players-wrapper{
                  display: flex;
                  justify-content: space-around;
                  margin-bottom: 30px;
                }
                .keyboard {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
                .sweat {
                    position: absolute;
                    width: 500px;
                }
                // .sweat0 {
                //     top: 0;
                //     left: 0;
                //     visibility: ${img1};
                // }
                // .sweat1 {
                //     top: 0;
                //     right: 0;
                //     visibility: ${img2};
                // }
                // .sweat2 {
                //     bottom: 0;
                //     left: 0;
                //     visibility: ${img3};
                }
                @keyframes alarm {
                    from {
                        background: transparent;
                    }
                    to {
                        background: #ff9999;
                    }
                }
            `}</style>
                    </div>
                );
            }}
        </PlayerConsumer>
    );
};

export default Keyboard;
