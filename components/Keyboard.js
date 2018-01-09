import { keys, codes } from './keyCodes';
import KeyboardRow from './KeyboardRow';
import Boom from './Boom';

import { compose, withState, withHandlers, lifecycle } from 'recompose';

const Keyboard = props =>
    props.armedKey === props.lastKeyPressed ? (
        <Boom />
    ) : (
        <div className="wrapper" onKeyDown={props.onKeyDown} tabIndex="0">
            <div className="keyboard">
                {keys.map((row, i) => <KeyboardRow activeKeys={props.keysPressed} key={i} keyObj={keys[i]} />)}
            </div>
            <style jsx>{`
                .wrapper {
                    height: 100vh;
                    display: flex;
                    align-items: center;
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
    withHandlers({
        onKeyDown: props => event => {
            props.setLastKey(event.keyCode);
            props.setPressedKeys([...props.keysPressed, event.keyCode]);
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
