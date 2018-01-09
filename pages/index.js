import Keyboard from '../components/Keyboard';
const index = () => (
    <div>
        <Keyboard />
        <style jsx global>{`
            body {
                margin: 0px;
                padding: 0px;
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
