import { keys, codes } from './keyCodes';
import KeyboardRow from './KeyboardRow';
import Boom from './Boom';
import { PlayerLrg } from './Player';

import { PlayersObj } from './PlayersObj';

import { compose, withState, withHandlers, lifecycle } from 'recompose';

let currentPlayer = 0;

const Keyboard = props =>
    props.armedKey === props.lastKeyPressed[0] ? (
        <Boom />
    ) : (
        <div className="wrapper" onKeyDown={props.onKeyDown} tabIndex="0">
            <div className="players-wrapper">
              {props.players.map((item, i) => <PlayerLrg key={item.player} name={item.player} color={item.color} />)}
            </div>
            <div className="keyboard">
                {keys.map((row, i) => <KeyboardRow keysPressed={props.keysPressed} keysPressed={props.keysPressed} key={i} keyObj={keys[i]} />)}
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
    withState('playersPressed', 'setPlayersPressed', 0),
    withState('armedKey', 'setArmedKey', 0),
    withState('currentPlayer', 'setCurrentPlayer', 0),
    withHandlers({
        onKeyDown: props => event => {
            //Setting the last pressed key
            props.setLastKey(event.keyCode);

            //Setting all keys that has been pressed
            props.setPressedKeys([...props.keysPressed, event.keyCode]);

            //Setting current player
            currentPlayer++;
            if (currentPlayer > props.players.length) {
                currentPlayer = 1;
            }
            props.setPlayersPressed(currentPlayer);
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
