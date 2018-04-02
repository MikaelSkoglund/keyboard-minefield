import React, { Component } from 'react';

const KeysContext = React.createContext();

let num = 0;
export class KeysProvider extends Component {
    state = {
        armedKey: 0,
        lastKeyPressed:
    };
    render() {
        return <KeysContext.Provider value={this.state}>{this.props.children}</KeysContext.Provider>;
    }
}

export const KeysConsumer = KeysContext.Consumer;
