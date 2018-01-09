import keys from './keyCodes';
import KeyboardRow from './KeyboardRow';
import Key from './Key';
import Boom from './Boom';

const randomKey = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

class Keyboard extends React.Component {
    state = {
        lastKeyPressed: 0,
        keysPressed: [],
        armedKey: 0
    };

    componentWillMount() {
        let armed = randomKey(48, 90);
        if (armed >= 64 || armed <= 58) {
            armed = randomKey(48, 90);
        }
        this.setState({
            armedKey: armed
        });
    }

    onKeyDown = e => {
        this.setState({
            lastKeyPressed: e.keyCode,
            keysPressed: [...this.state.keysPressed, e.keyCode]
        });
    };

    render() {
        if (this.state.lastKeyPressed === this.state.armedKey) {
            return <Boom />;
        }

        return (
            <div className="wrapper">
                <div className="keyboard" onKeyDown={this.onKeyDown} tabIndex="0">
                    {keys.map((row, i) => (
                        <KeyboardRow key={i} keyObj={keys[i]}>
                            {row.map((key, i) => (
                                <Key keysPressed={this.state.keysPressed} thisKeyCode={key.code} key={i}>
                                    {key.key.toUpperCase()}
                                </Key>
                            ))}
                        </KeyboardRow>
                    ))}
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
                        height: 100%;
                    }
                `}</style>
            </div>
        );
    }
}

export default Keyboard;
