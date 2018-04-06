import React, { Component } from 'react';
import { PlayersObj } from './PlayersObj';
import { keys, codes } from './keyCodes';

const PlayerContext = React.createContext();

let num = 0;
export class PlayerProvider extends Component {
    state = {
        players: [PlayersObj[0]],
        readyGame: false,
        armedKey: null,
        keysPressed: [],
        defModeEng: false,
        currentPlayer: 0
    };

    initState = this.state;

    actions = {
        toggleReady: () => {
            this.setState({
                readyGame: true
            })
            this.refs['global'].focus();
            this.setArmed();
        },
        toggleDefModeEng: () => {
            this.setState({
                defModeEng: !this.state.defModeEng,
                keysPressed: []
            })
            //Re-set armed key when back after defuse
            if (!this.state.defModeEng) {
                this.setArmed();
            }
        },
        incrementPlayers: () => {
            if (num >= 5) {
                return;
            }
            num += 1;
            this.setState({
                players: [...this.state.players, PlayersObj[num]]
            });
        },
        decrementPlayers: () => {
            if (num <= 0) {
                return;
            }
            const newArr = this.state.players;
            num -= 1;
            newArr.splice(num + 1, 1);
            this.setState({
                players: newArr
            });
        }
    };

    validKey = keycode => (
        codes.indexOf(keycode) !== -1
        && this.state.keysPressed.indexOf(keycode) === -1
        && this.state.readyGame
    );

    onKeyDownMaster = e => {
        const pressedKey = e.keyCode;

        // Check if key haven't been pressed && it's a valid key && game is ready.
        if (this.validKey(pressedKey) && !this.state.defModeEng) {

            if (pressedKey === this.state.armedKey) {
                this.actions.toggleDefModeEng();
            }

            const currentPlayer = this.state.currentPlayer !== (this.state.players.length - 1) ? this.state.currentPlayer + 1 : 0;
            this.setState({
                pressedKey,
                keysPressed: [...this.state.keysPressed, pressedKey],
                currentPlayer
            });

        }
    }

    setArmed = () => {
        const randomNum = Math.floor(Math.random() * codes.length);
        this.setState({
            armedKey: codes[randomNum]
        })
    }

    componentDidUpdate() {
        if (!this.state.defModeEng) {
            this.refs['global'].focus();
        }
    }

    render() {
        return (
            <PlayerContext.Provider value={{ state: this.state, actions: this.actions }}>
                <div onKeyDown={this.onKeyDownMaster} ref="global" tabIndex="0">
                    {this.props.children}
                </div>
            </PlayerContext.Provider>
        );
    }
}

export const PlayerConsumer = PlayerContext.Consumer;
