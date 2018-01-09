import keys from './keyCodes';

import Key from './Key';
import KeyboardRow from './KeyboardRow';

const Keyboard = () => {
    let pressedKey = null;

    const onKeyDown = e => {
        presskey();
    };

    return (
          <div className="wrapper">
            <div className="keyboard">
              {keys.map((row, i) => <KeyboardRow keyObj={keys[i]}/>)}
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

export default Keyboard;
