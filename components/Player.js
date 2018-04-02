export const PlayerAvatar = (props) => (
  <div className={props.currentPlayer === props.nr ? `player active ${props.invalid ? 'invalid' : null}` : "player"}>
    <p>{props.name}</p>
    <style jsx>{`
      .player{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 35px;
        font-weight: bold;
        background: ${props.color};
        color: #fbfbfb;
        margin: 10px;
        height: 75px;
        width: 75px;
        border-radius: 50%;
        opacity: 0.4;
        transform: translateY(5px);
        transition: all 0.2s ease;
      }

      .active{
        opacity: 1;
        transform: translateY(0px);
        box-shadow: rgba(0, 0, 0, 0.23) 0px 5px 5px 0px;
        transition: all 0.5s ease;
      }

      .invalid{
        animation: badMove 0.5s ease;
      }

      @keyframes badMove {
        from {
          transform: scale3d(1, 1, 1);
        }

        30% {
          transform: scale3d(1.25, 0.75, 1);
        }

        40% {
          transform: scale3d(0.75, 1.25, 1);
        }

        50% {
          transform: scale3d(1.15, 0.85, 1);
        }

        65% {
          transform: scale3d(.95, 1.05, 1);
        }

        75% {
          transform: scale3d(1.05, .95, 1);
        }

        to {
          transform: scale3d(1, 1, 1);
        }
      }
    `}</style>
  </div>
);

const Player = (props) => (
      <div className="player">
        <p>Player: {props.name}</p>
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
            animation: appear 0.5s ease-out;
          }

          @keyframes appear {
            from {
              opacity: 0;
              transform: scale(0.1) rotate(30deg);
              transform-origin: center bottom;
            }

            50% {
              transform: rotate(-10deg);
            }

            70% {
              transform: rotate(3deg);
            }

            to {
              opacity: 1;
              transform: scale(1);
            }
          }
        `}</style>
      </div>
  );

export default Player;
