import keys from './keyCodes';

import Key from './Key';
import Boom from './Boom';

const randomKey = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

class Keyboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            lastKeyPressed: 0,
            keysPressed: [],
            armedKey: 0
        };
    }

    componentDidMount() {
        const armed = randomKey(65, 90);

        this.setState({
            armedKey: armed
        });
    }

    render() {
        const onKeyDown = e => {
            this.setState({
                lastKeyPressed: e.keyCode,
                keysPressed: [...this.state.keysPressed, e.keyCode]
            });
        };

        if (this.state.keyPressed === this.state.armedKey) {
            return <Boom />;
        }

        return (
            <div className="keyboard" onKeyDown={onKeyDown} tabIndex="0">
                <div className="keyboardRow">
                    {keys.map(
                        (obj, i) =>
                            this.state.lastKeyPressed === obj.code ? (
                                <Key key={obj.code} isActive={true}>
                                    {obj.key}
                                </Key>
                            ) : (
                                <Key key={obj.code} isActive={false}>
                                    {obj.key}
                                </Key>
                            )
                    )}
                </div>
                <style jsx>{`
                    .keyboard {
                        height: 100%;
                        background: transparent;
                    }
                    .keyboardRow {
                        position: absolute;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                    .keyboard:focus {
                        outline: none;
                    }
                    .keyboardRow {
                        text-align: center;
                    }
                `}</style>
            </div>
        );
    }
}

export default Keyboard;
