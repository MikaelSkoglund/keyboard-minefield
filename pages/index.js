import Keyboard from '../components/Keyboard';
import GlobalEventHandler from '../components/GlobalEventHandler';

const index = () => (
    <div>
        <GlobalEventHandler>
            <Keyboard />
        </GlobalEventHandler>
        <style jsx global>{`
            body {
                margin: 0px;
                padding: 0px;
                font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial,
                    sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
            }
        `}</style>
        <style jsx>{`
            div {
                width: 100vw;
                height: 100vh;
            }
        `}</style>
    </div>
);

export default index;
