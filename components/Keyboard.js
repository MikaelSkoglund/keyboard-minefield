import keys from './keyCodes';
import Key from './Key';

const Keyboard = () => {
    let pressedKey = null;

    const onKeyDown = e => {
        pressedKey = e.key.toString();
        console.log(pressedKey);
    };

    return (
        <div className="keyboard" onKeyDown={onKeyDown} tabIndex="0">
            <div className="keyboardRow">
                {keys.map((obj, i) => {
                    return pressedKey && pressedKey === obj.key ? (
                        <Key isActive={true}>{obj.key}</Key>
                    ) : (
                        <Key isActive={false}>{obj.key}</Key>
                    );
                })}
            </div>
            <style jsx>{`
                .keyboard {
                    height: 100vh;
                }
                .keyboardRow {
                    text-align: center;
                }
            `}</style>
        </div>
    );
};

export default Keyboard;
