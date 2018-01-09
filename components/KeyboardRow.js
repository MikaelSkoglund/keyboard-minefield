const KeyboardRow = props => (
  <div className="keyboardRow">
    {props.keyObj.map((obj, i) =>
        <span key={i} className={props.activeKeys.includes(obj.code) ? "key active" : "key"}>
        {obj.key}
        </span>
    )}
    <style jsx>{`
      .keyboardRow {
        text-align: center;
        display: flex;
        justify-content: center;
        width: 100%;
      }
      .key{
        padding: 20px 30px;
        font-size: 24px;
        background: #e7e7e7;
        margin: 5px;
        border-radius: 5px;
        color: #212121;
        box-shadow: rgba(0, 0, 0, 0.23) 3px 5px 5px 0px;
        text-transform: uppercase;
        transition: all 0.1s ease;
      }
      .active{
        background: #FF7043;
        color: #F5F5F5;
        box-shadow: rgba(0, 0, 0, 0.23) 0px 3px 7px 0px;
      }
    `}</style>
  </div>
);

export default KeyboardRow;