import { compose, pure, shouldUpdate } from 'recompose';

const Key = props => (
    <div>
        <span className={props.keysPressed.includes(props.thisKeyCode) ? 'key active' : 'key'}>{props.children}</span>
        <style jsx>{`
            .key-wrapper {
                display: flex;
                flex-direction: column;
            }
            .key-break {
                margin-right: 10px;
            }
            .key {
                display: inline-block;
                border: 2px solid lightblue;
                width: 50px;
                height: 50px;
                border-radius: 30%;
                margin: 5px;
                display: flex;
                align-items: center;
                justify-content: center;
                color: lightblue;
            }
            .active {
                background: yellowgreen;
            }
        `}</style>
    </div>
);

const enhance = compose(pure);

export default enhance(Key);
