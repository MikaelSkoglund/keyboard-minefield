import keys from './keyCodes';

const KeyboardRow = props => (
  <div className="keyboardRow">
    {props.keyObj.map((obj, i) => (
      <span className="key">
        {obj.key}
      </span>
    ))}
    <style jsx>{`
      .keyboardRow {
        text-align: center;
        display: flex;
        justify-content: center;
        width: 100%;
      }
      .key{
        padding: 15px 20px;
        border: 1px solid #000;
        margin: 5px;
        border-radius: 5px;
      }
    `}</style>
  </div>
);

export default KeyboardRow;