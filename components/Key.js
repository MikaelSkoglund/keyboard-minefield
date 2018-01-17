const Key = (props) => {

  const intensity = 2 / props.keysPressed.length;

  return(
    <div className={props.isActive ? 'key active' : `key`}>
      {props.char}
       <style jsx>{`
        .key {
            padding: 20px 30px;
            font-size: 24px;
            background: #e7e7e7;
            color: #000;
            margin: 5px;
            border-radius: 5px;
            box-shadow: rgba(0, 0, 0, 0.23) 3px 5px 5px 0px;
            text-transform: uppercase;
            animation: wiggle ${intensity}s ease-in-out infinite alternate;
            transition: all 0.5s ease;
            opacity: 1;
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
            opacity: 0;
            box-shadow: rgba(0, 0, 0, 0.23) 3px 5px 5px 0px;
        }

        `}</style>
    </div>
  )
};

export default Key;