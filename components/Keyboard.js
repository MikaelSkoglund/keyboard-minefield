import KeyboardRow from './KeyboardRow';
import Boom from './Boom';
import { PlayerAvatar } from './Player';
import { keys, codes } from './keyCodes';
import { PlayersObj } from './PlayersObj';

import { compose, withState, withHandlers, lifecycle } from 'recompose';

const Keyboard = props =>
    props.armedKey === props.lastKeyPressed ? (
        <Boom />
    ) : (
        <div className="wrapper" onKeyDown={props.onKeyDown} onKeyUp={props.onKeyUp} tabIndex="0">
            <div className="players-wrapper">
                {props.players.map((player, i) => <PlayerAvatar key={player.player}
                                                                currentPlayer={props.currentPlayer}
                                                                nr={player.nr}
                                                                name={player.player}
                                                                color={player.color}
                                                                invalid={props.invalidKey} />)
                }
            </div>
            <div className="keyboard">
                {keys.map((row, i) => <KeyboardRow key={i}
                                                   keyObj={keys[i]}
                                                   keysPressed={props.keysPressed} />)
                }
            </div>
            <style jsx>{`
                .wrapper {
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
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
            `}</style>
        </div>
    );

const enhance = compose(
    withState('lastKeyPressed', 'setLastKey', 0),
    withState('keysPressed', 'setPressedKeys', []),
    withState('armedKey', 'setArmedKey', 0),
    withState('invalidKey', 'setInvalidKey', false),
    withState('currentPlayer', 'setCurrentPlayer', 0),
    withHandlers({
        onKeyDown: props => event => {

            props.setInvalidKey(false);

        },
        onKeyUp: props => event => {
            const validKey = codes.includes(event.keyCode);
            const alreadyPressed = props.keysPressed.includes(event.keyCode);

            //Check if key is not valid or already pressed.
            //If conditions are met set duplicate to true.
            if (!validKey || alreadyPressed){
                props.setInvalidKey(true);
            } else {
            //Else set duplicate to false,
            //push valid keys to keys array and increment/reset player-turn depending on conditions.
                props.setInvalidKey(false);
                if (props.currentPlayer > props.players.length - 2) {
                    props.setCurrentPlayer(0);
                    props.setPressedKeys([...props.keysPressed, event.keyCode]);
                } else {
                    props.setCurrentPlayer(props.currentPlayer + 1);
                    props.setPressedKeys([...props.keysPressed, event.keyCode]);
                }
            }

            //Setting current player
            props.setLastKey(event.keyCode);
        },
        setArmed: props => () => {
            const randomNum = Math.floor(Math.random() * codes.length);
            props.setArmedKey(codes[randomNum]);
        }
    }),
    lifecycle({
        componentDidMount() {
            this.props.setArmed();
        }
    })
);

export default enhance(Keyboard);
