import axios from 'axios';
import { renderComponent, branch } from 'recompose';

import Keyboard from './Keyboard';

class Defuse extends React.Component {
    state = {
        safeWord: [],
        scrambled: [],
        decrypted: [],
        index: 0
    };

    pressKeys = e => {
        const safeWord = this.state.safeWord;
        const index = this.state.index;
        if (e.key === safeWord[index]) {
            const arr = this.state.safeWord;
            const scrambleDel = [...this.state.scrambled];
            arr.splice(index, 1);
            scrambleDel.splice(scrambleDel.indexOf(e.key), 1);
            this.setState({
                decrypted: [...this.state.decrypted, e.key],
                safeWord: arr,
                scrambled: scrambleDel
            });
        }
    };

    shuffle = word => {
        let a = [...word],
            n = a.length;

        for (let i = n - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let tmp = a[i];
            a[i] = a[j];
            a[j] = tmp;
        }
        this.setState({
            scrambled: a
        });
    };

    fetchData = () => {
        if (this.refs.wrapper) {
            axios
                .get(
                    'http://api.wordnik.com:80/v4/words.json/randomWord?hasDictionaryDef=true&includePartOfSpeech=noun&minCorpusCount=8000&maxCorpusCount=-1&minDictionaryCount=3&maxDictionaryCount=-1&minLength=6&maxLength=12&api_key=a2a73e7b926c924fad7001ca3111acd55af2ffabf50eb4ae5'
                )
                .then(res => {
                    return res.data.word.toLowerCase().split('');
                })
                .then(safeWord => {
                    this.setState({
                        safeWord
                    });
                    return safeWord;
                })
                .then(scramble => {
                    this.shuffle(scramble);
                });
        }
    };

    componentDidMount() {
        this.fetchData();
        this.refs['wrapper'].focus();
    }

    render() {
        const { safeWord, decrypted, scrambled } = this.state;
        if (safeWord.length === 0 && decrypted.length > 0) {
            return <Keyboard />;
        }
        return (
            <div ref="wrapper" className="wrapper" tabIndex="0" onKeyDown={this.pressKeys}>
                <div className="head">
                    <h1>DEFUSE</h1>
                </div>
                <div className="safeword">
                    <h3 className="glitch">{scrambled.map((letter, i) => letter)}</h3>
                    <h3>{decrypted}</h3>
                </div>
                <style jsx>{`
                    .glitch {
                        //transform: translateX(0);
                        //animation: glitch 0.3s linear infinite;
                        font-size: 2rem;
                    }
                    .wrapper {
                        width: 100%;
                        height: 100%;
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
    }
}

export default Defuse;
