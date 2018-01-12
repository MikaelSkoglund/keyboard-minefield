import axios from 'axios';

import Keyboard from './Keyboard';
import GlobalEventHandler from './GlobalEventHandler';

import {
    compose,
    withState,
    withHandlers,
    lifecycle,
    branch,
    renderComponent,
    renderNothing,
    withProps,
    shouldUpdate
} from 'recompose';

const Defuse = props => {
    // const { safeWord, decrypted, scrambled } = props;
    if (props.safeWord.length === 0 && props.decrypted.length > 0) {
        return <Keyboard />;
    }

    return (
        <div className="wrapper" onClick={props.feedDecrypt}>
            {console.log(props)}
            <div className="head">
                <h1>DEFUSE</h1>
            </div>
            <div className="safeword">
                <h3 className="glitch">{props.scrambled.map((letter, i) => letter)}</h3>
                <h3>{props.decrypted}</h3>
            </div>
            <style jsx>{`
                .glitch {
                    //transform: translateX(0);
                    //animation: glitch 0.3s linear infinite;
                    font-size: 2rem;
                }
                .wrapper {
                    width: 100%;
                    height: 100vh;
                    display: grid;
                    grid-template-rows: auto auto;
                }
                h1 {
                    font-size: 5rem;
                }
                h3 {
                    font-size: 10rem;
                    margin: 0;
                }
                .head {
                    text-align: center;
                    color: blue;
                    animation: color-flipper 0.1s linear infinite alternate;
                }
                .safeword {
                    text-align: center;
                }
                @keyframes glitch {
                    to {
                        transform: translateX(-5px);
                        opacity: 0;
                    }
                }
                @keyframes color-flipper {
                    from {
                        color: blue;
                    }
                    to {
                        color: red;
                    }
                }
            `}</style>
        </div>
    );
};

const enhance = compose(
    withState('safeWord', 'setSafeWord', []),
    withState('scrambled', 'setScrambled', []),
    withState('decrypted', 'setDecrypted', []),
    withState('index', 'setIndex', 0),
    withHandlers({
        feedDecrypt: props => () => {
            const letter = String.fromCharCode(props.pressedKey).toLowerCase();
            const safeWord = props.safeWord;
            const index = props.index;

            if (letter === safeWord[index]) {
                const arr = props.safeWord;
                const scrambleDel = [...props.scrambled];

                arr.splice(index, 1);
                scrambleDel.splice(scrambleDel.indexOf(letter), 1);

                props.setDecrypted([...props.decrypted, letter]), props.setSafeWord(arr);
                props.setScrambled(scrambleDel);
            }
        },
        shuffle: props => word => {
            let a = [...word],
                n = a.length;

            for (let i = n - 1; i > 0; i--) {
                let j = Math.floor(Math.random() * (i + 1));
                let tmp = a[i];
                a[i] = a[j];
                a[j] = tmp;
            }
            props.setScrambled(a);
        },
        fetchData: () => () => {
            axios
                .get(
                    'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=6&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
                )
                .then(res => {
                    return res.data.word.toLowerCase().split('');
                })
                .then(safeWord => {
                    this.props.setSafeWord(safeWord);
                    return safeWord;
                })
                .then(scramble => {
                    this.props.shuffle(scramble);
                });
        }
    }),
    lifecycle({
        componentDidMount() {
            axios
                .get(
                    'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=6&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
                )
                .then(res => {
                    return res.data.word.toLowerCase().split('');
                })
                .then(safeWord => {
                    this.props.setSafeWord(safeWord);
                    return safeWord;
                })
                .then(scramble => {
                    this.props.shuffle(scramble);
                });
        },
        componentWillReceiveProps(nextProps) {
            if (this.props.pressedKey !== nextProps.pressedKey) {
                this.props.feedDecrypt();
            }
        }
    })
);

export default enhance(Defuse);
