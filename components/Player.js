export const PlayerLrg = (props) => (
  <div className="player">
    <p>{props.name}</p>
    <style jsx>{`
      .player{
        display: flex;
        align-items: center;
        font-size: 22px;
        font-weight: bold;
        background: ${props.color};
        color: #fbfbfb;
        margin: 10px;
        border-radius: 5px;
        padding: 0 40px;
        line-height: 5px;
      }
    `}</style>
  </div>
);

const Player = (props) => (
      <div className="player">
        <p>{props.name}</p>
        <style jsx>{`
          .player{
            display: flex;
            align-items: center;
            font-size: 16px;
            font-weight: bold;
            background: ${props.color};
            color: #fbfbfb;
            margin: 5px;
            border-radius: 5px;
            padding: 0 20px;
            line-height: 5px;
          }
        `}</style>
      </div>
  );

export default Player;