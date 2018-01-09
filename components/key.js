import { compose, pure, shouldUpdate } from 'recompose';

const Key = props => (
    <div>
        {props.isActive ? (
            <span className="key active">{props.children.toUpperCase()}</span>
        ) : (
            <span className="key">{props.children.toUpperCase()}</span>
        )}
        <style jsx>{`
            div {
                display: inline-block;
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

export default pure(Key);
