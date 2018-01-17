import KeyboardRow from './KeyboardRow';
import Boom from './Boom';
import Error from './Error';
// import Defuse from './Defuse';
import Defuser from './DefuseWIP';
import GlobalEventHandler from './GlobalEventHandler';
import { PlayerAvatar } from './Player';
import { keys, codes } from './keyCodes';
import { PlayersObj } from './PlayersObj';

import {
    compose,
    withState,
    withHandlers,
    lifecycle,
    branch,
    renderComponent,
    renderNothing,
    withProps
} from 'recompose';

//const Keyboard = ({ keysPressed, armedKey, lastKeyPressed, onKeyDown }) => {
const Keyboard = props => {
   // if (props.armedKey === props.pressedKey) {
 //       props.setDefuseMode(true);
   // }
   // console.log(props);
  //  const { keysPressed, armedKey, lastKeyPressed, onKeyDown } = props;
   // const sweats = [
   //     'https://media.giphy.com/media/LRVnPYqM8DLag/giphy.gif',
   //     'https://media.giphy.com/media/4bWWKmUnn5E4/giphy.gif',
    //    'https://media.giphy.com/media/hBn5xBlaUxyLu/giphy.gif'
   // ];

    // const incNum = keysPressed.length;
    // const alarmTrigger = incNum < 16 ? 0 : 10 / incNum;

    // const img1 = incNum < 19 ? 'hidden' : 'visible';
    // const img2 = incNum < 22 ? 'hidden' : 'visible';
    // const img3 = incNum < 25 ? 'hidden' : 'visible';

    //return (
      //  <div className="wrapper" tabIndex="0">
        //    {/* {incNum > 30 ? <Error /> : null} */}
          //  <div className="keyboard">
            //    {keys.map((row, i) => (
              //      <KeyboardRow activeKeys={keysPressed} key={i} keyObj={keys[i]} />
               // ))}
    props.armedKey === props.lastKeyPressed ? (
        <Boom />
    ) : (
        <div className="wrapper" onKeyDown={props.onKeyDown} onKeyUp={props.onKeyUp} tabIndex="0">
            <div className="players-wrapper">
                {props.players.map((player, i) => <PlayerAvatar key={player.player}
                                                                currentPlayer={props.currentPlayer}
                                                                nr={player.nr}
                                                                name={player.player}
                                                                color={player.color}
                                                                invalid={props.invalidKey} />)
                }
            </div>
            <div className="keyboard">
                {keys.map((row, i) => <KeyboardRow key={i}
                                                   keyObj={keys[i]}
                                                   keysPressed={props.keysPressed} />)
                }
            </div>
            {/* {sweats.map((img, i) => <img key={i} className={`sweat sweat${i}`} src={img} />)} */}
            <style jsx>{`
                .wrapper {
                    height: 100vh;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    // animation: alarm ${alarmTrigger}s linear infinite alternate;
                    justify-content: center;
                }
                .players-wrapper{
                  display: flex;
                  justify-content: space-around;
                  margin-bottom: 30px;
                }
                .keyboard {
                    text-align: center;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    width: 100%;
                }
                .sweat {
                    position: absolute;
                    width: 500px;
                }
                // .sweat0 {
                //     top: 0;
                //     left: 0;
                //     visibility: ${img1};
                // }
                // .sweat1 {
                //     top: 0;
                //     right: 0;
                //     visibility: ${img2};
                // }
                // .sweat2 {
                //     bottom: 0;
                //     left: 0;
                //     visibility: ${img3};
                }
                @keyframes alarm {
                    from {
                        background: transparent;
                    }
                    to {
                        background: #ff9999;
                    }
                }
            `}</style>
        </div>
    );
};

const boomOnBoom = triggered => branch(triggered, renderComponent(Defuser));

const enhance = compose(
    withState('armedKey', 'setArmedKey', null),
    withProps(props => ({
        lastKeyPressed: props.pressedKey,
        keysPressed: props.keysPressed ? props.keysPressed : []
    })),
    withState('defuseModeEngaged', 'setDefuseMode', false),
    withState('invalidKey', 'setInvalidKey', false),
    withState('currentPlayer', 'setCurrentPlayer', 0),
    withHandlers({
        setDefuseMode: props => arg => {
            props.setDefuseMode(arg);
        },
        onKeyDown: props => event => {

            props.setInvalidKey(false);

        },
        onKeyUp: props => event => {
            const validKey = codes.includes(event.keyCode);
            const alreadyPressed = props.keysPressed.includes(event.keyCode);

            //Check if key is not valid or already pressed.
            //If conditions are met set duplicate to true.
            if (!validKey || alreadyPressed){
                props.setInvalidKey(true);
            } else {
            //Else set duplicate to false,
            //push valid keys to keys array and increment/reset player-turn depending on conditions.
                props.setInvalidKey(false);
                if (props.currentPlayer > props.players.length - 2) {
                    props.setCurrentPlayer(0);
                    props.setPressedKeys([...props.keysPressed, event.keyCode]);
                } else {
                    props.setCurrentPlayer(props.currentPlayer + 1);
                    props.setPressedKeys([...props.keysPressed, event.keyCode]);
                }
            }
        },
        setArmed: props => () => {
            //const randomNum = Math.floor(Math.random() * codes.length);
            const randomNum = 0;
            props.setArmedKey(codes[randomNum]);
        }
    }),
    lifecycle({
        componentDidMount() {
            this.props.setArmed();
        },
        componentWillUnmount() {
            this.props.defuseModeEngaged(false);
        }
    }),
    boomOnBoom(props => props.defuseModeEngaged)
);

export default enhance(Keyboard);
