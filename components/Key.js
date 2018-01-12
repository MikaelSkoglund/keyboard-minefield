const Key = (props) => {

  const intensity = 1 / props.keysPressed.length;

  return(
    <div className={props.isActive ? `key active`: 'key'}>
      {props.char}
       <style jsx>{`
        .key {
            padding: 20px 30px;
            font-size: 24px;
            background: #e7e7e7;
            margin: 5px;
            border-radius: 5px;
            color: #212121;
            box-shadow: rgba(0, 0, 0, 0.23) 3px 5px 5px 0px;
            text-transform: uppercase;
            transition: all 0.8s ease;
            animation: wiggle ${intensity}s ease-in-out infinite alternate;
        }

        @keyframes wiggle {
          from {
              transform: rotate(-3deg);
          }
          to {
              transform: rotate(3deg);
          }
        }
        .active {
            color: #fbfbfb;
            background: #212121;
            opacity: 0;
            box-shadow: rgba(0, 0, 0, 0.23) 3px 5px 5px 0px;
        }
          }
      `}</style>
    </div>
  )
};

export default Key;