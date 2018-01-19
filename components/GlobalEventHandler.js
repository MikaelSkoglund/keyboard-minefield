import { keys, codes } from './keyCodes';
import { PlayersObj } from './PlayersObj';

class GlobalEventHandler extends React.Component {
    state = {
        pressedKey: 0,
        keysPressed: [],
        armedKey: 0,
        players: [],
        gameReady: false,
        currentPlayer: 0,
        validKey: true,
        defuseMode: false,
        num: 0
    };

    incrementPlayers = () => {
        if (this.state.players.length < 6) {
            this.setState({
                num: num + 1,
                players: [...this.state.players, PlayersObj[this.state.num]]
            });
        }
    };

    setDefuseMode = arg => {
        props.setDefuseMode(arg);
    };

    setArmed = () => {
        //const randomNum = Math.floor(Math.random() * codes.length);
        const randomNum = 49;

        this.setState({
            armedKey: randomNum
        });
    };

    onKeyUp = e => {};

    onKeyDown = e => {
        const pressedKey = e.keyCode;

        this.setState({
            pressedKey
        });

        if (!this.state.keysPressed.includes(pressedKey)) {
            this.setState({
                keysPressed: [...this.state.keysPressed, pressedKey],
                validKey: true
            });
        } else {
            this.setState({
                validKey: false
            });
        }

        if (pressedKey === this.state.armedKey) {
            this.setState({
                defuseMode: !this.state.defuseMode
            });
        }
    };

    componentDidMount() {
        this.refs['global'].focus();

        this.setArmed();
    }
    render() {
        let children;

        children = React.Children.map(this.props.children, child =>
            React.cloneElement(child, this.state)
        );

        // console.log(this.state);

        return (
            <div onKeyDown={this.onKeyDown} ref="global" tabIndex="0">
                {children}
            </div>
        );
    }
}

export default GlobalEventHandler;
