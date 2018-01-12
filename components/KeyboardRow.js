import { codes } from './keyCodes';
import Key from './Key';

const KeyboardRow = props => (
    <div className="keyboardRow">
        {props.keyObj.map((obj, i) => (
            <Key key={i} char={obj.key} keysPressed={props.keysPressed} isActive={props.keysPressed.includes(obj.code) ? true : false}/>
        ))}
        <style jsx>{`
            .keyboardRow {
                text-align: center;
                display: flex;
                justify-content: center;
                width: 100%;
            }
        `}</style>
    </div>
);

export default KeyboardRow;
