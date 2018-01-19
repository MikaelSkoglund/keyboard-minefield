import { Provider } from 'react-redux';
import createStore from '../store';

import Keyboard from '../components/Keyboard';
import GlobalEventHandler from '../components/GlobalEventHandler';
import App from '../components/App';
import SelectPlayers from '../components/SelectPlayers';

let store = createStore();

const index = () => (
    // <div>
    <Provider store={store}>
        <SelectPlayers />
    </Provider>
    //     <style jsx global>{`
    //         body {
    //             margin: 0px;
    //             padding: 0px;
    //             font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
    //                 sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    //         }
    //     `}</style>
    //     <style jsx>{`
    //         div {
    //             width: 100vw;
    //             height: 100vh;
    //         }
    //     `}</style>
    // </div>
);

export default index;
