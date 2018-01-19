import Keyboard from './Keyboard';
import SelectPlayers from './SelectPlayers';
import { PlayersObj } from './PlayersObj';

import { compose, withState, withHandlers, branch, renderComponent } from 'recompose';

let num = 0;
const App = props => (
    <div>
        <SelectPlayers {...props} />
        {/* <Keyboard players={props.players}/> */}
    </div>
);

const ReadyWhenReady = ready => branch(ready, renderComponent(Keyboard));

const enhance = compose(
    withState('players', 'setPlayers', [PlayersObj[num]]),
    withState('readyGame', 'setReady', false),
    withHandlers({
        // incrementPlayers: props => () => {
        //     if(props.players.length < 6) {
        //       num++
        //       props.setPlayers([...props.players, PlayersObj[num]]);
        //     }
        // },
        decrementPlayers: props => () => {
            if (props.players.length > 1) {
                props.players.splice(num, 1);
                num--;
                props.setPlayers(props.players);
            }
        },
        toggleReady: props => () => {
            props.setReady(true);
        }
    }),
    ReadyWhenReady(props => props.readyGame)
);

//export default enhance(App);
export default App;
