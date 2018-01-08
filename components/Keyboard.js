const Keyboard = () => (
  <div className="keyboard">
    <div className="keyboardRow">   <span className="key">Q</span>
    <span className="key">W</span>
    <span className="key">E</span>
    <span className="key">R</span>
    <span className="key">T</span>
    <span className="key">Y</span>
    <span className="key">U</span>
    <span className="key">I</span>
    <span className="key">O</span>
    <span className="key">P</span>

    </div>
    <div className="keyboardRow">   <span className="key">A</span>
    <span className="key">S</span>
    <span className="key">D</span>
    <span className="key">F</span>
    <span className="key">G</span>
    <span className="key">H</span>
    <span className="key">J</span>
    <span className="key">K</span>
    <span className="key">L</span>

    </div>
    <div className="keyboardRow">   <span className="key">Z</span>
    <span className="key">X</span>
    <span className="key">C</span>
    <span className="key">V</span>
    <span className="key">B</span>
    <span className="key">N</span>
    <span className="key">M</span>

    </div>
    <style jsx>{`
      .keyboard{
        height: 100vh;
      }
      .keyboardRow { text-align:center }
      .key { display:inline-block; border:1px solid red; padding:10px;margin-bottom:5px; }
    `}</style>
  </div>
);

export default Keyboard;