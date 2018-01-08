const Key = props => (
    <div>
        {props.isActive ? (
            <span className="key active">{props.children}</span>
        ) : (
            <span className="key">{props.children}</span>
        )}
        <style jsx>{`
            div {
                display: inline-block;
            }
            .key {
                display: inline-block;
                border: 1px solid red;
                padding: 10px;
                margin-bottom: 5px;
            }
            .active {
                background: yellowgreen;
            }
        `}</style>
    </div>
);

export default Key;
