import Keyboard  from './Keyboard.js';
import SelectPlayers from './SelectPlayers';
import { PlayersObj } from './PlayersObj';
import { PlayerProvider, PlayerConsumer } from './PlayerContext.js';

import { compose, withState, withHandlers, branch, renderComponent } from 'recompose';

class App extends React.Component {
    render() {
        return (
            <PlayerProvider>
                <PlayerConsumer>{({ state: { readyGame } }) => (readyGame ? <Keyboard /> : <SelectPlayers />)}</PlayerConsumer>
            </PlayerProvider>
        );
    }
}

export default App;
