const Key = props => (
    <div className={props.keyObj.break ? "key-wrapper key-break" : "key-wrapper"}>
        {props.isActive ? (
            <span className="key active">{props.keyObj.key}</span>
        ) : (
            <span className="key">{props.keyObj.key}</span>
        )}
        <style jsx>{`
            .key-wrapper {
                display: flex;
                flex-direction: column;
            }
            .key-break{
                margin-right: 10px;
            }
            .key {
                display: flex;
                border: 1px solid red;
                padding: 10px;
                margin-bottom: 5px;
            }
            .active {
                background: yellowgreen;
            }
        `}</style>
        {console.log(props)}
    </div>
);

export default Key;
